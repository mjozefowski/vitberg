/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 02.07.16
 */

Template.mainRedLeft.onCreated(function () {
    this.data = Template.instance();
})

Template.mainRedLeft.onRendered(function () {

})

Template.mainRedLeft.helpers({

    imageLeft : function () {
        var ti = Template.instance();
        return ti.data.images[1]
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
    }


})

Template.mainRedLeft.events({})