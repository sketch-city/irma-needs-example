(function(window){
  var config = {};

  config.event = 'Irma';
  // config.additionalText = '**Need help? [Find shelters here.](irmashelters.org/map-link-here-when-ready)**';

  config.dataEntryPortal = '//irma-api.herokuapp.com/';
  config.apiBaseURL = '//irma-api.herokuapp.com/api/v1/';
  config.googleMapsAPIKey = 'AIzaSyAP7W-h_jBmtgRcROX1y-ZDNpTorc-PwlU';

  config.mapDefaults = {
    center: {
      lat: 25.7738889,
      lng: -80.2545237
    },
    zoom: 12
  };

  config.analyticsId = 'UA-105623670-2';

  config.nullPhrases = [];

  function getConfig(){
    return config;
  }

  window.getConfig = getConfig;

}(window))