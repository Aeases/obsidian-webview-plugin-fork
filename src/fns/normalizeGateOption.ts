import { getSvgIcon } from './getSvgIcon'

export const normalizeGateOption = (gate: GateFrameOption): GateFrameOption => {

    const MatchHTTPSandHTTP = new RegExp("^(http|https):\/\/")

    if (MatchHTTPSandHTTP.test(gate.url) == false) {
        gate.url = `https://${gate.url}`
    } 

    if (gate.id === '') {
        let seedString = gate.url
        if (gate.profileKey !== 'webview-data' && gate.profileKey !== '') {
            seedString += gate.profileKey
        }
        gate.id = btoa(seedString)
    }

    if (gate.profileKey === '' || gate.profileKey === undefined) {
        gate.profileKey = 'webview-data'
    }

    if (gate.zoomFactor === 0 || gate.zoomFactor === undefined) {
        gate.zoomFactor = 1
    }

    if (gate.icon === '') {
        gate.icon = getSvgIcon(gate.url)
    }

/*     if (gate.title === '') {
        const newTitle = gate.url.replace("MatchHTTPSandHTTP", "").split(".", -1).slice(0, -1)?.join()     // TODO: Maybe make it remove the .com from the end as well.
        if (typeof newTitle === "string") {
            gate.title = newTitle
        } else {
            gate.title = gate.url
        }
    } */
    // TODO: make it get the name automatically
    return gate
}
