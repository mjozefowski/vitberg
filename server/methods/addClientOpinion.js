/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 20.06.16
 */

Meteor.methods({
    /*
     * @params:
     * formData = {message,image}
     * image = [image-fileObject]
     *
     */
    'addClientOpinion': function (formData) {

        var ids = [];
        var array = []
        array = formData.image;
        var text = formData.message;
        console.log(formData)
        console.log(text)
        console.log(array)
        var opinion = Opinions.insert({"opinionText":text,"approved":false});

        array.forEach(function (e) {
        var newFile = e //new FS.File(e);
            ImagesFromClient.insert(newFile, function (error, fileObj) {
                if (error) {
                    console.log("addClientOpinion ImagesFromClient.insert failed")
                } else {
                    console.log("addClientOpinion ImagesFromClient.insert passed: ")
                    console.log(fileObj)
                    ids.push(fileObj.path)
                }
            });
        })
        Opinions.update(opinion,{$set:{images:ids}},{validate:false})

        
    }
    
})