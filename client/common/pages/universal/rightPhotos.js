/**
 * Created by SkylinR on 03.08.2016.
 */

Template.rightPhotos.onCreated(function () {

})

Template.rightPhotos.onRendered(function () {

    calcHeight($('.image-div-right'));

})

Template.rightPhotos.helpers({

})

Template.rightPhotos.events({

})

//Calc height in ratio 16:9
//IN JQUERY ELEMENT (examp $('.myClass')
function calcHeight(elem){
    var elemWidth = elem.width() * 9 / 16;
    elem.css('min-height', elemWidth);
}

$( window ).resize(function() {
    calcHeight($('.image-div-right'));
});