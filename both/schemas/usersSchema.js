/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Schemas.UserProfile = new SimpleSchema({
    avatar:{
        type: String,
        optional:true
    },
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    gender: {
        type: String,
        optional: true,
        autoform: {
            type: "select-radio",
            options: function () {
                return [{
                    label: "Male",
                    value: "Male"
                }, {
                    label: "Female",
                    value: "Female"
                }, {
                    label: "Other",
                    value: "Other"
                }];
            }
        }

    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    about: {
        type: String,
        optional: true
    }

});

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this Schemas as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this Schemas as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    // Make sure this services field is in your Schemas if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        optional:true,
        autoform: {
            type: "select-multiple",
            options: function () {
                return [{
                    label: "Administrator",
                    value: "admin"
                }, {
                    label: "Redaktor",
                    value: "editor"
                },{
                    label: "Kontrahent",
                    value: "contractor"
                }, {
                    label: "Użytkownik",
                    value: "user"
                }];
            }
        }
    },

});

Meteor.users.attachSchema(Schemas.User);

Meteor.users.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});

