/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.08.16
 */

Modal.allowMultiple = true

Template.adminDeleteModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminDeleteModal.onRendered(function () {

})

Template.adminDeleteModal.helpers({})

Template.adminDeleteModal.events({

    'click #remove': function (e,t) {

        var id = t.data.id;
        var method = t.data.method;

        Meteor.call(method,id);

    },
    'click #cancel': function () {
        Modal.hide();
    }

})