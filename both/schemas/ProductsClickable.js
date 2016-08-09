/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.08.16
 */



Schemas.ProductsClickableSchema = new SimpleSchema({

    icons:{
        type:[Schemas.ClickableIcons],
        optional:true
    }
})