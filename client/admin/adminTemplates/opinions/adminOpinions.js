/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

Template.adminOpinions.onCreated(function () {

})

Template.adminOpinions.onRendered(function () {

})

Template.adminOpinions.helpers({

    waitingCounter:function(){
        return Opinions.find({approved:false}).count();
    }

})

Template.adminOpinions.events({

    'click .table-edit-button': function (e) {
        Session.set('adminOpinionsPick',$(e.target).attr('id'))
        Modal.show('adminOpinionsEditModal', function () {
            return Session.get('adminOpinionsPick')
        })
    }

})