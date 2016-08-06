/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

Template.adminAddSubCategory.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminAddSubCategory.onRendered(function () {
    var ti = Template.instance()
    $('.categoryIdInput').val(ti.data)
})

Template.adminAddSubCategory.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }

})

Template.adminAddSubCategory.events({})