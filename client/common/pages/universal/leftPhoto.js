/**
 * Created by SkylinR on 03.08.2016.
 */

Template.leftPhoto.onCreated(function () {

    this.data = Template.currentData();

})

Template.leftPhoto.onRendered(function () {


})

Template.leftPhoto.helpers({

    selectedData: function () {
        var ti = Template.instance();
        return ti.data
    }

})

Template.leftPhoto.events({

})

