Schemas.ImagesOnSiteContainer = new SimpleSchema({

    image:{
        type:String
    }

})

ImagesOnSiteContainer.attachSchema(Schemas.ImagesOnSiteContainer);

ImagesOnSiteContainer.allow({
    insert: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    },
    update: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    },
    remove: function () {
        if(Roles.userIsInRole(Meteor.userId(),['admin'])||Roles.userIsInRole(Meteor.userId(),['editor']))
            return true;
        else
            return false;
    }
})