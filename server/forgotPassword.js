/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Meteor.startup(function() {
    Accounts.urls.resetPassword = function(token) {
        return Meteor.absoluteUrl('static/reset-password/' + token);
    };
    Accounts.emailTemplates.siteName = "Vitberg";
    Accounts.emailTemplates.resetPassword.subject = function (user) {
        return "Ustalanie nowego hasła";
    };

    Accounts.emailTemplates.resetPassword.text = function (user, url) {
        var signature = "Administracja Vitberg";

        return "Drogi użytkowniku,\n\n" +
            "Aby przejść do procesu zmiany hasła kliknij w poniższy link:\n" +
            url + "\n\n" +
            "Z wyrazami szacunku,\n" +
            signature;
    };

});