/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.09.16
 */

TabularTables.ImagesOnSiteContainerTable = new Tabular.Table({
    name: "ImagesOnSiteContainerTable",
    collection: ImagesOnSiteContainer,
    columns: [
        {data:"image",title:"Obraz",render: function (image) {
            return "<img src=\""+image+"\" style=\"max-height:300\">"
        }},
        {data:"image",title:"Ścieżka"},
        {   data: "_id",
            title: "akcje",
            render: function (id) {
                return "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }
    ]
});