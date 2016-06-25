/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 23.06.16
 */

Schemas.MainPage = new SimpleSchema({

    sectionOne:{
        type:String,
        optional:true
    },
    sectionOneImage:{
        type:String,
        optional:true
    },
    sectionTwo:{
        type:String,
        optional:true
    },
    parallaxImage:{
        type:String,
        optional:true
    },
    sectionThree:{
        type:String,
        optional:true
    },
    sectionThreeImageOne:{
        type:String,
        optional:true
    },
    sectionThreeImageTwo:{
        type:String,
        optional:true
    },
    sectionThreeImageThree:{
        type:String,
        optional:true
    }

})

MainPage.attachSchema(Schemas.MainPage);

MainPage.allow({
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