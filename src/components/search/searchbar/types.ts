export interface SearchBarLayoutProps {
    searchable?: boolean
    onTextInputFocusChanged: (isFocused: boolean) => void
    onTextInputChanged: (text: string) => void
    searchText?: string
}
