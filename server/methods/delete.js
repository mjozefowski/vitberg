/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 09.07.16
 */

Meteor.methods({
    'deleteTemplatesForMailClickable':function (id) {
        if(this.userId){
            if(Roles.userIsInRole(this.userId,['admin','editor'])){

                var clickableTemplate = ClickableItemsTemplate.findOne({"icons.templateId":id})
                var icons = clickableTemplate.icons;

                icons.forEach(function (e) {
                    if(e.templateId == id){
                        Icons.remove(e.image);
                        ClickableItemsTemplate.update(clickableTemplate,{$pull:{icons:e}})
                    }
                })

                TemplatesForMainClickable.remove(id);
            }
        }
    }

})