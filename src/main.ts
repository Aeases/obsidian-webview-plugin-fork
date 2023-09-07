import { ButtonComponent, Notice, Platform, Plugin, Scope, WorkspaceWindow } from 'obsidian'
import { SettingTab } from './SetingTab'
import { registerGate } from './fns/registerGate'
import { ModalEditGate } from './ModalEditGate'
import { ModalOnBoarding } from './ModalOnboarding'
import { unloadView } from './fns/unloadView'
import { createEmptyGateOption } from './fns/createEmptyGateOption'
import { normalizeGateOption } from './fns/normalizeGateOption'
import { ModalListGates } from './ModalListGates'
import { registerCodeBlockProcessor } from './fns/registerCodeBlockProcessor'
import { registerLinkProcessor } from './fns/registerLinkProcessor'
import { examplePlugin } from './MCPlugin'
import { fragWithHTML } from './fns/fragwithhtml'
import { BrowserWindow } from 'electron/main'
import { webContents } from 'electron'
import { GateView } from './GateView'
const window = require('electron').BrowserWindow;

interface PluginSetting {
    uuid: string
    gates: Record<string, GateFrameOption>
}

const DEFAULT_SETTINGS: PluginSetting = {
    uuid: '',
    gates: {}
}

const defaultGateOption: Partial<GateFrameOption> = {
    profileKey: 'webview-data',
    zoomFactor: 1
}

export default class ObsidianWebviewsPlugin extends Plugin {
    settings: PluginSetting

    async onload() {
        await this.loadSettings()

        await this.initFrames()
        this.addSettingTab(new SettingTab(this.app, this))
        this.registerCommands()

        registerCodeBlockProcessor(this)
        registerLinkProcessor(this)

        this.registerEditorExtension([examplePlugin])
    }

    private async initFrames() {
        if (this.settings.uuid === '') {
            this.settings.uuid = this.generateUuid()
            await this.saveSettings()

            if (Object.keys(this.settings.gates).length === 0) {
                new ModalOnBoarding(
                    this.app,
                    createEmptyGateOption(),
                    async (gate: GateFrameOption) => {
                        await this.addGate(gate)
                    }
                ).open()
            }
        }

        for (const gateId in this.settings.gates) {
            const gate = this.settings.gates[gateId]
            registerGate(this, gate)
        }
    }

    private registerCommands() {
        this.addCommand({
            id: `open-gate-create-new`,
            name: `Create new gate`,
            callback: async () => {
                new ModalEditGate(
                    this.app,
                    createEmptyGateOption(),
                    async (gate: GateFrameOption) => {
                        await this.addGate(gate)
                    }
                ).open()
            }
        })

        this.addCommand({
            id: `open-list-gates-modal`,
            name: `List Gates`,
            hotkeys: [{ modifiers: ['Mod', 'Shift'], key: 'g' }],
            callback: async () => {
                new ModalListGates(
                    this.app,
                    this.settings.gates,
                    async (gate: GateFrameOption) => {
                        await this.addGate(gate)
                    }
                ).open()
            }
        })
    }

    onunload() {}

    async addGate(gate: GateFrameOption) {
        if (!this.settings.gates.hasOwnProperty(gate.id)) {
            registerGate(this, gate)
            console.log("Registering New Gate")
        } else {
            let ReloadNotice = new Notice(
                fragWithHTML(`Refreshing All Instances of ${gate.title}...`), 0
            )
            new ButtonComponent(ReloadNotice.noticeEl).onClick(async(e) => {
                // @ts-ignore
                await this.app.plugins.disablePlugin("obsidian-webviews");
                // @ts-ignore
                await this.app.plugins.enablePlugin("obsidian-webviews");
            }).setIcon("refresh-cw")


            let LeavesThatAreGates = this.app.workspace.getLeavesOfType(gate.id)
            if (LeavesThatAreGates.length == 0) {
                ReloadNotice.setMessage("You may have to restart Obsidian to apply some changes. ( e.g. Webview Icon )")
                new ButtonComponent(ReloadNotice.noticeEl)
                .onClick((e) => {
                    e.win.activeWindow.close()
                }).setIcon("alert-triangle").setButtonText("Close Obsidian").setWarning()
            }
            LeavesThatAreGates.forEach(async (e) => {
                // @ts-ignore
                let Leaves: WebviewTag | HTMLIFrameElement = e.view.frame
                // @ts-ignore
                let LeavesCSS: string = e.view.options.css
                let NoticeMercyDuration = 800
                console.log(e)
                try {
/*                     if (LeavesCSS == gate.css) {
                        await Leaves.removeInsertedCSS(LeavesCSS)
                        await Leaves.insertCSS(gate.css)
                        // @ts-ignore
                        LeavesCSS.InjectedCSS = gate.css
                        NoticeMercyDuration = 3850
                    } */
                    // @ts-ignore
                    Leaves.reload()
                    setTimeout(() => ReloadNotice.hide(), NoticeMercyDuration)
                } catch (error) {
                    console.error(`[Obsidian Webviews] ${error} \n\n Please click Refresh Icon in the top-right notice`)
                }
            })


        
        }

        if (gate.profileKey === '' || gate.profileKey === undefined) {
            gate.profileKey = defaultGateOption.profileKey
        }

        if (gate.zoomFactor === 0 || gate.zoomFactor === undefined) {
            gate.zoomFactor = defaultGateOption.zoomFactor
        }

        this.settings.gates[gate.id] = gate

        await this.saveSettings()
    }

    async removeGate(gateId: string) {
        if (!this.settings.gates[gateId]) {
            new Notice('Gate not found')
        }

        const gate = this.settings.gates[gateId]

        await unloadView(this.app.workspace, gate)
        delete this.settings.gates[gateId]
        await this.saveSettings()
        let DeleteNotice = new Notice(fragWithHTML(`Deleted ${gate.title}`), 1500)
        //new ButtonComponent(DeleteNotice.noticeEl).onClick(() => registerGate(this, gate)).setButtonText("Restore Gate").setCta()
    }

    async loadSettings() {
        this.settings = await this.loadData()
        // merge default settings
        this.settings = {
            ...DEFAULT_SETTINGS,
            ...this.settings
        }

        if (!this.settings.gates) {
            this.settings.gates = {}
        }

        for (const gateId in this.settings.gates) {
            this.settings.gates[gateId] = normalizeGateOption(
                this.settings.gates[gateId]
            )
        }
    }

    async saveSettings() {
        await this.saveData(this.settings)
    }

    private generateUuid() {
        // generate uuid
        return (
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        )
    }
}
