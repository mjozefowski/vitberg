/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminEditSubCategoryModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminEditSubCategoryModal.onRendered(function () {

})

Template.adminEditSubCategoryModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();

        return SubCategories.findOne({_id:ti.data});
    }

})

Template.adminEditSubCategoryModal.events({})