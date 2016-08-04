/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */
Schemas.OpinionImagesSchema = new SimpleSchema({
    img:{
        type:String,
        optional: true
    },
    thumb:{
        type:String,
        optional: true
    }
})

Schemas.OpinionsSchema = new SimpleSchema({

    opinionText:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    city:{
        type:String
    },
    sex:{
        type:String,
        allowedValues: ['female', 'male','unconventional']
    },
    phone:{
        type:Number,
        regEx: SimpleSchema.RegEx.Phone
    },
    email:{
        type:String,
        optional:true,
        regEx: SimpleSchema.RegEx.Email
    },
    images:{
        type:[Schemas.OpinionImagesSchema],
        optional:true
    },
    approved:{
        type:Boolean
    }
    //TODO: add autoform for approved, add image resizing hooks

})


Opinions.attachSchema(Schemas.OpinionsSchema);

Opinions.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});