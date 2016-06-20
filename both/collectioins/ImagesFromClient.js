/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */

ImagesFromClient = new FS.Collection("imagesFromClient", {
    stores: [new FS.Store.GridFS("imagesFromClient", {
        path: "~/uploads",
        maxTries: 1,
        chunkSize: 640*640

    })]
});

ImagesFromClient.allow({
    insert: function () { return true; },
    update: function () {

    },
    remove: function () {

    },
    download: function(){ return true; }
});