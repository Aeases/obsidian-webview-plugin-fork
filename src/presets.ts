import { TasURL } from "./fns/cssSuggest"

export const presets: TasURL[] = [
    {
        URL: "https://remnote.com/notes",
        css: `
        :root {
        }
        
        
        :root body.dark {
            --rn-clr-background-primary: var(--background-primary-obsidian) !important;
            --rn-clr-background-inverse-primary: var(--background-secondary-obsidian) !important;
            --rn-clr-background-elevation-5: var(--background-secondary-obsidian) !important;
        }
        
        .dark .dark\:bg-gray-5 {
            background-color: var(--background-primary-obsidian) !important;
        }
        
        :root body.light {
            --rn-clr-background-primary: var(--background-primary-obsidian) !important;
            --rn-clr-background-light-accent: var(--hr-color-obsidian);
            --tw-bg-opacity: 0.01 !important;
            --rn-clr-background-inverse-primary: var(--background-primary-obsidian) !important;
            --rn-clr-background-elevation-5: var(--background-secondary-obsidian) !important;
            --tw-bg-opacity: 0.01 !important;
        }
        
        .bg-gray-5 {
            --tw-bg-opacity: 0.01 !important;
        }
        
        .border-divider {
            --tw-border-opacity: 0.01 !important;
        }
        
        .bg-white {
            --tw-bg-opacity: 0.01 !important;
        }
        
        
        .queue__progress.rn-queue__progress-bar.relative {
            background-color: var(--background-primary-obsidian);
            display: inherit;
        }
        `,
        name: "Remnote",
        icon: "flower"
    },
    {
        URL: "https://todoist.com/app/",
        css: `
        :root.theme_dark {
            --product-library-background-base-primary: var(--background-primary-obsidian) !important;
            --product-library-background-nav-bar-idle-fill: var(--background-primary-obsidian) !important;
            --product-library-display-primary-idle-tint: var(--inline-title-color-obsidian);
            --reactist-content-primary: var(--text-normal-obsidian);
            --reactist-content-secondary: var(--text-normal-obsidian);
            --product-library-display-primary-idle-tint: var(--inline-title-color-obsidian) !important;
            --reactist-bg-aside: var(--background-secondary-obsidian);
            --product-library-background-base-secondary: var(--background-secondary-obsidian) !important;
            --sidebar-item-hover-fill: var(--background-modifier-hover-obsidian);
            --reactist-divider-primary: var(--hr-color-obsidian);
            --reactist-divider-secondary: var(--hr-color-obsidian);
            --reactist-divider-tertiary: var(--hr-color-obsidian);
            --product-library-divider-primary: var(--hr-color-obsidian) !important;
            --reactist-bg-menu: var(--workspace-background-translucent-obsidian);
            --reactist-bg-toast: var(--background-secondary-obsidian);
            --reactist-btn-hover-fill: var(--background-modifier-hover-obsidian);
            --reactist-actionable-focus-fill: var(--background-modifier-hover-obsidian);
            --reactist-actionable-quaternary-hover-fill: var(--background-modifier-hover-obsidian);
            --reactist-actionable-quaternary-hover-tint: var(--text-normal-obsidian);
            --product-library-actionable-quaternary-on-hover-tint: var(--text-normal-obsidian) !important;
        }
        
        
        #quick_find {
            --quick-find-placeholder-tint: var(--text-normal-obsidian) !important;
        }
        
        .menu_list {
            backdrop-filter: blur(5px) saturate(190%) contrast(70%) brightness(80%)
        }
        
        .task_list_item__actions>button:not(:disabled):hover {
            background-color: var(--background-modifier-hover-obsidian) !important;
        }
        
        .theme_dark .task_list_item__content code {
        background-color: var(--reactist-prose-code-fill) !important;
        }`,
        name: "Todoist",
    },
    {
        URL: "https://online.clickview.com.au/?loginPrompt=false",
        css: `
        .video-metadata-container {
            border-radius: 8px;
            background-color: var(--background-primary-obsidian) !important;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
            transition: all 0.2s;
            transition-timing-function: cubic-bezier(.64,.84,.11,.55);
        }
        
        .video-info .title-container .edit-view input:not([type=submit]):not([type=checkbox]):not([type=radio]).name, .master-play-view .description-container .edit-view .description {
            background-color: var(--background-secondary-obsidian);
            border: 1px solid var(--hr-color-obsidian);
        }
        
        .navbar.navbar-default {
             background-color: var(--background-secondary-obsidian);
             border-bottom: 1px solid var(--hr-color-obsidian);
        }
        
        #content-container {
             background-color: var(--background-secondary-obsidian);
        }
        
        .main-play-block {
             background-color: var(--background-secondary-obsidian) !important;
        }
        
        #search-area-nav .query-container {
            background-color: var(--background-primary-obsidian) !important;
        }
        
        #search-area-nav input.typeahead {
            background-color: var(--background-secondary-obsidian) !important;
        }
        
        .video-info .name, .video-info .title-container .edit-view .name {
            color: var(--inline-title-color-obsidian) !important;
        }
        
        #info-tab .info-wrapper {
            color: var(--text-normal-obsidian) !important;
        }
        
        .description-container .description-content {
            color: var(--text-normal-obsidian) !important;
        }
        
        #top-black-bar {
            background-color: var(--background-primary-obsidian) !important;
        }
        
        .container-fluid {
            border-bottom: 1px solid var(--hr-color-obsidian) !important;
        }
        
        html body {
            background-color: var(--background-secondary-obsidian) !important;
        }
        
        .navbar .navbar-brand {
            display: none;
        }
        
        .banner-container {
            background-color: var(--background-primary-obsidian) !important;
            border: 1px solid var(--hr-color-obsidian) !important;
            border-radius: 8px;
        }
        
        html body .btn, html body .cv-btn, html body .dropdown-menu {
            border-radius: 5px;
            border: 1px solid var(--hr-color-obsidian);
            background-color: var(--background-secondary-obsidian);
            color: var(--text-normal-obsidian) !important;
        }
        
        .btn.grey:active, .btn.grey:focus, .btn.grey:hover, .btn.secondary:active, .btn.secondary:focus, .btn.secondary:hover {
            color:  var(--text-normal-obsidian) !important;
            background: var(--background-primary-obsidian) !important;
            border: 1px solid black !important;
            outline: var(--hr-color-obsidian) solid 2px;
            transition: all 0.2s;
            transition-timing-function: cubic-bezier(.64,.84,.11,.55);
        }
        
        .btn.grey:active, .btn.grey:focus, .btn.grey:hover, .btn.secondary:active, .btn.secondary:focus, .btn.secondary:hover {
            border: 1px solid var(--hr-color-obsidian) !important;
        }
        
        .cv-tab-view .tab-navigation ul {
            border-bottom: 1px solid var(--hr-color-obsidian) !important;
        }
        
        #online .navbar-default .navbar-toggle {
            mix-blend-mode: luminosity;
        }
        `,
        name: "Clickview",
        icon: "film"
    },
    {
        URL: "https://www.onenote.com/notebook",
        css: `
        :root {

        }
        `,
        name: "Onenote",
        icon: "book"
    },
    {
        URL: "https://bard.google.com",
        name: "Bard AI",
        css: `
        :root .dark-theme {
            --bard-color-main-container-background: var(--color-red) !important;
            --gm-outlinedtextfield-outline-color--stateful: #90c0ca !important;
            --gm-outlinedtextfield-outline-color: #43494b !important;
            --gm-outlinedtextfield-caret-color: white !important;
            --bard-color-surface: var(--background-secondary-obsidian) !important;
            --bard-color-on-surface: var(--text-normal-obsidian) !important;
            --bard-color-primary-background: var(--background-primary-obsidian) !important;
            --bard-color-response-container-background: var(--background-secondary-obsidian) !important;
        
        }
        
        :root .dark-theme .gmat-mdc-form-field.mat-primary.mat-form-field-appearance-outline .mat-mdc-text-field-wrapper:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading, :root .dark-theme .gmat-mdc-form-field.mat-primary.mat-form-field-appearance-outline .mat-mdc-text-field-wrapper:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch, :root .dark-theme .gmat-mdc-form-field.mat-primary.mat-form-field-appearance-outline .mat-mdc-text-field-wrapper:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
            border-color: var(--hr-color-obsidian) !important;
        }
        
        .gb_ld {
            height: 0px !important;
        }
        .gb_Ld {
            display: none !important;
        }
        
        .recent-conversations-suggestions mat-icon {
            background-color: var(--background-primary-obsidian) !important;
        }
        
        header.gb_Ua {
            display: none !important;
        }
        `
    },
    {
        URL: "https://forum.obsidian.md/",
        name: "Obsidian Fourm",
        icon: "newspaper",
        css: `

        `,
        
    },
    {
        URL: "https://calendar.google.com/calendar",
        name: "Google Calendar",
        icon: "calendar",
        css: `
        `,
    },
    {
        URL: "https://fosstodon.org/explore",
        name: "Mastodon",
        icon: `<svg width="74" height="79" viewBox="0 0 74 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-20 max-w-full"><path d="M73.7014 17.9592C72.5616 9.62034 65.1774 3.04876 56.424 1.77536C54.9472 1.56019 49.3517 0.7771 36.3901 0.7771H36.2933C23.3281 0.7771 20.5465 1.56019 19.0697 1.77536C10.56 3.01348 2.78877 8.91838 0.903306 17.356C-0.00357857 21.5113 -0.100361 26.1181 0.068112 30.3439C0.308275 36.404 0.354874 42.4535 0.91406 48.489C1.30064 52.498 1.97502 56.4751 2.93215 60.3905C4.72441 67.6217 11.9795 73.6395 19.0876 76.0945C26.6979 78.6548 34.8821 79.0799 42.724 77.3221C43.5866 77.1245 44.4398 76.8953 45.2833 76.6342C47.1867 76.0381 49.4199 75.3714 51.0616 74.2003C51.0841 74.1839 51.1026 74.1627 51.1156 74.1382C51.1286 74.1138 51.1359 74.0868 51.1368 74.0592V68.2108C51.1364 68.185 51.1302 68.1596 51.1185 68.1365C51.1069 68.1134 51.0902 68.0932 51.0695 68.0773C51.0489 68.0614 51.0249 68.0503 50.9994 68.0447C50.9738 68.0391 50.9473 68.0392 50.9218 68.045C45.8976 69.226 40.7491 69.818 35.5836 69.8087C26.694 69.8087 24.3031 65.6569 23.6184 63.9285C23.0681 62.4347 22.7186 60.8764 22.5789 59.2934C22.5775 59.2669 22.5825 59.2403 22.5934 59.216C22.6043 59.1916 22.621 59.1702 22.6419 59.1533C22.6629 59.1365 22.6876 59.1248 22.714 59.1191C22.7404 59.1134 22.7678 59.1139 22.794 59.1206C27.7345 60.2936 32.799 60.8856 37.8813 60.8843C39.1036 60.8843 40.3223 60.8843 41.5447 60.8526C46.6562 60.7115 52.0437 60.454 57.0728 59.4874C57.1983 59.4628 57.3237 59.4416 57.4313 59.4098C65.3638 57.9107 72.9128 53.2051 73.6799 41.2895C73.7086 40.8204 73.7803 36.3758 73.7803 35.889C73.7839 34.2347 74.3216 24.1533 73.7014 17.9592ZM61.4925 47.6918H53.1514V27.5855C53.1514 23.3526 51.3591 21.1938 47.7136 21.1938C43.7061 21.1938 41.6988 23.7476 41.6988 28.7919V39.7974H33.4078V28.7919C33.4078 23.7476 31.3969 21.1938 27.3894 21.1938C23.7654 21.1938 21.9552 23.3526 21.9516 27.5855V47.6918H13.6176V26.9752C13.6176 22.7423 14.7157 19.3795 16.9118 16.8868C19.1772 14.4 22.1488 13.1231 25.8373 13.1231C30.1064 13.1231 33.3325 14.7386 35.4832 17.9662L37.5587 21.3949L39.6377 17.9662C41.7884 14.7386 45.0145 13.1231 49.2765 13.1231C52.9614 13.1231 55.9329 14.4 58.2055 16.8868C60.4017 19.3772 61.4997 22.74 61.4997 26.9752L61.4925 47.6918Z" fill="inherit"></path></svg>`,
        css: `
        
        `,
    },
    {
        URL: "https://twitter.com",
        name: "𝕏",
        icon: `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>`,
        aliases: ["X.com", "X"],
        css: `
        `
    },
    {
        URL: "https://www.notion.so/login",
        name: "Notion",
        icon: "codesandbox",
        css: `
        
        `
    }
]