/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Schemas.newsletterSchema = new SimpleSchema({

    email:{
        type:String,
        regEx:SimpleSchema.RegEx.Email
    },
    date:{
        type:Date,
        optional:true
    }

})