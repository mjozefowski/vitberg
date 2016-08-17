/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

Template.adminFooterEditModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminFooterEditModal.onRendered(function () {

})

Template.adminFooterEditModal.helpers({

    title: function () {
        var ti = Template.instance();

        switch(ti.data.collection){
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
            case "MenuLastColumn":
                return "Menu ostatnia kolumna";
                break;
        }

    },

    selectedDoc: function () {
        var ti = Template.instance();

        switch(ti.data.collection){
            case "MenuBottom":
                return MenuBottom.findOne(ti.data.id);
                break;
            case "MenuContact":
                return MenuContact.findOne(ti.data.id);
                break;
            case "MenuProducts":
                return MenuProducts.findOne(ti.data.id);
                break;
            case "MenuResearch":
                return MenuResearch.findOne(ti.data.id);
                break;
            case "MenuLastColumn":
                return MenuLastColumn.findOne(ti.data.id);
                break;
        }
    },

    selectedCollection: function () {
        var ti = Template.instance();
        return ti.data.collection;
    }


})

Template.adminFooterEditModal.events({})