/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 16.07.16
 */

Schemas.notificationSchema = new SimpleSchema({

    title:{
        type:String
    },
    text:{
        type:String,
        optional:true
    },
    date:{
        type:Date
    },
    visible:{
        type:Boolean
    }

});

Notifications.attachSchema(Schemas.notificationSchema);

Notifications.allow({
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