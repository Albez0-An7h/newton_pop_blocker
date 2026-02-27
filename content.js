// Auto-click target buttons as they appear
function autoClickTargetButtons() {
    const selectors = [
        'button.sc-gyycJP.dXTQfT',
        'button.sc-gyycJP.lnmFYI',
        'button.sc-gyycJP.fCwqUQ'
    ];

    selectors.forEach(selector => {
        const btn = document.querySelector(selector);
        if (btn) {
            btn.click();
        }
    });
}

// Run immediately in case buttons are already present
autoClickTargetButtons();

// Watch for dynamically added buttons
const observer = new MutationObserver(() => {
    autoClickTargetButtons();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
