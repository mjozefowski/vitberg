/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 07.08.16
 */

TabularTables.AdminCarousel = new Tabular.Table({
    name: "AdminCarousel",
    collection: Carousel,
    columns: [

        {   data: "image",
            title: "obraz",
            render: function (image) {
                return  "<img src=\"/cfs/files/images/"+image+"\" class=\"tabular-image\">";

            }
        },
        {   data: "image",
            title: "akcje",
            render: function (id) {
                return "<button id=\"" + id + "\"type=\"button\" class=\"btn btn-danger table-delete-button\">usuń</button>"
            }
        }

    ]
});