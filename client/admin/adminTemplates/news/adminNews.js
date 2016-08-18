/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Template.adminNews.onCreated(function () {

})

Template.adminNews.onRendered(function () {

})

Template.adminNews.helpers({

})

Template.adminNews.events({


    'click #addNewNews': function (e, t) {
        Modal.show('adminNewsAddModal')
    },
    'click .table-edit-button': function (e,t) {
        var id = $(e.target).attr('id');
        Session.set('adminNewsEdit',id);
        Modal.show('adminNewsEditModal', function () {
            return Session.get('adminNewsEdit')
        })
    }


})

