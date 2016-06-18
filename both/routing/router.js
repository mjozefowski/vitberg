/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Router.map(function () {


    this.route('/',{

        waitOn: function () {
            return [Meteor.subscribe("Categories")];
        },
        action: function () {
            if (this.ready()) {
                this.render('Home', {

                });
            }
        }
    });
    this.route('/:_id',{

        waitOn: function () {
            return [Meteor.subscribe("Categories")];
        },
        action: function () {
            if (this.ready()) {
                this.render('SubPage', {
                    data:this.params._id


                });
            }
        }
    });
    this.route('/static/news',{

        waitOn: function () {
            return [Meteor.subscribe("news")];
        },
        action: function () {
            if (this.ready()) {
                this.render('News', {

                });
            }
        }
    });

    //this.route('/diplomaInfo/:_id', {
    //    waitOn: function () {
    //        return Meteor.subscribe("diploma", this.params._id);
    //    },
    //    action: function () {
    //        if (this.ready()) {
    //            var item = Diploma.findOne({'_id':this.params._id});
    //            this.render('DiplomaInfo', {
    //                data: {
    //                    diploma:item
    //                }
    //            });
    //        }
    //    }
    //});

});



