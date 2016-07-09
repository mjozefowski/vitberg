/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 03.07.16
 */

Schemas.ClickableIcons = new SimpleSchema({
    image:{
        type:String,
    },
    templateId:{
        type:String
    }
})

Schemas.ClickbableItemsTemplateSchema = new SimpleSchema({

    mainTemplateId:{
      type:String
    },
    icons:{
        type:[Schemas.ClickableIcons],
        optional:true
    }


})

ClickableItemsTemplate.allow({
    insert:function(){
        return true;
    },
    update:function(){
        return true;
    },
    remove:function(){
        return true;
    }
})