import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

import bookMarkSlice from './bookmark'

const reducers = combineReducers({
    bookmark: bookMarkSlice.reducer,
})

type RootReducer = ReturnType<typeof reducers>

const persistedReducer = persistReducer<RootReducer>(
    {
        key: 'root',
        storage: AsyncStorage,
        version: 1,
    },
    reducers,
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Actions
export const { addBookMark, removeBookMark } = bookMarkSlice.actions
