import { NAME as REFRESH_REQUESTED } from "../events/refreshRequested";
import { NAME as REFRESH_SUCCESSFUL } from "../events/refreshSuccessful";
import { NAME as REFRESH_FAILED } from "../events/refreshFailed";

export default async ({ commit }) => {
    commit(REFRESH_REQUESTED)
    const response = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
    if (response.ok) {
        const body = await response.json()
        const asText = body.reduce((a, b) => a + '\n' + b, '').trim()
        commit(REFRESH_SUCCESSFUL, asText)
    } else {
        commit(REFRESH_FAILED, 'Magic error')
    }
}

export const NAME = 'refresh'