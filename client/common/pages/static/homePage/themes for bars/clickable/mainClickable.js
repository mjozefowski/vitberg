/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.mainClickable.onCreated(function () {
    this.selectedItem = new ReactiveVar("")
})

Template.mainClickable.onRendered(function () {

})

Template.mainClickable.helpers({
    myTemplate: function () {
        return "subClickable"
    },
    templateData: function () {
        var ti = Template.instance();
        return ti.selectedItem.get();
    }


})

Template.mainClickable.events({
    
    "click .iconClickable": function (e,t) {
        var id = $(e.target).attr('id')
        t.selectedItem.set(id)
    }
    
})