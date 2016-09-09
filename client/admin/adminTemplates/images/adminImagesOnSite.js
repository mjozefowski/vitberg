/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.09.16
 */

Template.adminImagesOnSite.onCreated(function () {

})

Template.adminImagesOnSite.onRendered(function () {

})

Template.adminImagesOnSite.helpers({})

Template.adminImagesOnSite.events({

    'click #addNewImage': function (e,t) {
        Modal.show('adminImagesOnSiteAddModal')
    },


    'click .table-delete-button': function (e, t) {
        var id = $(e.target).attr('id');
        var obj = ImagesOnSiteContainer.findOne(id);
        var img = obj.image;
        ImagesOnSite.remove(img.replace('/cfs/files/imagesOnSite/',''));
        ImagesOnSiteContainer.remove(id);

    }

})