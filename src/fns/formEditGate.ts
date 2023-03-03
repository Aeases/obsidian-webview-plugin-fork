import { Notice, Setting } from 'obsidian'
import { getSvgIcon } from './getSvgIcon'
import { datadogLogs } from '@datadog/browser-logs'

export const formEditGate = (
    contentEl: HTMLElement,
    gateOptions: GateFrameOption,
    onSubmit: (result: GateFrameOption) => void
) => {
    new Setting(contentEl)
        .setName('URL')
        .setClass('open-gate--form-field')
        .addText((text) =>
        text
            .setPlaceholder('https://example.com')
            .setValue(gateOptions.url)
            .onChange(async (value) => {
                gateOptions.url = value
            })
    )

    new Setting(contentEl)
        .setName('Name')
        .setClass('open-gate--form-field')
        .addText((text) =>
            text.setValue(gateOptions.title).onChange(async (value) => {
                gateOptions.title = value
            })
        )

    new Setting(contentEl)
        .setName('Icon')
        .setClass('open-gate--form-field')
        .setDesc('Leave it blank to enable auto-detect')
        .addText((text) =>
            text.setValue(gateOptions.icon).onChange(async (value) => {
                gateOptions.icon = value
            })
        )

    new Setting(contentEl)
        .setName('Pin to menu')
        .setClass('open-gate--form-field')
        .setDesc('If enabled, the gate will be pinned to the left bar')
        .addToggle((text) =>
        text
            .setValue(gateOptions.hasRibbon === true)
            .onChange(async (value) => {
                gateOptions.hasRibbon = value
            })
    )

    new Setting(contentEl)
        .setName('Position')
        .setClass('open-gate--form-field')
        .setDesc('What banner do you want to show?')
        .addDropdown((text) =>
        text
            .addOption('left', 'Left')
            .addOption('right', 'Right')
            .addOption('center', 'Center')
            .setValue(gateOptions.position ?? 'right')
            .onChange(async (value) => {
                gateOptions.position = value as GateFrameOptionType
            })
    )

    new Setting(contentEl)
        .setName('User Agent')
        .setClass('open-gate--form-field')
        .setDesc('Leave it blank if you are not sure')
        .addText((text) =>
            text.setValue(gateOptions.userAgent ?? "").onChange(async (value) => {
                gateOptions.userAgent = value
            })
        )

    new Setting(contentEl).addButton((btn) =>
        btn
            .setButtonText(
                gateOptions.id ? 'Update the gate' : 'Create new gate'
            )
            .setCta()
            .onClick(async () => {
                if (gateOptions.id === '') {
                    gateOptions.id = btoa(gateOptions.url)
                }
                if (gateOptions.icon === '') {
                    gateOptions.icon = getSvgIcon(gateOptions.url)
                }
                if (gateOptions.title === '') {
                    gateOptions.title = gateOptions.url
                }
                onSubmit(gateOptions)
            })
    )
}
