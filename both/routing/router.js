/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Router.map(function () {


    this.route('/',{

        waitOn: function () {
            return [Meteor.subscribe("Categories"), Meteor.subscribe("MainPage"), Meteor.subscribe("news")];
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
            return [Meteor.subscribe("news"),Meteor.subscribe('images')];
        },
        action: function () {
            if (this.ready()) {
                this.render('News', {

                });
            }
        }
    });


    this.route('/static/news/full/:_id', {
        waitOn:function(){
            return [Meteor.subscribe("news2")]
        },
        action:function(){
            if (this.ready()) {
                this.render('newsFull', {
                    data:this.params._id
                });
            }
        }
    });


    this.route('/static/map',{
        waitOn:function(){
            return Meteor.subscribe("markers")
        },
        action:function(){
            if(this.ready()){
                this.render('map')
            }
        }
    })


    this.route('/static/admin',{
        waitOn:function(){
            return Meteor.subscribe("adminPublication")
        },
        action:function(){
            if(this.ready()){
                this.render('adminPanel')
            }
        }
    }),

        this.route('/static/login',{

        action:function(){
            if(this.ready()){
                this.render('login')
            }
        }
    })
        this.route('/static/addOpinion',{
            waitOn:function(){
                return [Meteor.subscribe("opinions"),Meteor.subscribe('images')]
            },


        action:function(){
            if(this.ready()){
                this.render('dropzone')
            }
        }
    });
    this.route('/static/forgot-password', {
        name: 'forgotpassword',
        template: 'ForgotPassword'
    });

    this.route('/static/reset-password/:token', {
        name: 'ResetPassword',
        template: 'ResetPassword',
        onBeforeAction: function() {
            Accounts._resetPasswordToken = this.params.token;
            this.next();
        },
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

    this.route('/static/programs', {
        name: 'Programs',
        template: 'Programs'
    });

    this.route('/universal/rightPhotos', {
        name: 'rightPhotos',
        template: 'rightPhotos'
    });

    this.route('/universal/centerPhoto', {
        name: 'centerPhoto',
        template: 'centerPhoto'
    });

});



