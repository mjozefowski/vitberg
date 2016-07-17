/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 16.07.16
 */

Schemas.notificationUser = new SimpleSchema({
    userId:{
        type:String
    },
    notificationId:{
        type:String
    },
    read:{
        type:Boolean
    }
})

NotificationsUser.attachSchema(Schemas.notificationUser);

NotificationsUser.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
})