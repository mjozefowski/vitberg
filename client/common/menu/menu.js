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
        return SubCategories.find({'categoryId':id})
    }

})

Template.menu.events({
    'click #strona_glowna': function () {
        Router.go('/')
    },
    'click #news': function () {
        Router.go('/static/news')
    },
    'click #map': function () {
        Router.go('/static/map')
    },
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
    },

    'click .dropdown-hamburger':function(e){
        $(e.target).children("ul").toggleClass('unrolled');
    },



})
