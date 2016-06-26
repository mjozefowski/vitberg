/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 19.06.16
 */

Meteor.startup(function() {

    GoogleMaps.load();
});

Template.map.onCreated(function () {


    GoogleMaps.ready('map', function(map) {

        //TODO:move this one to admin
        //google.maps.event.addListener(map.instance, 'click', function(event) {
        //
        //    //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), header: event.latLng.lat(), main: "main" + event.latLng.lat() });
        //});

        var markers = {};

        Markers.find().observe({




        added: function(document) {
                // Create a marker for this document
                var marker = new google.maps.Marker({
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(document.lat, document.lng),
                    map: map.instance,
                    // We store the document _id on the marker in order
                    // to update the document within the 'dragend' event below.
                    id: document._id
                });

            var infowindow = new google.maps.InfoWindow({
                content: [
                    '<header>' + document.header + '</header>',
                    '<main>' + document.main + '</main>'].join('')
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            })

                // This listener lets us drag markers on the map and update their corresponding document.
                //google.maps.event.addListener(marker, 'dragend', function(event) {
                //    Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
                //});

                // Store this marker instance within the markers object.
                markers[document._id] = marker;
            },
            changed: function(newDocument, oldDocument) {
                markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
            },
            removed: function(oldDocument) {
                // Remove the marker from the map
                markers[oldDocument._id].setMap(null);

                // Clear the event listener
                google.maps.event.clearInstanceListeners(
                    markers[oldDocument._id]);

                // Remove the reference to this marker instance
                delete markers[oldDocument._id];
            }
        });


    })
})

Template.map.onRendered(function () {

})

Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(52.0295093, 20.6562381), //polska
                zoom: 6
                //center: new google.maps.LatLng(49.6065985,20.711387), //vitberg
                //zoom: 15
            };
        }
    }
})

Template.map.events({})