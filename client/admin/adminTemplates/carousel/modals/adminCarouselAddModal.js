/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminCarouselAddModal.onCreated(function () {


})

Template.adminCarouselAddModal.onRendered(function () {

})

Template.adminCarouselAddModal.helpers({


})

Template.adminCarouselAddModal.events({


        'change .myFileInput': function(event, template) {
            FS.Utility.eachFile(event, function(file) {
                Images.insert(file, function (e, fileObj) {
                    if(!e)
                    setTimeout( function () {
                        Carousel.insert({image:fileObj._id})
                    },500)
                });
            });
        }


})