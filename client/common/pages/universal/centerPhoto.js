/**
 * Created by SkylinR on 03.08.2016.
 */

Template.centerPhoto.onCreated(function () {

})

Template.centerPhoto.onRendered(function () {

    calcHeight($('.image-div-center'));

})

Template.centerPhoto.helpers({

})

Template.centerPhoto.events({

})

//Calc height in ratio 3:1
//IN JQUERY ELEMENT (examp $('.myClass')
function calcHeight(elem){
    var elemWidth = elem.width()/3
    elem.css('height', elemWidth);
}


$( window ).resize(function() {
    calcHeight($('.image-div-center'));
});

