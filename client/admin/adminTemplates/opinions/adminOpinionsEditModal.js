/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

Template.adminOpinionsEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminOpinionsEditModal.onRendered(function () {

})

Template.adminOpinionsEditModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();

        return Opinions.findOne(ti.data)
    },
    images: function (obj) {

        var imageTable = [];
        var tmp = obj.images;
        tmp.forEach(function (e) {
            imageTable.push(e.img)
        })

        return imageTable;

    }

})

Template.adminOpinionsEditModal.events({

    'click .remove-image': function (e,t) {
        var imgId = $(e.target).attr('id');

        Meteor.call('deleteOpinionImage', t.data,imgId, function (e, r) {
            if(!e)
            console.log('ok');
            else
            console.log('error')
        })
    }

})