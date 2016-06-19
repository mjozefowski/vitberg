/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Schemas.Markers = new SimpleSchema({

    lat:{
        type:Number.decimal
    },
    lng:{
        type:Number.decimal
    },
    main:{
        type:String,
        optional:true
    },
    header: {
        type:String,
        optional:true
    }

});


Markers.attachSchema(Schemas.Markers);


Markers.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});

