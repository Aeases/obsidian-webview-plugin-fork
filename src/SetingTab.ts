import { App, PluginSettingTab, Setting, Platform } from 'obsidian'
import OpenGatePlugin from './main'
import { ModalEditGate } from './ModalEditGate'
import { createEmptyGateOption } from './fns/createEmptyGateOption'
import { fragWithHTML } from './fns/fragwithhtml'

export class SettingTab extends PluginSettingTab {
    plugin: OpenGatePlugin
    shouldNotify: boolean

    constructor(app: App, plugin: OpenGatePlugin) {
        super(app, plugin)
        this.plugin = plugin
    }

    async updateGate(gate: GateFrameOption) {
        await this.plugin.addGate(gate)
        this.display()
    }

    display(): void {
        this.shouldNotify = false
        const { containerEl } = this
        containerEl.empty()

        if (Platform.isMobileApp) {
            containerEl
                .createEl('div', {
                    text: 'On mobile, some websites may not work.',
                    cls: 'open-gate-mobile-warning'
                })
        }



        containerEl.createEl('hr')

        const settingContainerEl = containerEl.createDiv('setting-container')

        for (const gateId in this.plugin.settings.gates) {
            const gate = this.plugin.settings.gates[gateId]
            const gateEl = settingContainerEl.createEl('div', {
                attr: {
                    'data-gate-id': gate.id
                }
            })

            new Setting(gateEl)
                .setName(gate.title)
                .setDesc(fragWithHTML(`${gate.url}`))
                .addButton((button) => {
                    button.setButtonText('Delete').onClick(async () => {
                        await this.plugin.removeGate(gateId)
                        gateEl.remove()
                    }).setWarning()
                })
                .addButton((button) => {
                    button.setButtonText('Edit').onClick(() => {
                        new ModalEditGate(
                            this.app,
                            gate,
                            this.updateGate.bind(this)
                        ).open()
                    })
                })
        }
        

//        containerEl.createEl('h3', { text: 'Help' })

//        containerEl.createEl('small', {
//            attr: {
//                style: 'display: block; margin-bottom: 5px'
//            },
//            text: 'When you delete or edit a webview, Your webview, and in some cases Obsidian, must be reloaded to see the changes.'
//        })
//
//        containerEl.createEl('small', {
//            attr: {
//                style: 'display: block; margin-bottom: 1em;'
//            },
//            text: `To reload Obsidian, you can go; "view -> Force reload" or "Reload App" in the command palette.`
//        })

        const FooterDiv = settingContainerEl.createDiv({
            cls: 'wv-footer-settings'
        })

        new Setting(FooterDiv)
            .setName(fragWithHTML('Obsidian Webviews is based on <a href="https://github.com/nguyenvanduocit/obsidian-open-gate">Obsidian Opengate</a>'))
            .setDesc(fragWithHTML(`Follow the original author of Open-gate on Twitter <a class="mod-cta"
            href="https://twitter.com/intent/follow?screen_name=duocdev">
          @duocdev</a>`))

          FooterDiv
          .createEl('button', { text: 'New Webview', cls: 'mod-cta wv-mod-cta-new-view' })
          .addEventListener('click', () => {
              new ModalEditGate(
                  this.app,
                  createEmptyGateOption(),
                  this.updateGate.bind(this)
              ).open()
          })
  
    }
}
