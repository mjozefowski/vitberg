/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Template.adminmainParallaxModal.onCreated(function () {
    this.data = Template.currentData();
})

Template.adminmainParallaxModal.onRendered(function () {

})

Template.adminmainParallaxModal.helpers({
    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }
})

Template.adminmainParallaxModal.events({
    'click #save': function (e,t) {
        $('.saveButton').click();
        var array = t.imagesArray.get();
        array.forEach(function (e) {
            Images.insert(e, function (error, fileObj) {
                if (error) {
                    alert("fail")
                } else {
                    setTimeout(function(){
                        MainPage.update(t.selectedDocument.get(),{$addToSet:{images:fileObj._id}}, function (e,r) {
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
    }
})