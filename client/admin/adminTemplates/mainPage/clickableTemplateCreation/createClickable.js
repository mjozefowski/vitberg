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
    }
    
    
})

Template.createClickable.events({

    'click #addNew': function (e,t) {
        t.addNew.set(true)
    },
    'dropped #dropzone': function(e,t) {

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            console.log(newFile)
            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile)
            console.log("pushed")
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
                                        console.log("update ClickableItemsTemplate done")
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
            t.done.set(true);
        });


    },


})