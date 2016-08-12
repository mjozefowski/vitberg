/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.gallery.onCreated(function () {

})

Template.gallery.onRendered(function () {

    howManyPhotos($('.gallery-inner-container'), $('.main-single-gallery'), 43);

})

Template.gallery.helpers({

})

Template.gallery.events({



})

//Calc height in ratio 16:9
//IN JQUERY ELEMENT (examp $('.myClass')
function calcHeight(elem){
    var elemWidth = elem.width() * 9 / 16;
    elem.css('height', elemWidth);
}

function howManyPhotos(container, elem, margin){

    container.css('max-width','100%');
    var singlePhoto = elem.width()+margin;
    var count = parseInt(container.width()/singlePhoto);

    if(count>=1){
        container.css('max-width',count*singlePhoto);
    }
    else{
        container.css('max-width',singlePhoto);
    }


}

$( window ).resize(function() {

    howManyPhotos($('.gallery-inner-container'), $('.main-single-gallery'), 43);

});

