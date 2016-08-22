/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

TabularTables.AdminSubCategories = new Tabular.Table({
    name: "AdminSubCategories",
    collection: SubCategories,

    columns: [
        {data: "name", title: "nazwa"},
        {data: "selectedTemplate", title: "szablon"},
        {data: "_id", title: "URL",
        render: function (id) {
            return "/"+id
        }},
        {data: "visible", title: "widoczny",
        render: function (visible) {
            if(visible)
                return "tak"
            else
                return "nie"
        }},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button-sub\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button-sub\">usuń</button>"
            }
        }

    ]
});