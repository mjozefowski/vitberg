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
        {data: "email", title: "email"},
        {data: "firstName", title: "imię"},
        {data: "lastName", title: "nazwisko"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }

    ]
});