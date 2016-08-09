/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.08.16
 */

Template.adminClickableTemplateCreatorModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminClickableTemplateCreatorModal.onRendered(function () {

})

Template.adminClickableTemplateCreatorModal.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data
    },
    parentTemplate: function () {
        var ti = Template.instance()
        var obj = ClickableItemsTemplate.findOne({'icons.templateId':ti.data._id});
        var icons = obj.icons;
        var ret = "";
        icons.forEach(function (e) {
            if(e.templateId==ti.data._id){
                ret = e.image
            }
        })
        return ret;
    }
})

Template.adminClickableTemplateCreatorModal.events({

    'change .myFileInput': function(event, t) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {
                    var id = ClickableItemsTemplate.findOne({'icons.templateId':t.data._id})._id
                    console.log(id)
                    setTimeout(function(){
                        var updateObj ={
                            templateId: t.data._id,
                            image:"/cfs/files/images/"+fileObj._id
                        }
                        //MainPage.update(t.data._id,{$set:{parallax:"/cfs/files/images/"+fileObj._id}})
                        ClickableItemsTemplate.update(id,{$pull:{icons:{templateId: t.data._id}}});
                        ClickableItemsTemplate.update(id,{$addToSet:{icons:updateObj}});
                        //, 'schema.icons':'image'
                        //{$set: {'schema.$.size': 7, 'schema.$.name': name
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
    'change .myFileInput-left': function(event, t) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {

                    setTimeout(function(){

                        TemplatesForMainClickable.update(t.data._id,{$set:{image:"/cfs/files/images/"+fileObj._id}})

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
                ClickableItemsTemplate.update({'icons.templateId':t.data._id},{$set:{image:""}});
            }
        })


    },
    'click .remove-image-left': function (e, t) {
        var id = $(e.target).prev().attr("id")
        console.log(id)

        Images.remove(id.replace("/cfs/files/images/",""), function (e, r) {
            if(!e){
                TemplatesForMainClickable.update(t.data._id,{$set:{image:""}});
            }
        })


    }

})