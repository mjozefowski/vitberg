/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

TabularTables.AdminContacts = new Tabular.Table({
    name: "AdminContacts",
    collection: Contact,
    columns: [
        {   data: "image",
            title: "obraz",
            render: function (img) {
                if(img)
                return "<img src=\""+ img +"\" class=\"tabular-image\">"
            }
        },
        {data: "position", title: "stanowisko"},
        {data: "firstName", title: "imię"},
        {data: "lastName", title: "nazwisko"},
        {data: "phone", title: "tel."},
        {data: "cellPhone", title: "kom."},
        {data: "email", title: "email"},
        {data: "skype", title: "skype"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }

    ]
});