var config;

function loadConfig() {
  config = chrome.storage.sync.get({
    config: {}
  }, items => {
    document.getElementById('config').value = JSON.stringify(items.config, null, 2);
  });
}

function save() {
  let newConfig = JSON.parse(document.getElementById('config').value);
  if (!newConfig) {
    alert('Invalid configuration');
  } else {
    chrome.storage.sync.set({
      config: newConfig
    }, () => {
      alert('Saved!');
      loadConfig();
    });
  }
}

loadConfig();
document.getElementById('save').onclick = save;
