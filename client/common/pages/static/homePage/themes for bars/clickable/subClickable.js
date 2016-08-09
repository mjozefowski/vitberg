/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.subClickable.onCreated(function () {
    this.data = Template.currentData();
})

Template.subClickable.onRendered(function () {
})

Template.subClickable.helpers({

    data: function () {
        var ti = Template.instance();
        var id = ti.data;
        return TemplatesForMainClickable.findOne(id);
    },
    useCase: function () {
        var ti = Template.instance();
        var id = ti.data;
        var obj = TemplatesForMainClickable.findOne(id);
        var usecase = obj.useCase;
        return usecase
    }

})

Template.subClickable.events({

    'click .read-more-btn': function (e, t) {
        var id = $(e.target).attr('id')
        Router.go(id)
    }

})