/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

TabularTables.AdminNews = new Tabular.Table({
    name: "AdminNews",
    collection: News,
    columns: [

        {data: "date", title: "data"},
        {data: "title", title: "tytuł"},
        {data: "isImportant", title: "wyrózniony",
            render: function (isImportant) {
                if(isImportant){
                    return "tak"
                }else{
                    return "nie"
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
