/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Router.map(function () {


    this.route('/',{
        loadingTemplate: 'loading',
        waitOn: function () {
            return [Meteor.subscribe("Categories"), Meteor.subscribe("MainPage"), Meteor.subscribe("news"),Meteor.subscribe("carousel")];
        },
        action: function () {
            if (this.ready()) {
                this.render('Home', {

                });
            }
        }
    });
    this.route('/:_id',{
        loadingTemplate: 'loading',
        waitOn: function () {
            return [Meteor.subscribe("Categories"),Meteor.subscribe("SubCategories"),Meteor.subscribe("carousel")];
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
        loadingTemplate: 'loading',
        waitOn: function () {
            return [Meteor.subscribe("news2"),Meteor.subscribe('images'),Meteor.subscribe("carousel")];
        },
        action: function () {
            if (this.ready()) {
                this.render('News', {

                });
            }
        }
    });


    this.route('/static/news/full/:_id', {
        loadingTemplate: 'loading',
        waitOn:function(){
            return [Meteor.subscribe("news2"),Meteor.subscribe("carousel")]
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
        loadingTemplate: 'loading',
        waitOn:function(){
            return [Meteor.subscribe("markers"),Meteor.subscribe("carousel")]
        },
        action:function(){
            if(this.ready()){
                this.render('map')
            }
        }
    })


    this.route('/static/admin',{
        loadingTemplate: 'loading',
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
            loadingTemplate: 'loading',
        action:function(){
            if(this.ready()){
                this.render('login')
            }
        }
    })
        this.route('/static/addOpinion',{
            loadingTemplate: 'loading',
            waitOn:function(){
                return [Meteor.subscribe("opinions"),Meteor.subscribe('images'),Meteor.subscribe("carousel")]
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
        loadingTemplate: 'loading',
        onBeforeAction: function() {
            Accounts._resetPasswordToken = this.params.token;
            this.next();
        },
    });

    this.route('/static/contact', {
        name: 'contact',
        template: 'contact',
        loadingTemplate: 'loading',
        waitOn:function(){
            return [Meteor.subscribe("contacts"),Meteor.subscribe("carousel")]
        },

        action:function(){
            if(this.ready()){
                this.render('contact')
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

    this.route('/static/programs', {
        name: 'Programs',
        template: 'Programs'
    });

    this.route('/universal/rightPhoto', {
        name: 'rightPhoto',
        template: 'rightPhoto'
    });

    this.route('/universal/leftPhoto', {
        name: 'leftPhoto',
        template: 'leftPhoto'
    });

    this.route('/universal/centerPhoto', {
        name: 'centerPhoto',
        template: 'centerPhoto'
    });

    this.route('/universal/centerPhotoColumns', {
        name: 'centerPhotoColumns',
        template: 'centerPhotoColumns'
    });

    this.route('/universal/universalProgram', {
        name: 'universalProgram',
        template: 'universalProgram'
    });

});



