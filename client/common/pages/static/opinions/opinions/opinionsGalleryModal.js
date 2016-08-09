/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 04.08.16
 */

Template.opinionsGalleryModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.opinionsGalleryModal.onRendered(function () {

    setTimeout(function(){
        $('.opinion-carousel-item').first().addClass('active')
    }, 500);



})

Template.opinionsGalleryModal.helpers({

    imagesForSlider: function () {
        var ti = Template.instance();
console.log(ti.data);
        return ti.data.images

    },
    singleImage: function (sliderObject) {
        return "<img src=\""+sliderObject+"\" class=\"image-bnr\" width=\"100%\">"
    }

})

Template.opinionsGalleryModal.events({})