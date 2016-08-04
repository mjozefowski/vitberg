/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */
//TODO: move to and connect with news form
Template.dropzone.onCreated(function () {
    Meteor.subscribe('imagesFromClient')
    Meteor.subscribe('opinions')
    this.imagesArray = new ReactiveArray();
    reCAPTCHA.config({
        publickey: '6Lez5h0TAAAAAPMOrPCuw8Z5adMDj5h8_dlLYWdI',
        hl: 'pl' // optional display language
    });
})

Template.dropzone.onRendered(function () {

})

Template.dropzone.helpers({

    array: function () {
        var ti = Template.instance();
        console.log(ti.imagesArray.get());
        return ti.imagesArray.get();
    },

    //temp
    opinions: function () {
        return Opinions.find()
    },

    thumbs: function (id) {
        return Thumbs.find({_id:id})

    },
    img: function (images) {
        console.log(images)
        return images[0].thumb
    }



})

Template.dropzone.events({

    'submit #clientOpinionForm': function (e,t) {
        e.preventDefault();
        var target = e.target;

        if(target.text.value.length < 200){

            sAlert.info('Opinia musi zawierać min. 200 znaków', {effect: 'slide', position: 'top-right', timeout: '2000', onRouteClose: true, stack: true, offset: '80px'});
            return;
        }

        var formData = {
            message:target.text.value,
        };

        //get the captcha data
        var captchaData = grecaptcha.getResponse();

        Meteor.call('formSubmissionMethod', captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();
            if (error) {
                console.log('There was an error: ' + error.reason);
                sAlert.info('Prosze zaznaczyć pole captcha', {effect: 'slide', position: 'top-right', timeout: '2000', onRouteClose: true, stack: true, offset: '80px'});

            }else {

                console.log("no error in captcha")
                var opinion = Opinions.insert({"opinionText": formData.message, "approved": false}, function (e, r) {
                    if (!e) {
                        var array = t.imagesArray.get();
                        array.forEach(function (e) {
                            ImagesFromClient.insert(e, function (error, fileObj) {
                                if (error) {
                                    console.log("addClientOpinion ImagesFromClient.insert failed")
                                } else {
                                    Thumbs.insert(e, function (err, file) {
                                        if(!err){
                                            console.log("addClientOpinion ImagesFromClient.insert passed: ")
                                            setTimeout(function(){

                                                Opinions.update(opinion, {$addToSet: {images: {img:fileObj._id,thumb:file._id}}}, function (e, r) {
                                                    if (e) {
                                                        console.log("update failed")
                                                    }
                                                })

                                            }, 3000);

                                            t.imagesArray.set([])
                                        }
                                    });

                                }
                            });
                        })

                    }
                });
            }
        });

    },

    'dropped #dropzone': function(e,t) {

        var tiTmp = Template.instance();
        var arrayTmp = tiTmp.imagesArray.get();

        console.log(arrayTmp.length);

        if(arrayTmp.length<=3){
            FS.Utility.eachFile(e, function(file) {
                var newFile = new FS.File(file);

                //t.imagesArray.push(newFile);
                var ti = Template.instance();

                var tmpTab = ti.imagesArray.get();
                if(tmpTab.length<=4){
                    ti.imagesArray.push(newFile);
                    console.log(ti.imagesArray.get())
                }
            });
        }

    },
    'click .remove-image': function (e,t) {
        var name = $(e.target).attr('id');
        var i=0;
        var file =-1;
        var array = t.imagesArray.get();
        array.forEach(function (e) {

            if(e.data.blob.name == name){
                console.log('match')
                file=i;
            }
            i++
        })
        if(file!=-1){
            t.imagesArray.splice(file,1)
        }

    },
    'click .opinionThumb': function (e, t) {
        Session.set('selectedOpinion', $(e.target).parent().attr('id'));
        Modal.show('opinionsGalleryModal', function () {
            return Opinions.findOne({_id:Session.get('selectedOpinion')})
        })
    }

})