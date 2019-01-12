import { processRates } from '../processRates';
import { CurrencyDataResponseInterface } from '../getData';
import { StoreRate } from '../../graphql/store';

const ratesFromApi: CurrencyDataResponseInterface['rates'] = {
  USD: 10,
  AED: 50,
};

const processedRates: StoreRate[] = [
  {
    code: 'USD',
    value: 10,
    __typename: 'StoreRate',
  },
  {
    code: 'AED',
    value: 50,
    __typename: 'StoreRate',
  },
];

it('Processes data correctly', () => {
  expect(processRates(ratesFromApi)).toEqual(processedRates);
});
