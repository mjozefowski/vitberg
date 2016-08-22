/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Modal.allowMultiple = true

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
    },
    clickableMain: function () {
        var ti = Template.instance();
        //console.log(ti.data)
        //console.log(ClickableItemsTemplate.findOne({mainTemplate:ti.data._id}))
        return ClickableItemsTemplate.findOne({mainTemplate:ti.data._id})
    },

    subTemplate: function (id) {
        return TemplatesForMainClickable.findOne(id)
    }

})

Template.adminmainClickableModal.events({

    'click #addNewClickableElement': function (e,t) {
        if(ClickableItemsTemplate.find({mainTemplate:t.data._id}).count()<=0){
            ClickableItemsTemplate.insert({mainTemplate: t.data._id});
        }

        var id = ClickableItemsTemplate.findOne({mainTemplate: t.data._id})._id;

        var id2 = TemplatesForMainClickable.insert({});
        ClickableItemsTemplate.update(id,{$addToSet:{icons:{templateId:id2}}});

        Session.set('editClickable',id2)

        Modal.show('adminClickableTemplateCreatorModal', function () {
            return TemplatesForMainClickable.findOne(Session.get('editClickable'));
        })


    },

    'click .btn-warning': function (e,t) {
        Session.set('editClickable',$(e.target).attr('id'))

        Modal.show('adminClickableTemplateCreatorModal', function () {
            return TemplatesForMainClickable.findOne(Session.get('editClickable'));
        })    },

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


    },

    "click .btn-delete-clickable-in-modal": function (e, t) {
        var id = $(e.target).attr("id")
        TemplatesForMainClickable.remove(id)

        var id2 = ClickableItemsTemplate.findOne({'icons.templateId':id});
        console.log(id2)
        var tempId = id2._id
        ClickableItemsTemplate.update(tempId,{$pull: {icons:{"templateId":id}}})

        var temp = TemplatesForMainClickable.findOne(id)
        var img = $(e.target).parent().prev().attr('path')
        console.log(img.replace('/cfs/files/images/',""))
        Images.remove(img.replace('/cfs/files/images/',""))
        TemplatesForMainClickable.remove(id)
    }

})