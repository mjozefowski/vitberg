/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Template.clickableTemplateCreator.onCreated(function () {
    this.data = Template.currentData();
    this.imagesArray = new ReactiveArray();
    this.addMore = new ReactiveVar(true)
})

Template.clickableTemplateCreator.onRendered(function () {

})

Template.clickableTemplateCreator.helpers({

})

Template.clickableTemplateCreator.events({

    "click #addNewClickableItem": function (e,t) {

        var main = MainPage.insert({type:'mainClickable',visible:false, order:30});
        var clickable = ClickableItemsTemplate.insert({mainTemplate:main});

        var subClickable = TemplatesForMainClickable.insert({text:"subClickable"})
        var icons = {
            image:"asdasdasd",
            templateId:subClickable
        }
        ClickableItemsTemplate.update(clickable,{$addToSet:icons});

        var id = TemplatesForMainClickable.insert({});

        var array = t.imagesArray.get();
        array.forEach(function (e) {
            Icons.insert(e, function (error, fileObj) {
                if (error) {

                } else {
                    var image =
                    ClickableItemsTemplate.update(t.data.get(), {$addToSet: {"icons.templateId": id, "icons.image": image}});
                }
            });
        });


    },

    'dropped #dropzone': function(e,t) {

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            //t.imagesArray.push(newFile);
            var ti = Template.instance();

            ti.imagesArray.push(newFile);
            console.log(ti.imagesArray.get())
            t.addMore.set(false)

        });
    },


    'click .remove-image': function (e,t) {
        var name = $(e.target).attr('id');
        var i=0;
        var file =-1;
        var array = t.imagesArray.get();
        array.forEach(function (e) {

            if(e.data.blob.name == name){
                console.log('match')
                file=i;
            }
            i++
        })
        if(file!=-1){
            t.imagesArray.splice(file,1)
        }
        t.addMore.set(true)
    }

});