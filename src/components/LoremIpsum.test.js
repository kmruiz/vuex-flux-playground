import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LoremIpsum from './LoremIpsum.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('LoremIpsum component', () => {
    let state = {}
    let store = {}

    beforeEach(() => {
        state = {
            bacon: {
                isLoading: false,
                text: '',
                error: ''
            }
        }

        store = new Vuex.Store({ state })
    })

    it('should print the lorem ipsum content if any', async () => {
        state.bacon.text = 'hello world!'

        const wrapper = shallowMount(LoremIpsum, { store, localVue })
        expect(wrapper.html()).toContain(state.bacon.text)
    })
})