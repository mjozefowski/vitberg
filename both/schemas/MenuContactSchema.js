/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

Schemas.MenuContactSchema = new SimpleSchema({
    name:{
        type:String
    },
    url:{
        type:String
    },
    order:{
        type:Number
    }
})

MenuContact.attachSchema(Schemas.MenuContactSchema);

MenuContact.allow({
    insert: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    },
    update: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    },
    remove: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    }
})