/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Schemas = {};

Schemas.LinkSchema = new SimpleSchema({
    text:{
        type:String
    },
    url:{
        type:String
    }
})

Schemas.Cols = new SimpleSchema(({
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
    }
}))
