/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */

Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: '6Lez5h0TAAAAACl18OaZtuQKiZHbjYQjaAQ487C6'
    });
});