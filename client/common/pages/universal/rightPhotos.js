/**
 * Created by SkylinR on 03.08.2016.
 */

Template.rightPhoto.onCreated(function () {
    this.data = Template.currentData()
})

Template.rightPhoto.onRendered(function () {



})

Template.rightPhoto.helpers({

    selectedData: function () {
        var ti = Template.instance();
        return ti.data
    }

})

Template.rightPhoto.events({

})

