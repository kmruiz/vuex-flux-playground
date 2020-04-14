export default (state, reason) => {
    state.bacon.isLoading = false
    state.bacon.error = reason
}

export const NAME = 'refreshFailed'