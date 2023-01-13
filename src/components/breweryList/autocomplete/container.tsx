import React from 'react'

import AutocompleteLayout from './layout'
import { AutocompleteContainerProps } from './types'

export default function AutocompleteContainer(props: AutocompleteContainerProps): JSX.Element {
    const { data, onItemSelected } = props
    return <AutocompleteLayout data={data.length > 5 ? data.slice(0, 5) : data} onItemSelected={onItemSelected} />
}
