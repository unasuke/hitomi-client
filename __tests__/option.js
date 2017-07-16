import Option from '../src/option';

test('Create empty option object', () => {
  const option = new Option();
  expect(option.data.server.address).toBe('');
  expect(option.data.server.secret).toBe('');
});

test('Option.syncStorage()', () => {
  const option = new Option();
  const callback = jest.fn();

  option.syncStorage(callback);
  expect(callback).toHaveBeenCalled();
});

test('Option.fetchStorage()', () => {
  const option = new Option();
  const callback = jest.fn();

  option.fetchStorage(callback);
  expect(callback).toHaveBeenCalled();
});
