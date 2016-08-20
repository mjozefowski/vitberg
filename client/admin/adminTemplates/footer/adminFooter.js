/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

Template.adminFooter.onCreated(function () {

})

Template.adminFooter.onRendered(function () {

})

Template.adminFooter.helpers({})

Template.adminFooter.events({

    'click .bottomMenu-add': function (e, t) {
        var id = $(e.target).attr('id')
        Session.set('adminFooterAddModal',id)
        Modal.show('adminFooterAddModal', function () {
            return Session.get('adminFooterAddModal')
        })

    },

    'click .table-edit-button': function (e, t) {
        var editObj = {
            id: $(e.target).attr('id'),
            collection: $(e.target).attr('collection-name')
        }
        Session.set('adminFooterEditModalData', editObj);
        Modal.show('adminFooterEditModal', function () {
            return Session.get('adminFooterEditModalData')
        })
    },
    'click .table-delete-button': function (e, t) {
        var editObj = {
            id: $(e.target).attr('id'),
            collection: $(e.target).attr('collection-name')
        }
        Meteor.call('deleteFooterItem',editObj)
    }

})