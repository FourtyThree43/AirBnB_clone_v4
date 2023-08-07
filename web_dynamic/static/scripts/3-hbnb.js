/* eslint-env jquery */ // => (we are using jQuery)

document.ready(function () {
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
        $('div#api-status').addClass('available');
      } else {
        $('div#api-status').removeClass('available');
      }
    }
  });

  /* sending a Post request to an api endpoint */
  $.post({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    headers: { 'Content-Type': 'application/json' },
    success: (body) => {
      const data = JSON.parse(body);
      data.forEach((place) => {
        $('section.places').append(<article>place</article>);
      });
    }
  });
});
