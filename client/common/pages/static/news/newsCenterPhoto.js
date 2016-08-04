/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.newsCenterPhoto.onCreated(function () {
    this.data = Template.currentData()
})

Template.newsCenterPhoto.onRendered(function () {

    var quadrantPhoto = $(".news-wide-photo").width()/3 +"px";
    $('.news-wide-photo').css('height',quadrantPhoto);

})

Template.newsCenterPhoto.helpers({
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

Template.newsCenterPhoto.events({

})

$(window).resize(function(){
    var quadrantPhoto = $(".news-wide-photo").width()/3 +"px";
    $('.news-wide-photo').css('height',quadrantPhoto);
});