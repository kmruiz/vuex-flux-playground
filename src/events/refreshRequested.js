export default (state) => {
    state.bacon.isLoading = true
    state.bacon.text = ''
    state.bacon.error = ''
}

export const NAME = 'refreshRequested'