/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.mainOpinions.onCreated(function () {
    this.data = Template.currentData();
})

Template.mainOpinions.onRendered(function () {

    $('.slider').slider({
        full_width: true,
        indicators: true,
        height: 400,
        transition: 300,
        interval:12000
    });
    $('.slider').slider('pause');

    // Start slider
//    $('.slider').slider('start');
//// Next slide
//    $('.slider').slider('next');
//// Previous slide
//    $('.slider').slider('prev');

})

Template.mainOpinions.helpers({

    showIcon: function () {
        var ti = Template.instance();
        return ti.data.showIcon
    },

    opinions: function () {
        return Opinions.find({approved:4},{limit:4})
    }

})

Template.mainOpinions.events({})

