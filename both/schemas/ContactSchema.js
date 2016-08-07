/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Schemas.ContactSchema = new SimpleSchema({

    firstName:{
        type:String,
        optional:true
    },
    position:{
        type:String,
        optional:true
    },
    lastName:{
        type:String,
        optional:true
    },
    phone:{
        type:String,
        optional:true
    },
    cellPhone:{
        type:String,
        optional:true
    },
    email:{
        type:String,
        regEx:SimpleSchema.RegEx.Email,
        optional:true
    },
    skype:{
        type:String,
        optional:true
    },
    image:{
        type:String,
        optional:true
    }


});

Contact.attachSchema(Schemas.ContactSchema);

Contact.allow({
    insert: function () {
        return true
    },
    update: function () {
        return true
    },
    remove: function () {
        return true
    }
})