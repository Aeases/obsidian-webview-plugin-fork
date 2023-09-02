import { Setting } from 'obsidian'
import { getSvgIcon } from './getSvgIcon'
import { normalizeGateOption } from './normalizeGateOption'
import { fragWithHTML } from './fragwithhtml'
import { URLPresets } from './cssSuggest'

export const formEditGate = (contentEl: HTMLElement, gateOptions: GateFrameOption, onSubmit: (result: GateFrameOption) => void) => {

  //  ""

    new Setting(contentEl)
        .setName('URL')
        .setClass('open-gate--form-field')
        .addText((text) => {
            text
                .setPlaceholder('https://example.com')
                .setValue(gateOptions.url)
                .onChange(async (value) => {
                    gateOptions.url = value
                });
            new URLPresets(app, text.inputEl)
        })

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
        .setDesc(fragWithHTML('When <b><u>enabled</u></b>, the icon for your view will be pinned to the <u>left menu</u>'))
        .addToggle((text) =>
            text.setValue(gateOptions.hasRibbon === true).onChange(async (value) => {
                gateOptions.hasRibbon = value
            })
        )

    new Setting(contentEl)
        .setName('Position')
        .setClass('open-gate--form-field')
        .setDesc('Where should the webview pop-up when you open it?')
        .addDropdown((text) =>
            text
                .addOption('left', 'Left Sidebar')
                .addOption('right', 'Right Sidebar')
                .addOption('center', 'Current Workspace Tab')
                .setValue(gateOptions.position ?? 'right')
                .onChange(async (value) => {
                    gateOptions.position = value as GateFrameOptionType
                })
        )

    new Setting(contentEl)
        .setName('Single Webview Only')
        .setClass('open-gate--form-field')
        .setDesc(fragWithHTML("<u><b>Default</u></b>: Opening a webview will focus it rather than creating a new one. <br/> <u><b>Disabled</u></b>: Opening a webview will create a brand new view everytime."))
        .addToggle((text) =>
            text.setValue(gateOptions.restrictToSingleWebview === true).onChange(async (value) => {
                gateOptions.restrictToSingleWebview = value
            })
        )



    new Setting(contentEl)
    .setName('Icon')
    .setClass('open-gate--form-field--column-icon')
    .setDesc(fragWithHTML('<u><b>Default</u></b>: Webview Icon will match the website it points to. <br/> <u><b>Other</u></b>: Define an icon from <a href="https://lucide.dev">lucide.dev</a>, or a SVG'))
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


        advancedOptions.createDiv({
            cls: "wv-settings-title",
            text: "CSS"
        })
        advancedOptions.createDiv({
            cls: "setting-item-description",
            text: "You can pass-through the current theme's css variables by adding a '-obsidian' prefix to the variable name, e.g. --background-primary-obsidian"
        })

        const CSSSettingDivContainer = advancedOptions.createDiv()
    new Setting(CSSSettingDivContainer)
        .setClass('open-gate--form-field--column-big')
        .addTextArea((text) =>
            text.setValue(gateOptions.css ?? '').onChange(async (value) => {
                gateOptions.css = value
        })
    )
    advancedOptions.createDiv({
        cls: "wv-setting-notice",
        text: fragWithHTML(`NOTE: CSS variable pass-through into the webview only works for some variables. <br> A refresh/reload of the view is needed after theme, or light/dark mode change, see <a href="https://github.com/Aeases/obsidian-webviews">README.md</a> on github for details.`)
    })

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


    new Setting(advancedOptions)
    .setName('Profile Key')
    .setClass('open-gate--form-field')
    .setDesc("Any webviews that share the same key will share browser data. (e.g. Logins, Cookies etc.)")
    .addText((text) =>
        text.setValue(gateOptions.profileKey ?? '').onChange(async (value) => {
            if (value === '') {
                value = 'webview-data'
            }

            gateOptions.profileKey = value
        })
    )

    new Setting(contentEl).addButton((btn) =>
        btn
            .setButtonText(gateOptions.id ? 'Update Webview' : 'Create new Webview')
            .setCta()
            .onClick(async () => {
                gateOptions = normalizeGateOption(gateOptions)
                onSubmit(gateOptions)
            })
    )

    const RestrictKeysSetting = new Setting(advancedOptions)
    .setName('Restrict Key-presses to webview')
    .setClass('open-gate--form-field')
    .setDesc(fragWithHTML("<u><b>Default</u></b>: Both Obsidian & your Webview will react to keypresses <br/> <u><b>Disabled:</u></b>: Key-presses made inside your webview will be ignored by obsidian."))
    .addToggle((text) =>
        text.setValue(gateOptions.restrictKeys === true).onChange(async (value) => {
            gateOptions.restrictKeys = value
        })
    )
    advancedOptions.createDiv({
        cls: "wv-setting-notice",
        text: fragWithHTML(`NOTE: This will only restrict keys once you have <b><u>clicked</u></b> <b>inside</b> the webview. and will not impact already open webviews.`)
    })
}
