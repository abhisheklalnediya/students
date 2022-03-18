import {
  createContext, Dispatch, ReactChild,
  useContext, useReducer
} from 'react';
import reducers, { GLOBAL_INITIAL_STATE, State } from './reducers';
import { Action } from './reducers.d';

export type ActionType = {
  type: string,
  payload: string
};

export const StateContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>; // action type here
}>({
  state: GLOBAL_INITIAL_STATE,
  dispatch: () => null,
});

type StateProviderProps = {
  children:ReactChild
};

export function StateProvider(props: StateProviderProps) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducers, GLOBAL_INITIAL_STATE);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch };
  console.log(value);
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
