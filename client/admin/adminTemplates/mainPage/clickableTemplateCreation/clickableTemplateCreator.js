/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Template.clickableTemplateCreator.onCreated(function () {
    this.data = Template.currentData();
})

Template.clickableTemplateCreator.onRendered(function () {

})

Template.clickableTemplateCreator.helpers({

})

Template.clickableTemplateCreator.events({

    "click #addNewClickableItem": function (e,t) {

       var id = TemplatesForMainClickable.insert({});
       var image = "url to image here"

       ClickableItemsTemplate.update(t.data.get(), {$addToSet:{"icons.templateId":id,"icons.image":image}} )

    }

})