$(function () {


    // google javascript api key AIzaSyCMYm4fb93sqWk6LRN1KF1UIrMKlzYf5E0
    // https://maps.googleapis.com/maps/api/geocode/json?address=41653&key=AIzaSyAw239Po20l0xNQoX6PW4yjvnRMB4ddJp8

    $("#add").click(function () { //the Id of the butto is connected to the click function 
        var zipCode = $("#enterzip").val(); // the id of the form is connected to the zipCode variable  
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyAw239Po20l0xNQoX6PW4yjvnRMB4ddJp8").done(function (data) {
            var latitude = data.results[0].geometry.location.lat;
            console.log(latitude);
            var longitude = data.results[0].geometry.location.lng;
            console.log(longitude);
            var lngLat = latitude + "," + longitude;
            var state = data.results[0].address_components[2].short_name;
            var city = data.results[0].address_components[1].short_name;
            // var map;
            // $("#add").on('click',function () {
            //     map = new google.maps.Map(document.getElementById('populate'), {
            //         center: { lat: -34.397, lng: 150.644 },
            //         zoom: 8
            //     });
            // });

            // the part above is pulling the call info correctly 
            // $.ajax("https://maps.googleapis.com/maps/api/js?key=AIzaSyCMYm4fb93sqWk6LRN1KF1UIrMKlzYf5E0&callback=initMap", { dataType: "jsonp" }).done(function (data) {
            // i need to create a new template to use with the maps function
            // var map;
            // function initMap() {
            //     map = new google.maps.Map(document.getElementById('populate'), {
            //         center: { lat: -34.397, lng: 150.644 },
            //         zoom: 8
            //     });
            // }
            var template = "<div class='col-sm-3 well delete' id = 'map'>"+map+"<span></span><span class ='delTemplate glyphicon glyphicon-remove'></span></div>";
            $("#populate").prepend(template);
            $(".delTemplate").click(function () {
                $(this).parent().remove();
            });
        });
    });

});
$("#deleteButton").click(function () {
    $(".delete").remove();
})




