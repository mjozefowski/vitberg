/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 04.08.16
 */

Template.adminAccountsModal.onCreated(function () {

})

Template.adminAccountsModal.onRendered(function () {

})

Template.adminAccountsModal.helpers({})

Template.adminAccountsModal.events({

    'submit #registerUser': function (e, t) {
        e.preventDefault();


        if($('#email').val().length>0
            && $('#password').val().length>0
            && $('#passwordConfirmation').val() == $('#password').val()
            && $('#passwordConfirmation').val().length>0 == $('#password').val().length>0
            && $('#role').val().length>0
            && $('#firstName').val().length>0
            && $('#lastName').val().length>0
        ){
            var userObject = {
                email:$('#email').val(),
                password:$('#password').val(),
                role:$('#role').val(),
                profile:{
                    firstName:$('#firstName').val(),
                    lastName:$('#lastName').val()
                }
            }

            Meteor.call('registerUser', userObject, function (e, r) {
                if(!e){
                    console.log('register ok')
                    Modal.hide()
                }else{
                    console.log('register fail')
                }
            })

        }else{
            console.log("data incomplete");
        }







    }

})