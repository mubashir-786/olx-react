
import reducer from './reducers'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const Store = createStore(persistedReducer)
const Persistor = persistStore(Store)
export {
    Store,
    Persistor
  }