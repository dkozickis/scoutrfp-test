import { getData } from './getData';

const testUrl = 'https://api.exchangeratesapi.io/latest';

describe('getData', () => {
  it('fetches data', async () => {
    expect.assertions(1);
    const data = await getData(testUrl);
    expect(data).toBeTruthy();
  });

  it('rejects', () => {
    expect(getData('http://httpstat.us/500')).rejects.toMatch('Something went wrong');
  });
});
