/* eslint-env jquery */ // => (we are using jQuery)

$(() => {
/* Adding a listener that adds/removes id's in a variable */
  const amenity = {};
  $('li input[type=checkbox]').on('change', function () {
    const amenityId = $(this).data('id');
    const amenityname = $(this).data('name');
    if ($(this).is(':checked')) {
      amenity[amenityId] = amenityname;
    } else {
      delete amenity[amenityId];
    }
    $('.amenities h4').text(Object.values(amenity).sort().join(', '));
  });

  /* Check the staus of the APi */
  $.get({
    url: 'http://127.0.0.1:5001/api/v1/status/',
    success: function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});
