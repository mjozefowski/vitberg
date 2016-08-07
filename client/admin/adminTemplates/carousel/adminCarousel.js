/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminCarousel.onCreated(function () {

})

Template.adminCarousel.onRendered(function () {

})

Template.adminCarousel.helpers({

})

Template.adminCarousel.events({

    'click #addCarouselItem': function (e, t) {
        Modal.show('adminCarouselAddModal')
    }

})