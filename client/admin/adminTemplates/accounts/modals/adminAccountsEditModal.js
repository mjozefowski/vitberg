/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

Template.adminAccountsEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminAccountsEditModal.onRendered(function () {

})

Template.adminAccountsEditModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return Meteor.users.findOne(ti.data)
    }

})

Template.adminAccountsEditModal.events({})