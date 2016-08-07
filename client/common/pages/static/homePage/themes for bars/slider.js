/**
 * Created by SkylinR on 05.07.2016.
 */

Template.slider.onCreated(function () {

})

Template.slider.onRendered(function () {

    $('.slider').slider({
        full_width: true,
        indicators: false,
        height: 500,
        transition: 300
    });

})

Template.slider.helpers({

})

Template.slider.events({

    'click #addOpinion': function (e,t) {

        Router.go('/static/addOpinion')
    },
    'click #contact': function (e,t) {

        Router.go('/static/contact')
    },
    'click #map': function (e,t) {

        Router.go('/static/map')
    }
})