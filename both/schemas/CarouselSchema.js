/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Schemas.CarouselSchema = new SimpleSchema({

    image:{
        type:String
    }

});

Carousel.attachSchema(Schemas.CarouselSchema);

Carousel.allow({
    insert: function () {
        return true
    },
    remove: function () {
        return true
    },
    update: function () {
        return true
    }
})