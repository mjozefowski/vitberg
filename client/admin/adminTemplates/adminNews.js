/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Template.adminNews.onCreated(function () {

})

Template.adminNews.onRendered(function () {

})

Template.adminNews.helpers({

})

Template.adminNews.events({





    "submit #news-form": function (e,t) {
        e.preventDefault();
        var target = e.target;
        var text = target.text.value;
        console.log(text)
        News.insert({authorId:Meteor.userId(),text:text}, function (e,r) {
            if(!e){
                $('#text').val("")
            }
        });

    }

})

