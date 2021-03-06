/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.07.16
 */

Meteor.methods({
    'deleteTemplatesForMailClickable': function (id) {
        if (this.userId) {
            if (Roles.userIsInRole(this.userId, ['admin', 'editor'])) {

                var clickableTemplate = ClickableItemsTemplate.findOne({"icons.templateId": id})
                var icons = clickableTemplate.icons;

                icons.forEach(function (e) {
                    if (e.templateId == id) {
                        Icons.remove(e.image);
                        ClickableItemsTemplate.update(clickableTemplate, {$pull: {icons: e}})
                    }
                })

                TemplatesForMainClickable.remove(id);
            }
        }
    },


    'deletemainOpinion': function (id){
        MainPage.remove(id);
    },
    'deletemainParallax': function (id){
        MainPage.remove(id);
    },
    'deletemainRedLeft': function (id){
        MainPage.remove(id);
    },
    'deletemainRedRight': function (id){
        MainPage.remove(id);
    },
    'deletemainClickable': function (id){
        //TODO:Dodać usuwanie podelementów
        MainPage.remove(id);

    },
    'deletemainNews': function (id) {
        MainPage.remove(id)
    },



    //delete opinii
    //TODO:Dodać usuwanie podelementów
    'deleteOpinion': function (id) {

        var opinion = Opinions.findOne(id);
        var imgs = [];
        var thumbs = [];
        opinion.images.forEach(function (e) {
            imgs.push(e.img);
            thumbs.push(e.thumb)
        })

        imgs.forEach(function (e) {
            ImagesFromClient.remove(e.replace("/cfs/files/imagesFromCilent/",""))
        })

        Opinions.remove(id)
    },


    //obrazy
    'deleteOpinionImage': function (opinionId,imageId) {

        var opinion = Opinions.findOne(opinionId);
        var thumb;
        opinion.images.forEach(function (e) {
            if(e.img == imageId){
                thumb = e.thumb
            }
        })

        Opinions.update(opinionId, {$pull:{images:{img:imageId}}}, function (e, r) {
            if(!e){
                ImagesFromClient.remove(imageId.replace('/cfs/files/imagesFromClient/',''))
                if(thumb.length>0){
                    Thumbs.remove(thumb)
                }
            }
        });


    },

    removeGallery: function (id) {
        if(Roles.userIsInRole(this.userId,['admin','editor'])){
            Gallery.remove(id)
        }
    },

    deleteFooterItem: function (obj) {
        if (Roles.userIsInRole(this.userId, ['admin', 'editor'])) {
            var collection = obj.collection;
            switch (collection) {
                case "MenuBottom":
                    MenuBottom.remove(obj.id);
                    break;
                case "MenuContact":
                    MenuContact.remove(obj.id);
                    break;
                case "MenuLastColumn":
                    MenuLastColumn.remove(obj.id);
                    break;
                case "MenuResearch":
                    MenuResearch.remove(obj.id);
                    break;
                case "MenuProducts":
                    MenuProducts.remove(obj.id);
                    break;
            }
        }
    }


});
