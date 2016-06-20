/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */

Schemas.OpinionsSchema = new SimpleSchema({

    opinionText:{
        type:String
    },
    images:{
        type:[String],
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