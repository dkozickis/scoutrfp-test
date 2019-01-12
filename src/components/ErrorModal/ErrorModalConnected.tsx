import { graphql } from 'react-apollo';
import { updateData, UpdateDataVariables } from '../../graphql/mutation/updateData';
import { ErrorModal, ErrorModalProps } from './ErrorModal';

export const ErrorModalConnected = graphql<{}, {}, UpdateDataVariables, ErrorModalProps>(
  updateData,
  {
    props: ({ mutate }) => ({
      onRequestClose: () => {
        mutate!({ variables: { newData: { isLoading: false, hasError: false } } });
      },
      isOpen: true,
    }),
  }
)(ErrorModal);
