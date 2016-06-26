/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Template.login.onCreated(function () {
    this.fail = new ReactiveVar(false);
})

Template.login.onRendered(function () {

})

Template.login.helpers({
    'isLoginFailed': function () {

        var ti = Template.instance();

        return ti.fail.get();
    }
});

Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var email = event.target.loginEmail.value;
        var pass = event.target.loginPassword.value;
        Meteor.loginWithPassword(email, pass, function (err) {
            if(err){
                template.fail.set(true);
            }else {
                template.fail.set(false);
                Router.go('/')
            }
        });
    },
    //'click #facebook-login': function(event) {
    //    Meteor.loginWithFacebook({}, function(err,r){
    //        if (err) {
    //            throw new Meteor.Error("Facebook login failed");
    //        }else{
    //            $('#close').click();
    //            Meteor.call('facebookAccountCreate', function (e) {
    //            });
    //        }
    //    });
    //
    //},


});