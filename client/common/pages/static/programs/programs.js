/**
 * Created by Karol Liszka, 19.06.16
 */


Template.Programs.onCreated(function () {

})

Template.Programs.onRendered(function () {

})

Template.Programs.helpers({

})

Template.Programs.events({

    'click .single-block':function (e) {
        $('.single-block').removeClass('active-element-program');
        $(e.target).addClass('active-element-program');
    }

})