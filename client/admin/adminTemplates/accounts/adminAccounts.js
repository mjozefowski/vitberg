/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 04.08.16
 */

Template.adminAccounts.onCreated(function () {

})

Template.adminAccounts.onRendered(function () {

})

Template.adminAccounts.helpers({})

Template.adminAccounts.events({

    'click #addNewUser': function () {
        Modal.show('adminAccountsModal', function () {

        });
    },

    'click .table-edit-button': function (e,t) {
        Modal.show('adminAccountsEditModal', function () {
            return $(e.target).attr('id')
        })
    }

})