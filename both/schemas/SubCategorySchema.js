/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 11.06.16
 */

Schemas.SubCategoriesSchema = new SimpleSchema({

    name:{
        type:String
    },
    categoryId:{
        type:String
    },
    selectedTemplate:{
        type:String,
        optional:true
    },
    visible:{
        type:Boolean,
        optional:true
    }

})


SubCategories.attachSchema(Schemas.SubCategoriesSchema);

SubCategories.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});