/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.08.16
 */

TabularTables.AdminPrograms = new Tabular.Table({
    name: "AdminPrograms",
    collection: Programs,

    columns: [
        {data: "name", title: "nazwa"},
        {data: "selectedTemplate", title: "szablon"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button-sub\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button-sub\">usuń</button>"
            }
        }

    ]
});