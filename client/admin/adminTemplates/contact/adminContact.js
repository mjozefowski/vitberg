/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminContact.onCreated(function () {

})

Template.adminContact.onRendered(function () {

})

Template.adminContact.helpers({})

Template.adminContact.events({

    'click #addNewContact': function (e, t) {
        Session.set('selectedContact',Contact.insert({}));
        Modal.show('adminContactEditModal', function () {
            return Session.get('selectedContact')
        })
    },
    'click .table-edit-button': function (e, t) {
        Session.set('selectedContact',$(e.target).attr('id'));
        Modal.show('adminContactEditModal', function () {
            return Session.get('selectedContact')
        })
    },
    'click .table-delete-button': function (e, t) {
        var id = $(e.target).attr('id');
        Contact.remove(id)
    }

})