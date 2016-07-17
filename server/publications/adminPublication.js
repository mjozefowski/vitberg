/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Meteor.publish('adminPublication', function () {

    if(this.userId){
        return [News.find(),Categories.find(),SubCategories.find(),Images.find(), MainPage.find(), Markers.find(), Icons.find(), TemplatesForMainClickable.find(),ClickableItemsTemplate.find(),Notifications.find(),NotificationsUser.find()]
    }

})