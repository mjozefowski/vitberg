/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Template.Home.onCreated(function () {

})

Template.Home.onRendered(function () {
    $('.collapsible').collapsible();
    $('.slider').slider({
        full_width: true,
        indicators: false,
        height: 600,
        transition: 300
    });
    $('.materialboxed').materialbox();

    $('.parallax').parallax();

    window.sr = ScrollReveal();
    sr.reveal('#first-image-o-firmie',
        {viewOffset:{top:250}, origin:'right',duration:1000, distance:'100px'}
    );
    sr.reveal('#third-first-photo',
        {viewOffset:{top:200}, origin:'left',duration:1000, distance:'100px'}
    );
    sr.reveal('#third-second-photo',
        {viewOffset:{top:200}, origin:'left',duration:1000, distance:'100px', delay:100}
    );
    sr.reveal('#third-third-photo',
        {viewOffset:{top:200}, origin:'left',duration:1000, distance:'100px', delay:200}
    );

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


