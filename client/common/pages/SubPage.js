/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.SubPage.onCreated(function () {
    this.data = Template.instance();
})

Template.SubPage.onRendered(function () {

})

Template.SubPage.helpers({

    id: function () {
        var ti = Template.instance();
        return ti.data;
    },
    selectedDoc: function () {
        var ti = Template.instance();
        return SubCategoriesContainer.findOne(ti.data)
    },
    subcategories: function (id) {
        var ti = Template.instance()
        return SubCategories.find({categoryId:id},{sort:{order:1}})
    },
    selectedTemplate: function (id) {
        var ti = Template.instance();
        return SubCategories.findOne(id)
    },
    selectedTemplateData: function (id) {
        var ti = Template.instance();
        return SubCategories.findOne(id)
    }

})

Template.SubPage.events({})