import refreshSuccessful from './refreshSuccessful'

describe('refreshSuccessful event', () => {
    let state = {}
    let text = ''

    beforeEach(() => {
        state = { bacon: {} }
        text = '' + new Date()
    })

    it('should add the error information', () => {
        refreshSuccessful(state, text)

        expect(state.bacon).toEqual({
            isLoading: false,
            text: text,
            error: ''
        })
    })
})