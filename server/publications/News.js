/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Meteor.publishComposite('news', {
    find: function () {
        return News.find();
    },
    children:[
        {
            find: function (id) {
               return Meteor.users.findOne(id);
            }
        }
    ]

});

Meteor.publish('news2', function () {
    return News.find()
})
