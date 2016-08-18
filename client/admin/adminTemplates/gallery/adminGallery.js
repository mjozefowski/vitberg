/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

Template.adminGallery.onCreated(function () {

})

Template.adminGallery.onRendered(function () {

})

Template.adminGallery.helpers({})

Template.adminGallery.events({

    'click #addNewGallery': function () {
        Modal.show('adminGalleryAddModal')
    },

    'click .table-edit-button': function (e,t) {
        var id = $(e.target).attr('id');
        Session.set('adminGalleryEdit',id);
        Modal.show('adminGalleryEditModal', function () {
            return Session.get('adminGalleryEdit')
        })
    }
})