/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

TabularTables.UsersAdmin = new Tabular.Table({
    name: "UsersAdmin",
    collection: Meteor.users,
    columns: [
        {data: "emails[0].address", title: "email"},
        {data: "profile.firstName", title: "imię"},
        {data: "profile.lastName", title: "nazwisko"},
        {   data: "roles[0]",
            title: "rola",
            render: function (role) {
                switch(role){
                    case 'admin':
                        return "Administrator";
                        break;
                    case 'contractor':
                        return "Kontrahent";
                        break;
                    case 'editor':
                        return "Edytor";
                        break;
                }
            }
        },
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }

    ]
});