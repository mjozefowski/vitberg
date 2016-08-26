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
        Session.set('adminSelectedSubCategoryContainer', SubCategoriesContainer.insert({categoryId:t.data,visible:false, name:"Nowy kontener"}));
        Modal.show('adminEditSubcategoryContainerModal', function () {
            return Session.get('adminSelectedSubCategoryContainer')
        })
    },

    'click .table-edit-button-subCont': function (e,t) {
        Session.set('adminEditSubcategoryContainerModal', $(e.target).attr('id'));
        Modal.show('adminEditSubcategoryContainerModal', function () {
            return Session.get('adminEditSubcategoryContainerModal')
        })
    },
    'click .table-delete-button-subCont': function (e,t) {

        SubCategoriesContainer.remove($(e.target).attr('id'));
        var ids = _.pluck(SubCategories.find({categoryId:id}).fetch,"_id")
        ids.forEach(function (id) {
            SubCategories.remove(id);
        })
    }

})