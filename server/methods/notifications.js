/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 16.07.16
 */

Meteor.methods({

    markAsRead: function (id) {
        if(this.userId && Roles.userIsInRole(this.userId,['admin,editor'])){
            var notificationUser = NotificationsUser.findOne({userId:this.userId,notificationId:id});
            NotificationsUser.update(notificationUser._id,{$set:{read:true}})
            return true;
        }else{
            return false;
        }

    },
    addUnreadNotification: function (id) {
        if(this.userId && Roles.userIsInRole(this.userId,['admin,editor'])){
            var users = Meteor.users.find({});
            console.log("addNotificationUnreadpasfpa")
            users.forEach(function (e) {
                NotificationsUser.insert({userId: e._id,notificationId:id,read:false})
            })
        }
    }

})