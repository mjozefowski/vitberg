/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.08.16
 */

Template.adminmainRedLeftModal.onCreated(function () {
    this.data = Template.currentData();
    this.imagesArray = new ReactiveArray();

})

Template.adminmainRedLeftModal.onRendered(function () {

})

Template.adminmainRedLeftModal.helpers({

    selectedDoc: function () {
        var ti = Template.instance();
        return ti.data;
    }

})

Template.adminmainRedLeftModal.events({
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
    }
})