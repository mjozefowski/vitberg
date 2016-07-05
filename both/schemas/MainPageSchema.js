/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 23.06.16
 */

Schemas.MainPage = new SimpleSchema({

    text:{
        type:String,
        optional:true
    },
    images:{
        type:[String],
        optional:true
    },
    link:{
      type:Schemas.LinkSchema,
      optional:true
    },
    type:{
        type:String,
        allowedValues: ['mainParallax', 'mainRedLeft', 'mainRedRight'],
        autoform: {
            options: [
                {label: "Paralaxa", value: "mainParallax"},
                {label: "Czerwony, obraz po lewej", value: "mainRedLeft"},
                {label: "Czerwony, obraz po prawej", value: "mainRedRight"},
                {label: "Kafelek z ikonami do klikania", value: "mainClickable"}
            ]
        }    },
    order:{
        type:Number.decimal
    },
    title:{
        type:String,
        optional:true
    },
    visible:{
        type:Boolean
    }

})

MainPage.attachSchema(Schemas.MainPage);

MainPage.allow({
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