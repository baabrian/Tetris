import { createStore } from 'redux';
import reducers from './reducers';

const Store = createStore(reducers);

export type RooteStore = ReturnType<typeof reducers>;

export default Store;
