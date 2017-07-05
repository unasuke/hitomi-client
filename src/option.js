export default class Option {
  constructor() {
    this.data = {
      server: {
        address: '',
        secret: '',
      },
    };
  }

  fetchStorage(callback) {
    chrome.storage.sync.get(null, (value) => {
      this.data = value.data;
      callback();
    });
  }

  syncStorage(callback) {
    chrome.storage.sync.set({ data: this.data }, () => {
      callback();
    });
  }
}
