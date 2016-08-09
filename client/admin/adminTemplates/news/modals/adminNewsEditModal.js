/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminNewsEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminNewsEditModal.onRendered(function () {

})

Template.adminNewsEditModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return Newsletter.findOne(ti.data)
    }

})

Template.adminNewsEditModal.events({})