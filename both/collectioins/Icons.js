/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 06.07.16
 */
Icons = new FS.Collection("icons", {
    stores: [new FS.Store.GridFS("icons", {
        path: "~/uploads",
        maxTries: 5,
        chunkSize: 640*640

    })]
});

Icons.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
    download: function(){ return true; }
});