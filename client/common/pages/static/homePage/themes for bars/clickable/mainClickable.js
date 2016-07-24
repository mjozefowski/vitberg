/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.mainClickable.onCreated(function () {
    this.data = Template.currentData();
    this.selectedItem = new ReactiveVar("")
    this.templateId = new ReactiveVar();


})

Template.mainClickable.onRendered(function () {
    $('.iconClickable').first().click();
})

Template.mainClickable.helpers({
    myTemplate: function () {
        return "subClickable"
    },
    templateData: function () {
        var ti = Template.instance();
        return ti.selectedItem.get();
    },
    icons: function () {
        var ti = Template.instance();
        var id = ti.data._id;
        var clickable = ClickableItemsTemplate.findOne({mainTemplate:id});
        var icons = clickable.icons
        console.log(icons)
        return icons;
    },
    showIcon: function () {
        var ti = Template.instance();
        return ti.data.showIcon;
    }
})

Template.mainClickable.events({
    
    "click .iconClickable": function (e,t) {
        var id = $(e.target).attr('id')
        t.selectedItem.set(id)
    },
    "click .single-block": function (e) {
        $('.single-block').removeClass('active-element');
        $(e.target).addClass('active-element');
    },
    
})