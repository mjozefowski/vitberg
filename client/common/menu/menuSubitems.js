/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.menuSubitems.onCreated(function () {
    Tracker.autorun(function () {
        Meteor.subscribe('SubCategories')
    })

    this.data = Template.currentData();
})

Template.menuSubitems.onRendered(function () {

})

Template.menuSubitems.helpers({

    items: function () {
        var ti = Template.instance()
        console.log(ti.data)
        return SubCategories.find({categoryId:ti.data})
    },
    data: function () {
        var ti = Template.instance();
        return ti.data
    }

})

Template.menuSubitems.events({

    'click .menu-item': function (e,t) {
        e.preventDefault();
        var id = $(e.target).attr("id");
        Router.go('/'+id);
    }


})