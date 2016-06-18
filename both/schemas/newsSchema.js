/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Schemas.newsSchema = new SimpleSchema({

    text:{
        type:String
    },
    authorId:{
        type:String
    },
    media:{
        type:[String],
        optional:true
    },
    date:{
        type:Date
    }

})
