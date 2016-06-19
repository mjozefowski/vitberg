/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.News.onCreated(function () {
    //Meteor.subscribe('images')
})

Template.News.onRendered(function () {

})

Template.News.helpers({

    news: function () {
        return News.find();
    },
    author:function(authorId){
        return Meteor.users.findOne(authorId).username;
    },
    date: function (date) {
        return moment(date).format('ll')
    }


})

Template.News.events({})