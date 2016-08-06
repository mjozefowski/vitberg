/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

Meteor.methods({

    registerUser: function (userObject) {
        Roles.addUsersToRoles(Accounts.createUser({
            email : userObject.email,
            password : userObject.password,
        }),[userObject.role]);
    }

})