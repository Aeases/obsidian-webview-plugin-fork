import { App, Modal } from 'obsidian'
import { formEditGate } from './fns/formEditGate'

export class ModalOnBoarding extends Modal {
    gateOptions: GateFrameOption
    onSubmit: (result: GateFrameOption) => void
    constructor(
        app: App,
        gateOptions: GateFrameOption,
        onSubmit: (result: GateFrameOption) => void
    ) {
        super(app)
        this.onSubmit = onSubmit
        this.gateOptions = gateOptions
    }

    onOpen() {
        const { contentEl } = this
        contentEl.createEl('h3', { text: 'Welcome to Webviews' })
        contentEl.createEl('p', {
            text: 'Webviews is awesome'
        })
        contentEl.createEl('p', {
            text: 'But now you have to create your first view.'
        })

        formEditGate(contentEl, this.gateOptions, (result) => {
            this.onSubmit(result)
            this.close()
        })
    }

    onClose() {
        const { contentEl } = this
        contentEl.empty()
    }
}
