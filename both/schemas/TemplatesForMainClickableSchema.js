/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Schemas.TemplatesForMainClickableSchema = new SimpleSchema({


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
        optional:true
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