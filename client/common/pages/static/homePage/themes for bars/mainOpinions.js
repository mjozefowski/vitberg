/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.mainOpinions.onCreated(function () {
    this.data = Template.currentData();

    calcMainOpinions();
})

Template.mainOpinions.onRendered(function () {

    $('.opinion-main-item').first().addClass('active')


    $('.slider').slider({
        full_width: true,
        indicators: true,
        height: 400,
        transition: 300,
        interval:12000
    });
    $('.slider').slider('pause');

    calcMainOpinions();
    setTimeout(calcMainRedLeft(),200);

})

Template.mainOpinions.helpers({

    showIcon: function () {
        var ti = Template.instance();
        return ti.data.showIcon
    },

    opinions: function () {
        console.log(Opinions.find({approved:true},{limit:4}).fetch())
        return Opinions.find({approved:true},{limit:4})
    },
    image: function (obj) {

        return obj.images[0].thumb

    },
    sex: function (sex) {
        if(sex=='male')
        return 'Pan'
        else if(sex=='female')
        return 'Pani'
    },
    icon: function () {
        var ti = Template.instance();
        return ti.data.icon
    }

})

Template.mainOpinions.events({})

$(window).resize(function () {
    calcMainOpinions();
})

function calcMainOpinions(){
    var marginLeft = "calc(50% - "+($(".top-clip-opinion").outerWidth()/2) + "px)"
    $(".top-clip-opinion").css("margin-left",marginLeft);
}