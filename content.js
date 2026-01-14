// Function to auto-click button with specific class
function autoClickTargetButton() {
    // Find button with class "sc-gyycJP eFsIHd"
    const targetButton = document.querySelector('button.sc-gyycJP.eFsIHd');
    
    if (targetButton) {
        targetButton.click();
        console.log('Newton Popup Blocker: Auto-clicked target button with class sc-gyycJP eFsIHd');
        return true;
    }
    
    return false;
}

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

// Combined function to handle all auto-clicks
function autoClickAll() {
    autoClickTargetButton();
    autoClickKeepCode();
}

// Run immediately
autoClickAll();

// Use MutationObserver to watch for dynamically added popups
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
                // Check if the added node or its children have the popup class
                if (node.classList && (node.classList.contains('sc-bcdf66b-0') || node.classList.contains('keUCwH') || 
                    node.classList.contains('sc-bcdf66b-1') || node.classList.contains('cCcvSA') ||
                    node.classList.contains('sc-bcdf66b-2') || node.classList.contains('gqLsyk'))) {
                    autoClickAll();
                } else if (node.querySelectorAll) {
                    const hasPopup = node.querySelectorAll('.sc-bcdf66b-0.keUCwH, .sc-bcdf66b-1.cCcvSA, .sc-bcdf66b-2.gqLsyk').length > 0;
                    const hasTargetButton = node.querySelectorAll('button.sc-gyycJP.eFsIHd').length > 0;
                    if (hasPopup || hasTargetButton) {
                        autoClickAll();
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
    autoClickAll();
    checkCount++;
    if (checkCount >= maxChecks) {
        clearInterval(intervalId);
    }
}, 500);

// Auto-click buttons when paste happens
document.addEventListener('paste', function(e) {
    // Let the paste happen normally (don't stop propagation)
    // Just auto-click the buttons quickly
    setTimeout(autoClickAll, 0);
    setTimeout(autoClickAll, 10);
    setTimeout(autoClickAll, 50);
    setTimeout(autoClickAll, 100);
}, false);

// Also handle keyboard events
document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'v') {
        // Auto-click buttons when Cmd+V is pressed
        setTimeout(autoClickAll, 0);
        setTimeout(autoClickAll, 10);
        setTimeout(autoClickAll, 50);
        setTimeout(autoClickAll, 100);
        setTimeout(autoClickAll, 200);
    }
    
    // Also handle copy and cut
    if ((e.metaKey || e.ctrlKey) && (e.key === 'c' || e.key === 'x')) {
        setTimeout(autoClickAll, 0);
        setTimeout(autoClickAll, 10);
        setTimeout(autoClickAll, 50);
    }
}, false);

console.log('Newton Popup Blocker: Extension loaded - will auto-click Keep Code button and target button with class sc-gyycJP eFsIHd');