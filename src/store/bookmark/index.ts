import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BookMarkBrewery } from '@types'

interface BookMarkState {
    data: Array<BookMarkBrewery>
}

const initialState: BookMarkState = {
    data: [],
}

export default createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addBookMark: (state, action: PayloadAction<BookMarkBrewery>) => {
            state.data.push(action.payload)
        },
        removeBookMark: (state, action: PayloadAction<string>) => {
            const index = state.data.findIndex(item => item.id === action.payload)
            if (index > -1) {
                state.data.splice(index, 1)
            }
        },
    },
})
