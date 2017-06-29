import Options from './options'

const options = new Options();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.options;
  const status = document.getElementById('js-status');
  status.textContent = 'loading...';

  options.fetchStorage(() => {
    form.serverAddress.value = options.data.server.address;
    form.serverSecret.value = options.data.server.secret;
    status.textContent = '';
  });

  document.getElementById('js-form-button').addEventListener('click', () => {
    status.textContent = 'saving...';
    options.data.server.address = form.serverAddress.value;
    options.data.server.secret = form.serverSecret.value;
    options.syncStorage(() => {
      status.textContent = '';
    });
  });
});
