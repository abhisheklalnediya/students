import {
  createContext, Dispatch, ReactChild,
  useContext, useReducer
} from 'react';
import { Action } from './d/reducers';
import reducers, { GLOBAL_INITIAL_STATE, State } from './reducers';

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
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
