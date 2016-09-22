/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 02.07.16
 */

Template.mainRedRight.onCreated(function () {

    calcTopClipRight();

})

Template.mainRedRight.onRendered(function () {

    setTimeout(calcTopClipRight(),200);

})

Template.mainRedRight.helpers({

    imageRight : function () {
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
        var ti = Template.instance();
        return ti.data.icon
    },
    showIcon: function () {
        var ti = Template.instance();
        return ti.data.icon
    }

})

Template.mainRedRight.events({})

$(window).resize(function () {

    calcTopClipRight();

})

function calcTopClipRight(){
    var marginLeft = "calc(50% - "+($(".top-clip-right").outerWidth()/2) + "px)"
    $(".top-clip-right").css("margin-left",marginLeft);
}