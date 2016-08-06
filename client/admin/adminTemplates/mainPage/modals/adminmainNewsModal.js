/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Template.adminmainNewsModal.onCreated(function () {
    this.data = Template.currentData();
    this.imagesArray = new ReactiveArray();

})

Template.adminmainNewsModal.onRendered(function () {

})

Template.adminmainNewsModal.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }
})

Template.adminmainNewsModal.events({
    'click #save': function (e,t) {
        $('.saveButton').click();
        var array = t.imagesArray.get();
        array.forEach(function (e) {
            Images.insert(e, function (error, fileObj) {
                if (error) {
                    alert("fail")
                } else {
                    setTimeout(function(){
                        MainPage.update(t.data._id,{$addToSet:{images:fileObj._id}}, function (e,r) {
                            if(e){
                                console.log("update failed")
                            }else {
                                t.imagesArray.set([]);
                            }
                        })
                    }, 2000);

                }
            });
        })
        //t.insert.set(false);
    },
    'dropped #dropzone': function(e,t) {

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            console.log(newFile)
            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile)
            console.log("pushed")

        });
    },
})