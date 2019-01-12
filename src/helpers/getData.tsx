export interface CurrencyDataResponseInterface {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw Error('Something went wrong');
  }
  return response;
};

/**
 * `Fetch` is ES6 feature, polyfilling has to be considered
 * @param apiUrl
 */
export const getData = (apiUrl?: string) =>
  fetch(apiUrl || process.env.REACT_APP_API_URL!)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
