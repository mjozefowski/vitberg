/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.Home.onCreated(function () {

})

Template.Home.onRendered(function () {

})

Template.Home.helpers({
    blocks: function () {
        return MainPage.find();
    },
    isParallax: function (type) {
        return type == "mainParallax"
    },
    isRedLeft: function (type) {
        return type == "mainRedLeft"
    },
    isRedRight: function (type) {
        return type == "mainRedRight"
    },
    isMainClickable: function (type) {
        return type == "mainClickable"
    },
    isMainOpinion: function (type) {
        return type == "mainOpinion"
    }
})

Template.Home.events({

})


