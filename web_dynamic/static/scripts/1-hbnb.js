/* eslint-env jquery */ // => (we are using jQuery)
/* Adding a listener that adds/removes id's in a variable */

document.ready(function () {
  const amenity = {};
  $('input[type="checkbox"]').on('change', function () {
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
