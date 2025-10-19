// Function to auto-click "Keep Code" button
function autoClickKeepCode() {
    // Find all popup elements
    const popups = document.querySelectorAll('.sc-bcdf66b-0.keUCwH, .sc-bcdf66b-1.cCcvSA, .sc-bcdf66b-2.gqLsyk');
    
    popups.forEach(popup => {
        console.log('Newton Popup Blocker: Found popup, looking for Keep Paste button', popup);
        
        // Find the "Keep Paste" button by class
        let keepButton = popup.querySelector('button.sc-gyycJP.iQbtTh');
        if (!keepButton) {
            keepButton = popup.querySelector('button.sc-gyycJP.bWfIna');
        }
        
        if (keepButton) {
            keepButton.click();
            console.log('Newton Popup Blocker: Auto-clicked Keep Paste button (by class)');
            return;
        }
        
        // Fallback: find by text content
        const buttons = popup.querySelectorAll('button');
        buttons.forEach(btn => {
            const btnText = btn.textContent.toLowerCase();
            if (btnText.includes('keep') && btnText.includes('paste')) {
                btn.click();
                console.log('Newton Popup Blocker: Auto-clicked Keep Paste button (by text)');
            }
        });
    });
    
    // Also try to find the buttons directly in the document (in case they're not inside popup)
    let keepButton = document.querySelector('button.sc-gyycJP.iQbtTh');
    if (!keepButton) {
        keepButton = document.querySelector('button.sc-gyycJP.bWfIna');
    }
    
    if (keepButton && keepButton.textContent.toLowerCase().includes('keep')) {
        keepButton.click();
        console.log('Newton Popup Blocker: Auto-clicked Keep Paste button (direct)');
    }
}

// Run immediately
autoClickKeepCode();

// Use MutationObserver to watch for dynamically added popups
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
                // Check if the added node or its children have the popup class
                if (node.classList && (node.classList.contains('sc-bcdf66b-0') || node.classList.contains('keUCwH') || 
                    node.classList.contains('sc-bcdf66b-1') || node.classList.contains('cCcvSA') ||
                    node.classList.contains('sc-bcdf66b-2') || node.classList.contains('gqLsyk'))) {
                    autoClickKeepCode();
                } else if (node.querySelectorAll) {
                    const hasPopup = node.querySelectorAll('.sc-bcdf66b-0.keUCwH, .sc-bcdf66b-1.cCcvSA, .sc-bcdf66b-2.gqLsyk').length > 0;
                    if (hasPopup) {
                        autoClickKeepCode();
                    }
                }
            }
        });
    });
});

// Start observing the document
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

// Also check periodically as a fallback (every 500ms for the first 10 seconds)
let checkCount = 0;
const maxChecks = 20;
const intervalId = setInterval(() => {
    autoClickKeepCode();
    checkCount++;
    if (checkCount >= maxChecks) {
        clearInterval(intervalId);
    }
}, 500);

// Auto-click "Keep Code" button when paste happens
document.addEventListener('paste', function(e) {
    // Let the paste happen normally (don't stop propagation)
    // Just auto-click the button quickly
    setTimeout(autoClickKeepCode, 0);
    setTimeout(autoClickKeepCode, 10);
    setTimeout(autoClickKeepCode, 50);
    setTimeout(autoClickKeepCode, 100);
}, false);

// Also handle keyboard events
document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'v') {
        // Auto-click Keep Code when Cmd+V is pressed
        setTimeout(autoClickKeepCode, 0);
        setTimeout(autoClickKeepCode, 10);
        setTimeout(autoClickKeepCode, 50);
        setTimeout(autoClickKeepCode, 100);
        setTimeout(autoClickKeepCode, 200);
    }
    
    // Also handle copy and cut
    if ((e.metaKey || e.ctrlKey) && (e.key === 'c' || e.key === 'x')) {
        setTimeout(autoClickKeepCode, 0);
        setTimeout(autoClickKeepCode, 10);
        setTimeout(autoClickKeepCode, 50);
    }
}, false);

console.log('Newton Popup Blocker: Extension loaded - will auto-click Keep Code button');