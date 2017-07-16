import Option from '../src/option';

test('Create empty option object', () => {
  const option = new Option();
  expect(option.data.server.address).toBe('');
  expect(option.data.server.secret).toBe('');
})
