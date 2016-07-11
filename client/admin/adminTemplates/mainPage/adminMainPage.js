/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 23.06.16
 */

Template.adminMainPage.onCreated(function () {
    this.selectedTheme = new ReactiveVar("")
    this.insert = new ReactiveVar(false);
    this.addNewBar = new ReactiveVar(false)
    this.selectedDocument = new ReactiveVar();
    this.imagesArray = new ReactiveArray();
})

Template.adminMainPage.onRendered(function () {

})

Template.adminMainPage.helpers({

    doc:function(){
        return MainPage.findOne();
    },
    addNewBar: function () {
        var ti = Template.instance();
        return ti.addNewBar.get()
    },
    parallax: function () {
        var ti = Template.instance();
        if(ti.selectedTheme.get() == "mainParallax")
        return true;

        return false;
    },
    redLeft: function () {
        var ti = Template.instance();
        if(ti.selectedTheme.get() == "mainRedLeft")
            return true;

        return false;
    },
    redRight: function () {
        var ti = Template.instance();
        if(ti.selectedTheme.get() == "mainRedRight")
            return true;

        return false;
    },
    clickable: function () {
        var ti = Template.instance();
        if(ti.selectedTheme.get() == "mainClickable")
            return true;

        return false;
    },
    selectedDoc: function () {
        var ti = Template.instance();
        return MainPage.findOne(ti.selectedDocument.get())
    },
    listOfBlocks: function () {
        return MainPage.find({},{sort:{order:1}});
    }


})

Template.adminMainPage.events({

    "submit #selectTemplate": function (e, t) {
        e.preventDefault();
        var value = $("input[type='radio'][name='type']:checked").val();

        console.log(value)
        t.selectedDocument.set(MainPage.insert({order:10,type:value, visible:true, text:"Wpisz treść ..."}));
        t.selectedTheme.set(value);
        t.insert.set(true)
    },
    "click #addNewMainPage": function (e,t) {
        t.addNewBar.set(true);
    },
    "click .deleteBlock": function (e, t) {
        var id = $(e.target).parent().attr('id');
        var type = $(e.target).parent().attr('block-type');

        Meteor.call('delete'+type,id);

        console.log(type)
    },
    'click #save': function (e,t) {
        $('.saveButton').click();
                var array = t.imagesArray.get();
                array.forEach(function (e) {
                    Images.insert(e, function (error, fileObj) {
                        if (error) {
                            alert("fail")
                        } else {
                            MainPage.update(t.selectedDocument.get(),{$addToSet:{images:fileObj._id}}, function (e,r) {
                                if(e){
                                    console.log("update failed")
                                }else {
                                    t.imagesArray.set([]);
                                }
                            })
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

})