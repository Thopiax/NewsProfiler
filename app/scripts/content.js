window.addEventListener('scroll', () => {
    browser.runtime.sendMessage({
        event: 'scroll',
        data: {
            scrollY: window.scrollY,
        },
    });
});