/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.newsCenterPhoto.onCreated(function () {

})

Template.newsCenterPhoto.onRendered(function () {

    var quadrantPhoto = $(".news-wide-photo").width()/3 +"px";
    $('.news-wide-photo').css('height',quadrantPhoto);

})

Template.newsCenterPhoto.helpers({

})

Template.newsCenterPhoto.events({

})

$(window).resize(function(){
    var quadrantPhoto = $(".news-wide-photo").width()/3 +"px";
    $('.news-wide-photo').css('height',quadrantPhoto);
});