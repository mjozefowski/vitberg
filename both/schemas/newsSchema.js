/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */


Schemas.newsSchema = new SimpleSchema({

    text:{
        type:String,
        optional:true
    },
    authorId:{
        type:String,
        optional:true
    },
    media:{
        type:[String],
        optional:true
    },
    date:{
        type:Date,
        optional:true
    }

});

News.attachSchema(Schemas.newsSchema);

News.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
