/**
 * Created by SkylinR on 05.07.2016.
 */

Template.slider.onCreated(function () {
    Meteor.subscribe('carousel')
})

Template.slider.onRendered(function () {

    $('.item').first().addClass('active')

    $('.slider').slider({
        full_width: true,
        indicators: false,
        height: 500,
        transition: 300
    });

})

Template.slider.helpers({

    sliderItems: function () {
        return Carousel.find()
    }

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
    },
    'click .newsletter-accept': function (e,t) {
        var val = $('.newsletter-inpt').val();

        if(val.match(SimpleSchema.RegEx.email))
            console.log('match')

    }
})
