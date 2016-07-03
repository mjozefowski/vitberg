/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Template.mainNews.onCreated(function () {
    this.data = Template.currentData();
})

Template.mainNews.onRendered(function () {

})

Template.mainNews.helpers({

    imageLeft: function () {
        var ti = Template.instance();
        return ti.data.images[0]
    },
    news: function () {
        return News.find({},{limit:6})
    },
    title: function () {
        var ti = Template.instance();
        return ti.data.title;
    },
    text: function () {
        var ti = Template.instance();
        return ti.data.text;
    },
    linkText: function () {
        var ti = Template.instance()
        return ti.data.link.text;
    },
    linkUrl: function () {
        var ti = Template.instance();
        return ti.data.link.url;
    }


})

Template.mainNews.events({})