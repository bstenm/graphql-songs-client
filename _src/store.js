import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const initialState = {};
const enhancers = [];
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
      const { devToolsExtension } = window;

      if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
      }
}

const composedEnhancers = compose(
      applyMiddleware(...middlewares),
      ...enhancers,
);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
