/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.07.16
 */

Template.createClickable.onCreated(function () {
    this.mainTemplateId = Template.currentData()._id;
    this.masterTemplate = ClickableItemsTemplate.insert({mainTemplate:Template.currentData()._id})
    this.addNew = new ReactiveVar(false)
    this.isFileNewElementLoaded = new ReactiveVar(false);
    this.imagesArray = new ReactiveArray();
    this.done = new ReactiveVar(false);
})

Template.createClickable.onRendered(function () {

})

Template.createClickable.helpers({
    thisTemplate: function () {
        var ti = Template.instance();
        return ClickableItemsTemplate.findOne(ti.masterTemplate)
    },
    addNew: function () {
        var ti = Template.instance();
        return ti.addNew.get();
    },
    isFileNewElementLoaded: function () {
        var ti = Template.instance();
        return ti.isFileNewElementLoaded.get()
    },
    templatesForMainClickableList: function () {

        var ti = Template.instance();
        var masterId = ti.masterTemplate;
        try{
            var clickable = ClickableItemsTemplate.findOne(masterId);
            var list = clickable.icons;
            var listOfIds = [];

            list.forEach(function (e) {
                listOfIds.push(e.templateId)
            })
            console.log(TemplatesForMainClickable.find({_id:{$in:listOfIds}}))
            return TemplatesForMainClickable.find({_id:{$in:listOfIds}});
        }catch (e){
            return;
        }
    },
    array: function () {
        var ti = Template.instance();
        console.log(ti.imagesArray.get());
        return ti.imagesArray.get();
    },

})

Template.createClickable.events({

    'click #addNew': function (e,t) {
        t.addNew.set(true)
    },
    'dropped #dropzone': function(e,t) {

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile)
            ti.isFileNewElementLoaded.set(true)
        });
    },
    'click #newElementFileAccept': function (e,t) {

        TemplatesForMainClickable.insert({text:"subClickable"}, function (e,r) {
            if(!e){
                if(r){
                    var subId = r;
                    var array = t.imagesArray.get();
                    array.forEach(function (e) {
                        Icons.insert(e, function (e, fileObj) {
                            if (e) {
                                console.log("Icons insert failed")
                            } else {
                                var icons = {
                                    image:fileObj._id,
                                    templateId:subId
                                }
                                ClickableItemsTemplate.update(t.masterTemplate,{$push:{icons:icons}},function(e){
                                    if(!e){
                                    }else{
                                        console.log("update ClickableItemsTemplate failed")
                                    }
                                });
                            }
                        });
                    })

                }else{
                    console.log("nie ma R!")
                }

            }else{
                console.log("TemplatesForMainClickable insert failed")
            }
            t.imagesArray.set([]);
            t.addNew.set(false)
        });
    },

    'click .removeElement': function (e,t) {
        var id = $(e.target).parent().attr('id');
        console.log(id)
        Meteor.call('deleteTemplatesForMailClickable',id)
    },
    'click .editElement': function (e,t) {
        var id = $(e.target).parent().attr('id')
        Session.set('selectedId',id)
        Modal.show('editWhiteBox', function () {
            var id2 = Session.get('selectedId')
            return id2;
        });


    },
    'click .removeImage': function (e,t) {
        var name = $(e.target).parent().attr('id');
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