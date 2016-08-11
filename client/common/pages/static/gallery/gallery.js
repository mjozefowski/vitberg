/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.gallery.onCreated(function () {

})

Template.gallery.onRendered(function () {


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

$( window ).resize(function() {

});