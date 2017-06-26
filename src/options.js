class Options {
  constructor() {
    chrome.storage.sync.get('hitomi-client-server-address', (value) => {
      //console.dir(value['hitomi-client-server-address']);
      this.serverAddress = value['hitomi-client-server-address'];
    });
    chrome.storage.sync.get('hitomi-client-server-secret', (value) => {
      //console.log(value);
      this.serverSecret = value['hitomi-client-server-secret'];
    });
    //sleep(5);
  }

  // setServerAddress(serverAddress) {
  //   this.serverAddress = serverAddress;
  // }

  // getServerAddress() {
  //   return this.serverAddress;
  // }

  // setServerSecret(serverSecret) {
  //   this.serverAddress = serverSecret;
  // }

  syncStorage() {
    chrome.storage.sync.set({ 'hitomi-client-server-address': this.serverAddress });
    chrome.storage.sync.set({ 'hitomi-client-server-secret': this.serverSecret });
  }

  asyncSyncStorage() {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve(this.syncStorage());
      }, 2000);
    });
  }
}

const options = new Options();

document.addEventListener('DOMContentLoaded', () => {
  //const options = new Options();
  const form = document.forms.options;

  form.serverAddress.value = options.serverAddress;
  form.serverSecret.value = options.serverSecret;

  form.addEventListener('keyup', () => {
    options.serverAddress = form.serverAddress.value;
    options.serverSecret = form.serverSecret.value;
    options.asyncSyncStorage().then(()=>{
      form.serverAddress.value = options.serverAddress;
      form.serverSecret.value = options.serverSecret;
    });
  });
});
