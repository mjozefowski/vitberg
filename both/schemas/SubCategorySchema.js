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
    visible:{
        type:Boolean,
        optional:true
    },
    title:{
        type:String,
        optional:true
    },
    text:{
        type:String,
        optional:true,
        autoform:{
            type:"textarea",
            rows: 10
        }
    },
    image:{
        type:String,
        optional:true
    },
    col1:{
        type:Schemas.Cols,
        optional:true
    },
    col2:{
        type:Schemas.Cols,
        optional:true
    },
    col3:{
        type:Schemas.Cols,
        optional:true
    },


})


SubCategories.attachSchema(Schemas.SubCategoriesSchema);

SubCategories.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});