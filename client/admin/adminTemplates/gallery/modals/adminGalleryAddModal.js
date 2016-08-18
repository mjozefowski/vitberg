/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

Template.adminGalleryAddModal.onCreated(function () {
    this.imagesArray = new ReactiveArray();
    this.done = new ReactiveVar();

})

Template.adminGalleryAddModal.onRendered(function () {

})

Template.adminGalleryAddModal.helpers({

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

Template.adminGalleryAddModal.events({

    'submit #galleryForm': function (e,t) {
        e.preventDefault();
        t.done.set(false);
        var target = e.target;
        var title = $('#title').val();
        var order = $('#order').val();

        var galleryId = Gallery.insert({name:title, order:order}, function (e,r) {
            if(!e){
                var galleryId = r;
                var array = t.imagesArray.get();
                array.forEach(function (e) {
                    Images.insert(e, function (error, fileObj) {
                        if (error) {
                            alert("fail")
                        } else {

                            console.log("images start");
                            console.log(galleryId);
                            console.log(fileObj._id);
                            console.log("images end")
                            Gallery.update(galleryId,{$addToSet:{images:"/cfs/files/images/"+fileObj._id}}, function (e,r) {
                                if(e){
                                    console.log("update failed")
                                }
                            })

                        }
                    });
                })


            }else{
                console.log("adding news failed")
            }
            t.imagesArray.set([]);
            t.done.set(true);
        });


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