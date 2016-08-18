/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

Template.adminPrograms.onCreated(function () {

})

Template.adminPrograms.onRendered(function () {

})

Template.adminPrograms.helpers({})

Template.adminPrograms.events({
    'click .table-edit-button-sub': function (e, t) {
        var id = $(e.target).attr('id')
        Session.set('adminPrograms',id)
        Modal.show('adminProgramsEditModal', function () {
            return Session.get('adminPrograms')
        })
    },
    "click #addProgramItem": function (e,t) {
        var id = Programs.insert({name:"Nowy program"});

        Session.set('adminPrograms',id)
        Modal.show('adminProgramsEditModal', function () {
            return Session.get('adminPrograms')
        })
    }

})