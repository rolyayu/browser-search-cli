import { readFileSync, writeFileSync, existsSync } from 'fs';
import { Config } from '../interfaces/index.js';
import { Browser, SearchPlatform } from '../interfaces/index.js';
import { getPrettyBrowser, getPrettyPlatform, parseBrowser, parseSearchPlatform } from '../helpers/index.js';
const CONFIG_PATH = 'config.json';

const getConfig = (): Config => {
    if (!existsSync(CONFIG_PATH)) {
        const defaultConfig = buildDefaultConfig();
        writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig))
        return defaultConfig;
    }
    else {
        const rawConfig = readFileSync(CONFIG_PATH).toString();
        const config = JSON.parse(rawConfig) satisfies Config;
        return config;
    }
}

const saveConfig = (config: Config): void => {
    writeFileSync(CONFIG_PATH, JSON.stringify(config));
    return;
}

const buildDefaultConfig = (): Config => {
    return {
        browser: Browser.EDGE,
        searchPlatform: SearchPlatform.YANDEX
    }
}

export const saveOrGetDefaultConfig = (browser: string | undefined, platform: string | undefined): Config => {
    const config: Config = getConfig();
    let isEdited: boolean = false;
    if (platform) {
        isEdited = true;
        config.searchPlatform = parseSearchPlatform(platform);
        const prettyPlatform = getPrettyPlatform(config.searchPlatform);
        console.log(`Changed default search-platform: ${prettyPlatform}`);
    }
    if (browser) {
        isEdited = true;
        config.browser = parseBrowser(browser);
        const prettyBrowser = getPrettyBrowser(config.browser);
        console.log(`Changed default browser: ${prettyBrowser}`);
    }
    if (isEdited) {
        saveConfig(config);
        console.log('Default settings were successfully saved!');
        saveConfig(config);
    }
    return config;
}