import refreshFailed from './refreshFailed'

describe('refreshFailed event', () => {
    let state = {}
    let errorInfo = ''

    beforeEach(() => {
        state = { bacon: {} }
        errorInfo = '' + new Date()
    })

    it('should add the error information', () => {
        refreshFailed(state, errorInfo)

        expect(state.bacon).toEqual({
            isLoading: false,
            text: '',
            error: errorInfo
        })
    })
})