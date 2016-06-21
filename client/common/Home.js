/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.Home.onCreated(function () {

})

Template.Home.onRendered(function () {
    $('.collapsible').collapsible();
    $('.slider').slider({
        full_width: true,
        indicators: false,
        height: 600,
        transition: 1000
    });
    $('.materialboxed').materialbox();

    $('.parallax').parallax();
})

Template.Home.helpers({

})

Template.Home.events({

})
