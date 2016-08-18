/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

Template.gallerySliderGeneralModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.gallerySliderGeneralModal.onRendered(function () {
    setTimeout(function(){
        $('.opinion-carousel-item').first().addClass('active')
    }, 500);
})

Template.gallerySliderGeneralModal.helpers({imagesForSlider: function () {
    var ti = Template.instance();
    console.log(ti.data);
    return ti.data.images

},
    singleImage: function (sliderObject) {
        return "<img src=\""+sliderObject+"\" class=\"image-bnr\">"
    }

})

Template.gallerySliderGeneralModal.events({
    'click .ico-close-modal-opinions':function(){

        Modal.hide();

    },
})