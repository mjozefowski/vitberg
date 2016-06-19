/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */
//TODO: move to and connect with news form
Template.dropzone.onCreated(function () {
    this.imagesArray = new ReactiveArray();
})

Template.dropzone.onRendered(function () {

})

Template.dropzone.helpers({

    array: function () {
        var ti = Template.instance();
        console.log(ti.imagesArray.get());
        return ti.imagesArray.get();
    }

})

Template.dropzone.events({

    'submit #newsForm': function (e,t) {
        e.preventDefault();
        var array = t.imagesArray.get();
        array.forEach(function (e) {
            //var newFile = new FS.File(e)
            Images.insert(e, function (error, fileObj) {
                if (error) {
                    alert("fail")
                } else {
                    alert("success");
                    console.log(fileObj)
                    //t.imagesArray.push(fileObj.path)
                }
            });
        })








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