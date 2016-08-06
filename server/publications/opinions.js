/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */

Meteor.publishComposite('opinions', {

    find: function () {
        return Opinions.find({approved:true},{fields:{firstName:1,age:1,sex:1,opinionText:1,images:1,approved:1,city:1}});
    },
    children:[
        {
            find: function (id) {
                return ImagesFromClient.find({_id:id})
            },
            find: function (id) {
                return Thumbs.find({_id:id})
            }
        }
    ]
})

Meteor.publish('opinionsAdmin', function () {
    return Opinions.find()
})