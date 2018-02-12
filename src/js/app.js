// client side js here
//google autocomplete API below

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');
  const address = document.getElementById('address');

  function initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(address);

    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    const place = autocomplete.getPlace();
  }

  if (address) initAutocomplete();
});
