/**
 * Created by Karol Liszka, 19.06.16
 */


Template.Programs.onCreated(function () {



})

Template.Programs.onRendered(function () {

    $('.single-block-scroll').first().addClass('active-element-program');

    var heightPhotoBlock = $('.photo-block').width();
    $('.photo-block').css('height',heightPhotoBlock);

})

Template.Programs.helpers({

    programs: function () {

        return Programs.find({},{sort:{order:1}});
    }

})

Template.Programs.events({

    'click .single-block-scroll':function (e) {

        $('.single-block-scroll').removeClass('active-element-program');
        $(e.target).addClass('active-element-program');
        $('html, body').animate({
            scrollTop: $("#programs-main-container").offset().top
        }, 1000);

    },

    'click img':function(e){
        var photo =$(e.target).attr('src');

        $('.zoomed-container').children('img').attr('src',photo);
        $('.zoomed-container').addClass('zoomed');
    },

    'click .zoomed':function(e){
        $('.zoomed').removeClass('zoomed');
    },

})


$( window ).resize(function() {

    var heightPhotoBlock = $('.photo-block').width();
    $('.photo-block').css('height',heightPhotoBlock);

});
