/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 10.07.16
 */

Template.editWhiteBox.onCreated(function () {
    this.data = Template.currentData();
    this.isImage = new ReactiveVar();
    this.imagesArray = new ReactiveArray();
})

Template.editWhiteBox.onRendered(function () {

})

Template.editWhiteBox.helpers({

    formData: function () {
        var ti = Template.instance();
        console.log(ti.data)
        console.log(TemplatesForMainClickable.findOne({_id:ti.data}))
        var asd = TemplatesForMainClickable.findOne({_id:ti.data});
        return asd
    },
    img: function (id) {
        var ti = Template.instance();
        if(Images.findOne(id)){
            ti.isImage.set(true)
        }
        return Images.findOne(id);
    },
    isImage: function () {
        var ti = Template.instance();
        return ti.isImage.get()
    }

})

Template.editWhiteBox.events({

    'dropped #dropzone': function(e,t) {

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile)
            ti.isFileNewElementLoaded.set(true)
        });
    },

    'click #save': function (e,t) {

        var array = t.imagesArray.get();
        if(array.length==1){
            array.forEach(function (e) {
                Images.insert(e, function (e, fileObj) {
                    if (e) {
                        console.log("Image insert failed")
                    } else {
                        var img = fileObj._id;

                        TemplatesForMainClickable.update(t.data,{$set:{image:img}},function(e){
                            if(!e){
                                t.imagesArray.set([]);
                            }else{
                                console.log("update TemplatesForMainClickable failed")
                            }
                        });
                    }
                });
            });
        }



        $('.updateBtn').click()
    }

})