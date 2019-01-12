import { graphql } from 'react-apollo';
import { LoadButton, LoadButtonProps } from './LoadButton';
import { updateData, UpdateDataVariables } from '../../graphql/mutation/updateData';
import { getData, CurrencyDataResponseInterface } from '../../helpers/getData';
import { processRates } from '../../helpers/processRates';

export const LoadButtonConnected = graphql<{}, {}, UpdateDataVariables, LoadButtonProps>(
  updateData,
  {
    props: ({ mutate }) => ({
      onClick: () => {
        /**
         * Set `isLoading` state to `true` indicating that query is in progress
         */
        mutate!({ variables: { newData: { isLoading: true } } });

        getData()
          /**
           * If `getData` was successful - update `data` with new data
           */
          .then(({ rates }: CurrencyDataResponseInterface) => {
            mutate!({
              variables: {
                newData: { data: processRates(rates) },
              },
            });
          })
          /**
           * If `getData` WAS NOT successful - set `hasError` to true
           */
          .catch(() => {
            mutate!({ variables: { newData: { hasError: true } } });
          })
          /**
           * `getData` completed, we can set `isLoading` to `false` again
           * Maybe it's not absolutely best idea to call `mutate` both in then/catch and here,
           * as we will be mutating Apollo local store twice instead of once, but in our case it's
           * not too much of an overhead
           *
           * Promise::finally is ES2018 feature, polyfilling has to be considered
           */
          .finally(() => {
            mutate!({ variables: { newData: { isLoading: false } } });
          });
      },
    }),
  }
)(LoadButton);
