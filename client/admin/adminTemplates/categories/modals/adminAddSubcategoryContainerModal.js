/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 26.08.16
 */

Template.adminAddSubcategoryContainerModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminAddSubcategoryContainerModal.onRendered(function () {
    var ti = Template.instance();
    $('.categoryIdInput').val(ti.data)
})

Template.adminAddSubcategoryContainerModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return SubCategoriesContainer.findOne(ti.data);
    }

})

Template.adminAddSubcategoryContainerModal.events({})