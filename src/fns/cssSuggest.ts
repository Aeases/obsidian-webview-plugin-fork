import { TAbstractFile, TFile, TFolder, TextComponent } from "obsidian";

import { Suggest, TextInputSuggest } from "./suggest";
import { Url } from "url";
import { presets } from "src/presets";
import { fragWithHTML } from "./fragwithhtml";

export type TasURL = {
    URL: string;
    css: string;
    name: string;
    icon?: string;
    aliases?: string[];
}

export class URLPresets extends TextInputSuggest<TasURL> {
/*     constructor(app: App, inputEl: TextComponent) {
        super(app, inputEl.inputEl);
        this.app = app;
        this.inputEl = inputEl;
    
        this.suggestEl = createDiv("suggestion-container");
        const suggestion = this.suggestEl.createDiv("suggestion");
        this.suggest = new Suggest(this, suggestion, this.scope);
    
        this.scope.register([], "Escape", this.close.bind(this));
    
        this.inputEl.addEventListener("input", this.onInputChanged.bind(this));
        this.inputEl.addEventListener("focus", this.onInputChanged.bind(this));
        this.inputEl.addEventListener("blur", this.close.bind(this));
        this.suggestEl.on("mousedown", ".suggestion-container", (event: MouseEvent) => {
          event.preventDefault();
        });
      } */



  getSuggestions(inputStr: string): TasURL[] {
    const abstractFiles: TasURL[] = presets;
    const suggestions: TasURL[] = [];
    const lowerCaseInputStr = inputStr.toLowerCase();

    abstractFiles.forEach((suggestion: TasURL) => {
      if (
        suggestion.name.contains(lowerCaseInputStr) ||
        suggestion.URL.contains(lowerCaseInputStr) ||
        suggestion.aliases?.contains(lowerCaseInputStr)
      ) {
        suggestions.push(suggestion);
      }
    });

    return suggestions;
  }

  renderSuggestion(suggestion: TasURL, el: HTMLElement): void {
    el.setText(fragWithHTML(`<div class="setting-item-info .wv-suggestion-settings-info"> <div class="setting-item-name .wv-suggestion-settings-info">${suggestion.name}</div> <div class="setting-item-description .wv-suggestion-settings-info">${suggestion.URL}</div> </div>`));
  }
  //`
  selectSuggestion(suggestion: TasURL): void {
    this.inputEl.value = suggestion.URL;
    this.inputEl.trigger("input");
    this.close();
  }
}

/* export class FolderSuggest extends TextInputSuggest<TFolder> {
  getSuggestions(inputStr: string): TFolder[] {
    const abstractFiles = this.app.vault.getAllLoadedFiles();
    const folders: TFolder[] = [];
    const lowerCaseInputStr = inputStr.toLowerCase();

    abstractFiles.forEach((folder: TAbstractFile) => {
      if (
        folder instanceof TFolder &&
        folder.path.toLowerCase().contains(lowerCaseInputStr)
      ) {
        folders.push(folder);
      }
    });

    return folders;
  }

  renderSuggestion(file: TFolder, el: HTMLElement): void {
    el.setText(file.path);
  }

  selectSuggestion(file: TFolder): void {
    this.inputEl.value = file.path;
    this.inputEl.trigger("input");
    this.close();
  }
} */
