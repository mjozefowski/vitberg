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
    this.selectedDocument = new ReactiveVar()
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
        if(ti.selectedTheme.get() == "mainRedRight")
            return true;

        return false;
    },
    redRight: function () {
        var ti = Template.instance();
        if(ti.selectedTheme.get() == "mainRedLeft")
            return true;

        return false;
    },
    selectedDoc: function () {
        var ti = Template.instance();
        return MainPage.findOne(ti.selectedDocument.get())
    }


})

Template.adminMainPage.events({

    "submit #selectTemplate": function (e, t) {
        e.preventDefault();
        var value = $("input[type='radio'][name='type']:checked").val();

        console.log(value)
        t.selectedDocument.set(MainPage.insert({order:10,type:value, visible:false, text:"Wpisz treść ..."}));
        t.selectedTheme.set(value);
        t.insert.set(true)
    },
    "click #addNewMainPage": function (e,t) {
        t.addNewBar.set(true);
    }

})