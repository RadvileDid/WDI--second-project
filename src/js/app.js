// client side js here
//google autocomplete API below
console.log('JS loaded');

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */(document.getElementById('address')),
    {types: ['geocode']});

  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();
}

module.exports = initAutocomplete();
