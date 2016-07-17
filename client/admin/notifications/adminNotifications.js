/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 16.07.16
 */

Template.adminNotifications.onCreated(function () {

})

Template.adminNotifications.onRendered(function () {

})

Template.adminNotifications.helpers({

    notifications: function () {
        return Notifications.find({visible:true},{sort:{date:1}})
    },
    isNotRead: function (id) {
        var notification = NotificationsUser.findOne({notificationId:id,userId:Meteor.userId()});
        console.log(!notification.read);
        return !notification.read;
    }

})

Template.adminNotifications.events({

    "click #addNotification":function(){
        var id = Notifications.insert({title:"Nowe powiadomienie", date:new Date(),visible:false})

        Meteor.call('addUnreadNotification',id);

        Session.set('notificationId',id)
        Modal.show('addNotificationModal', function () {
            var id2  = Session.get('notificationId')
            return id2;
        });
    },

    'click .markAsRead': function (e,t) {
        var id = $(e.target).parent().attr('id');

        Meteor.call('markAsRead',id, function (e,r) {
            if(!e){
                if(!r){
                    alert("wystąpił błąd")
                }
            }
        });
    },

    'click .editNotification': function (e, t) {
        var id = $(e.target).parent().attr('id');

        Session.set('notificationId',id)
        Modal.show('addNotificationModal', function () {
            var id2  = Session.get('notificationId')
            return id2;
        });
    }

})