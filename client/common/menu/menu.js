/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.menu.onCreated(function () {
       Meteor.subscribe('Categories')
       Meteor.subscribe('images')

})

Template.menu.onRendered(function () {

})

Template.menu.helpers({

    categories: function () {
       return Categories.find()
    },
    subCategories: function (id) {
        return SubCategories.find({'categoryId':id, visible:true})
    }

})

Template.menu.events({
    'click #strona_glowna': function () {
        Router.go('/')
    },
    'click #news': function () {
        Router.go('/static/news')
    },
    //'click #map': function () {
    //    Router.go('/static/map')
    //},
    'click #admin-panel': function () {
        Router.go('/static/admin')
    },
    'click #logout': function () {
        Meteor.logout()
        Router.go("/")
    },
    'click #menu-hamburger-btn':function(){
      $('.whole-hamburger-container').toggleClass('show-hamburger-menu');
        $('.hamburger-menu-ico').toggleClass('move-hamburger-ico');
        $(".dropdown-menu-hamburger").removeAttr('style');
        $(".hamburger-content-container").delay(5000).toggleClass('behind');

    },

    'click .hamburger-roll-button':function(){
        $('.whole-hamburger-container').toggleClass('show-hamburger-menu');
        $('.hamburger-menu-ico').toggleClass('move-hamburger-ico');
        $(".dropdown-menu-hamburger").removeAttr('style');
        $(".hamburger-content-container").delay(5000).toggleClass('behind');
    },


    'click .dropdown-hamburger':function(e){
        var ulLength = $(e.target).children(".dropdown-menu-hamburger").children('li').length; //Number of li in ul
        var liHeight = $(e.target).children(".dropdown-menu-hamburger").children('li').height();  //Height of single li
        var totalHeight = ulLength * (liHeight + 20);   //Height of whole ul (liHeight + 20px margin)

        if ($(e.target).children(".dropdown-menu-hamburger").attr('style')) {

            $(e.target).children(".dropdown-menu-hamburger").removeAttr('style');
        } else {
            $(".dropdown-menu-hamburger").removeAttr('style');
            $(e.target).children(".dropdown-menu-hamburger").css('max-height', totalHeight);
        }


    },



})
