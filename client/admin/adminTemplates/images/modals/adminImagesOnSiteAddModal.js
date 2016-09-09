/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.09.16
 */

Template.adminImagesOnSiteAddModal.onCreated(function () {
    this.imagesArray = new ReactiveArray();
    this.done = new ReactiveVar();
})

Template.adminImagesOnSiteAddModal.onRendered(function () {

})

Template.adminImagesOnSiteAddModal.helpers({

    array: function () {
        var ti = Template.instance();
        console.log(ti.imagesArray.get());
        return ti.imagesArray.get();
    },
    isUploadDone: function () {
        var ti = Template.instance();
        return ti.done.get();
    }

})

Template.adminImagesOnSiteAddModal.events({

    'submit #galleryForm': function (e,t) {
        e.preventDefault();
        t.done.set(false);
        var target = e.target;
        var title = $('#title').val();
        var order = $('#order').val();


                var array = t.imagesArray.get();
                array.forEach(function (e) {
                    ImagesOnSite.insert(e, function (error, fileObj) {
                        if (error) {
                            alert("fail")
                        } else {

                            console.log("images start");

                            console.log(fileObj._id);
                            console.log("images end")
                            setTimeout(function () {
                                    ImagesOnSiteContainer.insert({image:"/cfs/files/imagesOnSite/"+fileObj._id}, function (e,r) {
                                        if(e){
                                            console.log("update failed")
                                        }
                                    })
                            }
                            ,3000);

                        }
                    });
                })



            t.imagesArray.set([]);
            t.done.set(true);


    },

    'dropped #dropzone': function(e,t) {


        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            console.log(newFile)
            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile)
            console.log("pushed")

        });
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

    }



})