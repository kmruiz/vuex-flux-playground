import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Refresh from './Refresh.vue'
import { NAME as REFRESH } from '../commands/refresh'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Refresh component', () => {
    let state = {}
    let actions = {}
    let store = {}

    beforeEach(() => {
        state = {
            bacon: {
                isLoading: false,
                text: '',
                error: ''
            }
        }

        actions = {
            [REFRESH]: jest.fn()
        }

        store = new Vuex.Store({ state, actions })
    })

    it('should delegate to the refresh command when clicked', async () => {
        const wrapper = shallowMount(Refresh, { store, localVue })
        wrapper.find('button').trigger('click')

        await wrapper.vm.$nextTick()
        expect(actions[REFRESH]).toHaveBeenCalled()
    })

    it('should not delegate to the refresh command when clicked if it\' loading data', async () => {
        state.bacon.isLoading = true

        const wrapper = shallowMount(Refresh, { store, localVue })
        wrapper.find('button').trigger('click')

        await wrapper.vm.$nextTick()
        expect(actions[REFRESH]).not.toHaveBeenCalled()
    })
})