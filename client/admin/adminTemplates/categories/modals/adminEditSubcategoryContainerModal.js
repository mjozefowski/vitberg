/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 26.08.16
 */

Template.adminEditSubcategoryContainerModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminEditSubcategoryContainerModal.onRendered(function () {

})

Template.adminEditSubcategoryContainerModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return SubCategoriesContainer.findOne(ti.data);
    },
    selector: function () {
        var ti = Template.instance();
        return {categoryId:ti.data}
    }

})

Template.adminEditSubcategoryContainerModal.events({

    'click #addNewSubCategoryNew': function (e,t) {
        Session.set('adminSelectedSubCategory', SubCategories.insert({categoryId:t.data,visible:false, name:"Nowa podkategoria"}));
        Modal.show('adminEditSubCategoryModal', function () {
            return Session.get('adminSelectedSubCategory')
        })
    },
    'click .table-edit-button-sub': function (e,t) {
        Session.set('adminEditSubcategoryrModal', $(e.target).attr('id'));
        Modal.show('adminEditSubCategoryModal', function () {
            return Session.get('adminEditSubcategoryrModal')
        })
    },
    'click .table-delete-button-sub': function (e,t) {

        SubCategories.remove($(e.target).attr('id'));

    }

})