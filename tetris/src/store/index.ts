import { createStore } from 'redux';
import reducers from './reducers';

const Store = createStore(reducers);

export type RootStore = ReturnType<typeof reducers>;

export default Store;
