/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 02.07.16
 */

Template.mainRedLeft.onCreated(function () {
    this.data = Template.instance();

    calcMainRedLeft();
})

Template.mainRedLeft.onRendered(function () {

    calcMainRedLeft();
    setTimeout(calcMainRedLeft(),200);

})

Template.mainRedLeft.helpers({

    imageLeft : function () {
        var ti = Template.instance();
        return ti.data.images[0]
    },
    linkUrl: function () {
        var ti = Template.instance();
        return ti.data.link.url;
    },
    linkText: function () {
        var ti = Template.instance();
        return ti.data.link.text;
    },
    text: function () {
        var ti = Template.instance();
        return ti.data.text
    },
    title: function () {
        var ti = Template.instance();
        return ti.data.title;
    },
    icon: function () {
        var ti = Template.instance()
        return ti.data.icon
    },
    showIcon: function () {
        var ti = Template.instance()
        return ti.data.showIcon
    }


})

Template.mainRedLeft.events({

})

$(window).resize(function () {
    calcMainRedLeft();
})

function calcMainRedLeft(){
    var marginLeft = "calc(50% - "+($(".top-clip-left").outerWidth()/2) + "px)"
    $(".top-clip-left").css("margin-left",marginLeft);
}