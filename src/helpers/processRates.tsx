import { StoreRate } from '../graphql/store';
import { CurrencyDataResponseInterface } from './getData';

export const processRates = (rates: CurrencyDataResponseInterface['rates']): StoreRate[] =>
  Object.entries(rates).map(([code, value]) => ({
    code,
    value,
    __typename: 'StoreRate',
  }));
