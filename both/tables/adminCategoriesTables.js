/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.08.16
 */

TabularTables.AdminCategories = new Tabular.Table({
    name: "AdminCategories",
    collection: Categories,
    columns: [
        {data: "name", title: "nazwa"},
        {   data: "_id",
            title: "Podkategorie",
            render: function (id) {
                //var names = _.pluck(SubCategories.find({categoryId:id}).fetch(),'name')
                return _.pluck(SubCategories.find({categoryId:id}).fetch(),'name')
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