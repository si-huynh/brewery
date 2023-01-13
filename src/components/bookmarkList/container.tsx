import React from 'react'

import { useAppSelector } from '@hooks'

import BookmarkListLayout from './layout'

export default function BookmarkListContainer(): JSX.Element {
    const { data } = useAppSelector(state => state.bookmark)
    return <BookmarkListLayout {...{ data }} />
}
