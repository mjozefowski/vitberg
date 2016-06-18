/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Meteor.publishComposite('Categories', {
    find: function () {
        return Categories.find();
    },
    children:[
        {
            find: function (id) {
                SubCategories.find({'_categoryId':id})

            }
        }
    ]

});
