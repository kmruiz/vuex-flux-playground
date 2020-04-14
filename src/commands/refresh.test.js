import refresh from './refresh'
import { NAME as REFRESH_REQUESTED } from '../events/refreshRequested'
import { NAME as REFRESH_SUCCESSFUL } from '../events/refreshSuccessful'
import { NAME as REFRESH_FAILED } from '../events/refreshFailed'

describe('refresh command', () => {
    let context = {}
    
    beforeEach(() => {
        context = {
            commit: jest.fn()
        }
    })

    it('should dispatch a loading event when called', async () => {
        fetch.once(() => Promise.resolve({ status: 200, body: '[]'}))
        await refresh(context)

        expect(context.commit).toHaveBeenCalledWith(REFRESH_REQUESTED)
    })

    it('should dispatch a successful refresh event when the backend answers with a 200 and the text', async () => {
        fetch.once(() => Promise.resolve({ status: 200, body: '[ "Hello World!" ]'}))
        await refresh(context)

        expect(context.commit).toHaveBeenCalledWith(REFRESH_REQUESTED)
        expect(context.commit).toHaveBeenCalledWith(REFRESH_SUCCESSFUL, 'Hello World!')
    })


    it('should dispatch a failed refresh evebt when the backend answers with an error code', async () => {
        fetch.once(() => Promise.resolve({ status: 500, body: ''}))
        await refresh(context)

        expect(context.commit).toHaveBeenCalledWith(REFRESH_REQUESTED)
        expect(context.commit).toHaveBeenCalledWith(REFRESH_FAILED, 'Magic error')
    })
})