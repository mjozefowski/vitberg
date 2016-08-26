/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 26.08.16
 */

Schemas.SubCategoriesContainerSchema = new SimpleSchema({


    name:{
        type:String,
        optional:true
    },
    categoryId:{
        type:String
    },
    subcategoriesIds:{
        type:[String],
        optional:true
    },
    order:{
        type:Number,
        optional:true
    },
    visible:{
        type:Boolean,
        optional:true
    }

});

SubCategoriesContainer.attachSchema(Schemas.SubCategoriesContainerSchema);

SubCategoriesContainer.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
})