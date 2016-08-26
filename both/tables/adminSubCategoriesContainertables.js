/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 26.08.16
 */

TabularTables.AdminSubCategoriesContainer = new Tabular.Table({
    name: "AdminSubCategoriesContainer",
    collection: SubCategoriesContainer,

    columns: [
        {data: "name", title: "nazwa"},
        {data: "_id", title: "URL",
        render: function (id) {
            return "/"+id
        }},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button-subCont\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button-subCont\">usuń</button>"
            }
        }

    ]
});