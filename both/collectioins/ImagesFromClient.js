/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */


var createThumb = function(fileObj, readStream, writeStream) {
    // Transform the image into a 10x10px thumbnail
    console.log("resizing image")
    gm(readStream, fileObj.name()).resize('200 ', '200').stream().pipe(writeStream);
};


ImagesFromClient = new FS.Collection("imagesFromClient", {
    stores: [
        new FS.Store.GridFS("imagesFromClient", {
        path: "~/uploads",
        maxTries: 1,
        chunkSize: 640*640

    })]
});

ImagesFromClient.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
    download: function(){ return true; }
});

Thumbs = new FS.Collection("thumbs", {
    stores: [
        new FS.Store.GridFS("thumbs", {
            // transformWrite: createThumb,
            path: "~/uploads"
        })
       ]
});

Thumbs.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; },
    download: function(){ return true; }
});