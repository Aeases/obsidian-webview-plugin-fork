import { App } from "obsidian";

export const getObsidianCssVars = (app: App) => {
    let tobeOverrided = ["--background-primary", "--background-secondary"]
    let styleOverrides = []
    console.log(tobeOverrided)
    for (const style of tobeOverrided) {
        console.log(`Style is: ${style}`)
        let StyleValue = app.workspace.containerEl.getCssPropertyValue(style)
        styleOverrides.push(`:root {${style}-obsidian: ${StyleValue}}`)
        console.log(`The value is: ${StyleValue}`)
    }
    //let style = app.workspace.containerEl.getCssPropertyValue("--background-primary")
    //styleOverrides.push(`:root {--background-primary: ${style}}`)

    return(styleOverrides)
}