import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import watchLoadCompanies from '../sagas/companiesSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchLoadCompanies);

  return store;
}
