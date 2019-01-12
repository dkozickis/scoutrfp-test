export type StoreRate = {
  code: string;
  value: number;
  __typename: string; // for Apollo Client facilitation
};

export interface Store {
  isLoading: boolean;
  hasError: boolean;
  data: StoreRate[] | null;
}

export const storeDefaultState: Store = {
  isLoading: false,
  hasError: false,
  data: null,
};
