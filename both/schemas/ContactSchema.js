/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Schemas.ContactSchema = new SimpleSchema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        regEx:SimpleSchema.RegEx.Email
    },
    skype:{
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