/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.newsSmallPhoto.onCreated(function () {
    this.data = Template.currentData();
})

Template.newsSmallPhoto.onRendered(function () {

    var ratioPhoto = $(".media-news").width()*9/16 +"px";
    $('.media-news').css('height',ratioPhoto);

})

Template.newsSmallPhoto.helpers({

    newsDoc: function () {
        var ti = Template.instance();

        return ti.data;
    },
    image: function (obj) {
        return obj.media[0]
    },
    isVideo: function (obj) {
        try{
            if(obj.video)
            return obj.video
        }catch (e){
            return false;
        }
    }

})

Template.newsSmallPhoto.events({

})

$(window).resize(function(){
    var ratioPhoto = $(".media-news").width()*9/16 +"px";
    $('.media-news').css('height',ratioPhoto);
});