/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

Modal.allowMultiple = true

Template.adminCategories.onCreated(function () {
    this.data= Template.currentData()
})

Template.adminCategories.onRendered(function () {

})

Template.adminCategories.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }
})

Template.adminCategories.events({
    'click .table-edit-button': function (e, t) {
        console.log($(e.target).attr('id'))
        Session.set('adminSelectedCategory', $(e.target).attr('id'));
        Modal.show('adminCategoryEditModal', function () {
            return Session.get('adminSelectedCategory')
        })
    },
    'click #addNewCategory': function (e, t) {
        Modal.show('adminAddCategoryModal')
    }
})