import refreshRequested from './refreshRequested'

describe('refreshRequested event', () => {
    let state = {}

    beforeEach(() => {
        state = { bacon: {} }
    })

    it('should reset all important info', () => {
        refreshRequested(state)

        expect(state.bacon).toEqual({
            isLoading: true,
            text: '',
            error: ''
        })
    })
})