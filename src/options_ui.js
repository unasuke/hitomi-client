import Option from './option'

const option = new Option();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.option;
  const status = document.getElementById('js-status');
  status.textContent = 'loading...';

  option.fetchStorage(() => {
    form.serverAddress.value = option.data.server.address;
    form.serverSecret.value = option.data.server.secret;
    status.textContent = '';
  });

  document.getElementById('js-form-button').addEventListener('click', () => {
    status.textContent = 'saving...';
    option.data.server.address = form.serverAddress.value;
    option.data.server.secret = form.serverSecret.value;
    option.syncStorage(() => {
      status.textContent = '';
    });
  });
});
