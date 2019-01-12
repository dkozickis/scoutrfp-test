import { StoreRate } from '../graphql/store';
import { CurrencyDataResponseInterface } from './getData';

export const processRates = (rates: CurrencyDataResponseInterface['rates']): StoreRate[] =>
  /**
   * Object::entries is ES2017, polyfylling has to be considered
   * @param rates
   */
  Object.entries(rates).map(([code, value]) => ({
    code,
    value,
    __typename: 'StoreRate',
  }));
