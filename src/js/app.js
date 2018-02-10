// client side js here
//google autocomplete API below
console.log('JS loaded');

function initAutocomplete() {
  const autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'));

  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();
}

module.exports = initAutocomplete();
