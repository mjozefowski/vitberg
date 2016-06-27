/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Template.adminNews.onCreated(function () {
    this.imagesArray = new ReactiveArray();
    this.done = new ReactiveVar();
})

Template.adminNews.onRendered(function () {

})

Template.adminNews.helpers({
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

Template.adminNews.events({


    'submit #newsForm': function (e,t) {
        e.preventDefault();
        t.done.set(false);
        var target = e.target;
        var text = $('#text').val();
        var title = $('#title').val()
        var isImportant = $('#important').is(':checked');
        console.log(isImportant)
        console.log(text)
        var newsId = News.insert({authorId:Meteor.userId(),text:text, title:title, isImportant:isImportant }, function (e,r) {
            if(!e){
                $('#text').val("")
                var newsId = r;
                var array = t.imagesArray.get();
                array.forEach(function (e) {
                    Images.insert(e, function (error, fileObj) {
                        if (error) {
                            alert("fail")
                        } else {

                            console.log("images start");
                            console.log(newsId);
                            console.log(fileObj._id);
                            console.log("images end")
                            News.update(newsId,{$addToSet:{media:fileObj._id}}, function (e,r) {
                                if(e){
                                    console.log("update failed")
                                }
                            })

                        }
                    });
                })


            }else{

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

