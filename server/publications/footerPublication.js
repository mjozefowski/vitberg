/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

Meteor.publish('footer', function () {
    return [
        MenuProducts.find(),
        MenuContact.find(),
        MenuBottom.find(),
        MenuResearch.find()
    ]
})