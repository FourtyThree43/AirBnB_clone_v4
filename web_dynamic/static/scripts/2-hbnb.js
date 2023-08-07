/* eslint-env jquery */ // => (we are using jQuery)
/* Adding a listener that adds/removes id's in a variable */

document.ready(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", function(status_data) {
    if (status_data === "OK") {
      $("DIV#api_status").addClass("available")
    } else {
      $("DIV#api_status").removeClass("available")
    }
  });

  const amenity = {};
  $("li input[type=checkbox]").on('change', function () {
    const amenityId = $(this).data('id');
    const amenityname = $(this).data('name');
    if ($(this).is(':checked')) {
      amenity[amenityId] = amenityname;
    } else {
      delete amenity[amenityId];
    }
    $('.amenities h4').text(Object.values(amenity).sort().join(', '));
  });
});

