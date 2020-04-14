export default (state, text) => {
    state.bacon.isLoading = false
    state.bacon.text = text
    state.bacon.error = ''
}

export const NAME = 'refreshSuccessful'