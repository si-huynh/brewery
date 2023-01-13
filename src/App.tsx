import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MainNavigator } from '@navigator'
import { persistor, store } from '@store'

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainNavigator />
            </PersistGate>
        </Provider>
    )
}
