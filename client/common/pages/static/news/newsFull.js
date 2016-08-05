/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
Template.newsFull.onCreated(function () {
    this.data = Template.currentData()
})

Template.newsFull.onRendered(function () {

    calcHeight($('.single-media-container'));
    calcHeight($('.media-newsFull'));
    setTimeout(function() { calcHeight($('.single-media-container')); }, 100);

})

Template.newsFull.helpers({
    newsDoc: function () {
        var ti = Template.instance();
        console.log("data");
        console.log(ti.data);

        return News.findOne({_id:ti.data})
    }
})

Template.newsFull.events({

    'click img':function(e){
        var photo =$(e.target).attr('src');

        $('.zoomed-container').children('img').attr('src',photo);
        $('.zoomed-container').addClass('zoomed');
    },

    'click .zoomed':function(e){
        $('.zoomed').removeClass('zoomed');
    },

})

//Calc height in ratio 16:9
//IN JQUERY ELEMENT (examp $('.myClass')
function calcHeight(elem){
    var elemWidth = elem.width() * 9 / 16;
    elem.css('height', elemWidth);
}

$( window ).resize(function() {
    calcHeight($('.single-media-container'));
    calcHeight($('.media-newsFull'));
});