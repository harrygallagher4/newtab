(function() {
  chrome.storage.sync.get({
    config: {}
  }, items => {
    let selectors = items.config[window.location.host];

    if (!selectors) {
      return;
    }

    selectors.forEach(query => {
      elements = document.querySelectorAll(query);
      elements.forEach(element => {
        if (!element.getAttribute("target")) {
          element.setAttribute("target", "_blank")
        }
      });
    });
  });
})();

