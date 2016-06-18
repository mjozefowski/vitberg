/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.menu.onCreated(function () {
       Meteor.subscribe('Categories')

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
    'click #news': function () {
        Router.go('/static/news')
    }
})