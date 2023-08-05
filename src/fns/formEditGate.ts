import { Setting } from 'obsidian'
import { getSvgIcon } from './getSvgIcon'
import { normalizeGateOption } from './normalizeGateOption'

export const formEditGate = (contentEl: HTMLElement, gateOptions: GateFrameOption, onSubmit: (result: GateFrameOption) => void) => {



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
        .setName('Pin to menu')
        .setClass('open-gate--form-field')
        .setDesc('If enabled, the gate will be pinned to the left bar')
        .addToggle((text) =>
            text.setValue(gateOptions.hasRibbon === true).onChange(async (value) => {
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
    
        contentEl.createDiv({
            cls: "wv-settings-title",
            text: "CSS"
        })
        contentEl.createDiv({
            cls: "setting-item-description",
            text: "You can pass-through the current theme's css variables by adding a '-obsidian' prefix to the variable name, e.g. --background-primary-obsidian"
        })

        const CSSSettingDivContainer = contentEl.createDiv()
    new Setting(CSSSettingDivContainer)
        .setClass('open-gate--form-field--column-big')
        .addTextArea((text) =>
            text.setValue(gateOptions.css ?? '').onChange(async (value) => {
                gateOptions.css = value
        })
    )
    contentEl.createDiv({
        cls: "wv-setting-notice",
        text: "\n NOTE: CSS variable pass-through into the webview only works for some variables, it also requires a refresh after theme change, see README.md on github for details."
    })

    new Setting(contentEl)
    .setName('Icon')
    .setClass('open-gate--form-field--column-icon')
    .setDesc('Leave it blank to enable auto-detect')
    .addTextArea((text) =>
        text.setValue(gateOptions.icon).onChange(async (value) => {
            gateOptions.icon = value
        })
    )

    new Setting(contentEl)
        .setName('Advanced Options')
        .setClass('open-gate--form-field')
        .addToggle((text) =>
            text.setValue(false).onChange(async (value) => {
                if (value) {
                    advancedOptions.addClass('open-gate--advanced-options--show')
                } else {
                    advancedOptions.removeClass('open-gate--advanced-options--show')
                }
            })
        )

    const advancedOptions = contentEl.createDiv({
        cls: 'open-gate--advanced-options open-gate--advanced-options'
    })




    new Setting(advancedOptions)
        .setName('Profile Key')
        .setClass('open-gate--form-field')
        .setDesc("It's like profiles in Chrome, gates with the same profile can share storage")
        .addText((text) =>
            text.setValue(gateOptions.profileKey ?? '').onChange(async (value) => {
                if (value === '') {
                    value = 'open-gate'
                }

                gateOptions.profileKey = value
            })
        )

    //zoomFactor
    new Setting(advancedOptions)
        .setName('Zoom Factor')
        .setClass('open-gate--form-field')
        .setDesc('Leave it blank if you are not sure')
        .addText((text) =>
            text.setValue(gateOptions.zoomFactor?.toString() ?? '0.0').onChange(async (value) => {
                gateOptions.zoomFactor = parseFloat(value)
            })
        )

    new Setting(contentEl).addButton((btn) =>
        btn
            .setButtonText(gateOptions.id ? 'Update the gate' : 'Create new gate')
            .setCta()
            .onClick(async () => {
                gateOptions = normalizeGateOption(gateOptions)
                onSubmit(gateOptions)
            })
    )
}
