/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */
Modal.allowMultiple = true


Template.adminCategoryEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminCategoryEditModal.onRendered(function () {

})

Template.adminCategoryEditModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return Categories.findOne(ti.data)
    },
    selector: function () {
        var ti = Template.instance();
        return {categoryId:ti.data}
    }

})

Template.adminCategoryEditModal.events({

    'click #addNewSubCategory': function (e,t) {
        Session.set('adminSelectedSubCategory', SubCategories.insert({categoryId:t.data,visible:false, name:"Nowa kategoria"}));
        Modal.show('adminEditSubCategoryModal', function () {
            return Session.get('adminSelectedSubCategory')
        })
    },

    'click .table-edit-button-sub': function (e,t) {
        Session.set('adminSelectedSubCategoryEdit', $(e.target).attr('id'));
        Modal.show('adminEditSubCategoryModal', function () {
            return Session.get('adminSelectedSubCategoryEdit')
        })
    }

})