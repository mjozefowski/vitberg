/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

TabularTables.AdminNewsletter = new Tabular.Table({
    name: "AdminNewsletter",
    collection: Newsletter,
    columns: [

        {data: "email", title: "email"},

        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }

    ]
});