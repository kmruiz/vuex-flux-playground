import { openBrowser, closeBrowser, goto, click, $ } from 'taiko'

jest.setTimeout(60000)

describe('refresh text', () => {
    beforeEach(async () => {
        await openBrowser()
        await goto('http://localhost:8080')
    })

    afterEach(async () => {
        await closeBrowser()
    })
    
    it('there is no bacon ipsum text', async () => {
        expect(await $('#bacon').exists()).toBeFalsy()
    })

    it('the user can refresh the bacon ipsum text', async () => {
        await click('Refresh')
        
        const content = await $('#bacon').text()
        expect(content).toBeTruthy()
    })
})