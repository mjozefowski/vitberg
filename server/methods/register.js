/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

Meteor.methods({

    registerUser: function (userObject) {
        var id = Accounts.createUser({
            email : userObject.email,
            password : userObject.password,
        });

        Meteor.users.update(id,{$set:{profile:userObject.profile}});

        Roles.addUsersToRoles(id,[userObject.role]);
    }

})