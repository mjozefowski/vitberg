/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 17.08.16
 */

TabularTables.MenuBottom = new Tabular.Table({
    name: "MenuBottom",
    collection: MenuBottom,
    responsive: true,
    autoWidth: false,
    columns: [

        {data: "order", title: "kolejność"},
        {data: "name", title: "tytuł"},
        {data: "url", title: "URL"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\" collection-name=\"MenuBottom\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\" collection-name=\"MenuBottom\">usuń</button>"
            }
        }

    ]
});

TabularTables.MenuContact = new Tabular.Table({
    name: "MenuContact",
    collection: MenuContact,
    responsive: true,
    autoWidth: false,
    columns: [

        {data: "order", title: "kolejność"},
        {data: "name", title: "tytuł"},
        {data: "url", title: "URL"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\" collection-name=\"MenuContact\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\" collection-name=\"MenuContact\">usuń</button>"
            }
        }

    ]
});

TabularTables.MenuProducts = new Tabular.Table({
    name: "MenuProducts",
    collection: MenuProducts,
    responsive: true,
    autoWidth: false,
    columns: [

        {data: "order", title: "kolejność"},
        {data: "name", title: "tytuł"},
        {data: "url", title: "URL"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\" collection-name=\"MenuProducts\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\" collection-name=\"MenuProducts\">usuń</button>"
            }
        }

    ]
});

TabularTables.MenuResearch = new Tabular.Table({
    name: "MenuResearch",
    collection: MenuResearch,
    responsive: true,
    autoWidth: false,
    columns: [

        {data: "order", title: "kolejność"},
        {data: "name", title: "tytuł"},
        {data: "url", title: "URL"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\" collection-name=\"MenuResearch\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\" collection-name=\"MenuResearch\">usuń</button>"
            }
        }

    ]
});

TabularTables.MenuLastColumn= new Tabular.Table({
    name: "MenuLastColumn",
    collection: MenuLastColumn,
    responsive: true,
    autoWidth: false,
    columns: [

        {data: "order", title: "kolejność"},
        {data: "name", title: "tytuł"},
        {data: "url", title: "URL"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return  "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-warning table-edit-button\" collection-name=\"MenuLastColumn\">edytuj</button>" +
                    "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\" collection-name=\"MenuLastColumn\">usuń</button>"
            }
        }

    ]
});