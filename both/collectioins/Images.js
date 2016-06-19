/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */


Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {
        path: "~/uploads",
        maxTries: 1,
        chunkSize: 640*640

    })]
});

Images.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});