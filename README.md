
# Obsidian Webviews

This plugin allows you to embed any website into obsidian, ontop of that, you can use (some) obsidian theme variables in your css snippets too like `background-primary-obsidian`
This is based on [Obsidian OpenGate](https://github.com/nguyenvanduocit/obsidian-open-gate)

### Example Images
![image](https://github.com/Aeases/obsidian-webviews/assets/96164686/2c3c1f98-816d-46a5-b8be-c15e68a1a021)

![image](https://github.com/Aeases/obsidian-webviews/assets/96164686/44954aba-1d51-4f01-ba4a-979058bc94bc)

![image](https://github.com/Aeases/obsidian-webviews/assets/96164686/2b2f767c-fb06-4f3e-bc65-70d53a6c0b2a)


#### Currently supported obsidian variables (can add more just by adding stuff to the arry in getCurrentCSSvalues.ts)
| Variable                           | Within webview CSS                               |
|------------------------------------|---------------------------------------------|
| --background-primary               | --background-primary-obsidian               |
| --background-secondary             | --background-secondary-obsidian             |
| --text-normal                      | --text-normal-obsidian                      |
| --hr-color                         | --hr-color-obsidian                         |
| --inline-title-color               | --inline-title-color-obsidian               |
| --background-modifier-hover        | --background-modifier-hover-obsidian        |
| --workspace-background-translucent | --workspace-background-translucent-obsidian |
| --font-editor                      | --font-editor-obsidian                      |
| --background-modifier-border       | --background-modifier-border-obsidian       |
| --bold-color                       | --bold-color-obsidian                       |
| --italic-color                     | --italic-color-obsidian                     |

Some CSS examples are present within the `presets.ts` file in this repo.


## Usage

1.  Type `New gate` into the command palette
2.  type the url and title of the site you want to embed
3.  click `Create`

You can access the webviews from the left sidebar
