/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Template.adminmainClickableModal.onCreated(function () {
    this.data = Template.currentData();
    this.imagesArray = new ReactiveArray();

})

Template.adminmainClickableModal.onRendered(function () {

})

Template.adminmainClickableModal.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }
})

Template.adminmainClickableModal.events({
    'click #save': function (e,t) {
        $('.saveButton').click();
        var array = t.imagesArray.get();
        array.forEach(function (e) {
            Images.insert(e, function (error, fileObj) {
                if (error) {
                    alert("fail")
                } else {
                    setTimeout(function(){
                        MainPage.update(t.data._id,{$addToSet:{images:fileObj._id}}, function (e,r) {
                            if(e){
                                console.log("update failed")
                            }else {
                                t.imagesArray.set([]);
                            }
                        })
                    }, 2000);

                }
            });
        })
        //t.insert.set(false);
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
    'change .myFileInput': function(event, t) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {

                    setTimeout(function(){

                        MainPage.update(t.data._id,{$set:{icon:"/cfs/files/images/"+fileObj._id}})

                    }, 3000);

                    //var userId = Meteor.userId();
                    //var imagesURL = {
                    //    "link": "/cfs/files/pdfs/" + fileObj._id,
                    //    "name":"item"
                    //};
                    //Lesson.update({_id:t.selectedDoc.get()}, {addToSet:{download:imagesURL} });
                }
            });
        });
    },

    'click .remove-image': function (e, t) {
        var id = $(e.target).prev().attr("id")
        console.log(id)

        Images.remove(id.replace("/cfs/files/images/",""), function (e, r) {
            if(!e){
                MainPage.update(t.data._id,{$set:{icon:""}});
            }
        })


    }
})