import getDefaultUserAgent from './getDefaultUserAgent'

export const createEmptyGateOption = (): GateFrameOption => {
    return {
        id: '',
        title: '',
        icon: '',
        hasRibbon: true,
        position: 'center',
        profileKey: 'webview-data',
        url: '',
        zoomFactor: 1.0,
        restrictToSingleWebview: true,
        userAgent: getDefaultUserAgent(),
        restrictKeys: false
    }
}
