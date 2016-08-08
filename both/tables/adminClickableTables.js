/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 08.08.16
 */

TabularTables.AdminClickableTables = new Tabular.Table({
    name: "AdminClickableTables",
    collection: TemplatesForMainClickable,
    columns: [
        {   data: "image",
            title: "obraz",
            render: function (img) {
                if(img)
                    return "<img src=\""+ img +"\" class=\"tabular-image\">"
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