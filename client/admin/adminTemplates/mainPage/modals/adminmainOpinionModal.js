/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Template.adminmainOpinionModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminmainOpinionModal.onRendered(function () {

})

Template.adminmainOpinionModal.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }
})

Template.adminmainOpinionModal.events({
    //'click #save': function (e,t) {
    //    $('.saveButton').click();
    //    var array = t.imagesArray.get();
    //    array.forEach(function (e) {
    //        Images.insert(e, function (error, fileObj) {
    //            if (error) {
    //                alert("fail")
    //            } else {
    //                setTimeout(function(){
    //                    MainPage.update(t.selectedDocument.get(),{$addToSet:{images:fileObj._id}}, function (e,r) {
    //                        if(e){
    //                            console.log("update failed")
    //                        }else {
    //                            t.imagesArray.set([]);
    //                        }
    //                    })
    //                }, 2000);
    //
    //            }
    //        });
    //    })
    //    //t.insert.set(false);
    //}

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