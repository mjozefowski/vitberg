/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.08.16
 */

Schemas.ProductsClickableItemsSchema = new SimpleSchema({
    type:{
      type:String,
        optional:true,
        autoform: {
            type: "select",
            options: function () {
                return [{
                    label: "Obraz po prawej",
                    value: "rightPhoto"
                }, {
                    label: "Obraz po lewej",
                    value: "leftPhoto"
                },{
                    label: "Obraz na środku",
                    value: "centerPhoto"
                }, {
                    label: "Obraz na środku, kolumny",
                    value: "centerPhotoColumns"
                }];
            }
        }
    },
    title:{
        type:String,
        optional:true
    },

    image:{
        type:String,
        optional:true
    },
    text:{
        type:String,
        optional:true,

    },
    link:{
        type:Schemas.LinkSchema,
        optional:true
    },
    useCase:{
        type:[String],
        optional:true
    }
})

ProductsClickableItems.attachSchema(Schemas.ProductsClickableItemsSchema);

ProductsClickableItems.allow({
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
