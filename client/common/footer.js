/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Karol Liszka, 06.07.16
 */
 
Template.footer.onCreated(function () {

})

Template.footer.onRendered(function () {


})

Template.footer.helpers({
    menuProducts: function () {
        return MenuProducts.find({},{sort:{order:1}})
    },
    menuResearch: function () {
        return MenuResearch.find({},{sort:{order:1}})
    },
    menuContact: function () {
        return MenuContact.find({},{sort:{order:1}})
    },
    menuBottom: function () {
        return MenuBottom.find({},{sort:{order:1}})
    }
})

Template.footer.events({

})
