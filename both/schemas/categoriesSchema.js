/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 11.06.16
 */


Schemas.CategoriesSchema = new SimpleSchema({

    name:{
        type:String
    },
    url:{
        type:String,
        optional:true
    },
    visible:{
        type:Boolean,
        optional:true
    }

})

Categories.attachSchema(Schemas.CategoriesSchema);

Categories.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});
