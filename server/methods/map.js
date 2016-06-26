/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 26.06.16
 */

Meteor.methods({

    'addPointToMap': function (point) {
        if(this.userId){
            var usr = Meteor.users.findOne(this.userId)
            if(usr.roles[0]=="admin"){
                Markers.insert({lat:point.latit, lng:point.long, header:point.header, main:point.main})
            }
        }
    },

    'removePointFromMap': function (id) {
        if(this.userId){
            var usr = Meteor.users.findOne(this.userId)
            if(usr.roles[0]=="admin"){
                Markers.remove(id);
            }
        }
    }

})