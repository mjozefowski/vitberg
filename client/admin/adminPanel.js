/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Template.adminPanel.onCreated(function () {
    this.template = new ReactiveVar("dashboard")
})

Template.adminPanel.onRendered(function () {

})

Template.adminPanel.helpers({

    template: function () {
        var ti = Template.instance();

        return ti.template.get();
    },
    unreadNotifications: function () {
        var visibleNotes = Notifications.find({visible:true});
        var ids = [];

        visibleNotes.forEach(function (e) {
            ids.push(e._id)
        })

        return NotificationsUser.find({notificationId:{$in:ids},userId:Meteor.userId(),read:false}).count();

    }

})

Template.adminPanel.events({

    'click .admin-navigation-item': function (e,t) {
        e.preventDefault();
        var id = $(e.target).attr("id");
        t.template.set(id)
    }

})