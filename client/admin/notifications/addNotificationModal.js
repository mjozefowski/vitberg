/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 16.07.16
 */

Template.addNotificationModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.addNotificationModal.onRendered(function () {

})

Template.addNotificationModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return Notifications.findOne(ti.data);
    }

})

Template.addNotificationModal.events({

    'click #save': function () {
        Notifications.update(this.data,{visible:true})
    },


})
