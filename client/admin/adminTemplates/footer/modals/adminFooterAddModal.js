/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

Template.adminFooterAddModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminFooterAddModal.onRendered(function () {

})

Template.adminFooterAddModal.helpers({

    title: function () {
      var ti = Template.instance();

        switch(ti.data){
            case "MenuBottom":
                return "Menu dolne";
                break;
            case "MenuContact":
                return "Menu kontakt";
                break;
            case "MenuProducts":
                return "Menu produkty";
                break;
            case "MenuResearch":
                return "Menu badania";
                break;
        }

    },

    selectedCollection: function () {
        var ti = Template.instance();
        return ti.data;
    }

})

Template.adminFooterAddModal.events({})