/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.newsSmallPhoto.onCreated(function () {

})

Template.newsSmallPhoto.onRendered(function () {

    var ratioPhoto = $(".small-news-media").width()*9/16 +"px";
    $('.small-news-media').css('height',ratioPhoto);

})

Template.newsSmallPhoto.helpers({

})

Template.newsSmallPhoto.events({

})

$(window).resize(function(){
    var ratioPhoto = $(".small-news-media").width()*9/16 +"px";
    $('.small-news-media').css('height',ratioPhoto);
});