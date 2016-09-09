/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.09.16
 */

ImagesOnSite = new FS.Collection("imagesOnSite", {
    stores: [
        new FS.Store.GridFS("imagesOnSite", {
            path: "~/uploads",
            maxTries: 5,
            chunkSize: 640*640

        })]
});

ImagesOnSite.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
    download: function(){ return true; }
});
