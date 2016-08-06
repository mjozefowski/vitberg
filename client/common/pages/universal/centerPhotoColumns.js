/**
 * Created by SkylinR on 03.08.2016.
 */

Template.centerPhotoColumns.onCreated(function () {

})

Template.centerPhotoColumns.onRendered(function () {

    calcHeight($('.image-div-center'));
    calcBiggestHeight($('.header-smaller'));

})

Template.centerPhotoColumns.helpers({

})

Template.centerPhotoColumns.events({

})

//Calc height in ratio 3:1
//IN JQUERY ELEMENT (examp $('.myClass')
function calcHeight(elem){
    var elemWidth = elem.width()/3
    elem.css('height', elemWidth);
}

//Calc the biggest height of header
//IN JQUERY ELEMENTS ARRAY (examp $('.myClass').toArray();
function calcBiggestHeight (elem) {

    var biggerHeight = 0;
    elem.each(function(){

        if($(this).height()>biggerHeight)
            biggerHeight=$(this).height();

    });

    elem.each(function(){

        $(this).css('height',biggerHeight);

    });
}

$( window ).resize(function() {
    calcHeight($('.image-div-center'));
    calcBiggestHeight($('.header-smaller'));
});

