/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminNewsEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminNewsEditModal.onRendered(function () {

})

Template.adminNewsEditModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return News.findOne(ti.data)
    }

})

Template.adminNewsEditModal.events({


    'change .myFileInput': function(event, t) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {

                    setTimeout(function(){

                        News.update(t.data,{$addToSet:{media:"/cfs/files/images/"+fileObj._id}})

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
                News.update(t.data,{$pull:{media:id}});
            }
        })


    },

    'click .click-save-newsblock-modal':function(){
        $('.clicked-save-newsblock-modal').click();

        $(".isImportantInpt").parent().text("Wyróżniony").append(cache);
        $(".isSmallInpt").parent().text("Obrazek z lewej").append(cache2);
    },

})
