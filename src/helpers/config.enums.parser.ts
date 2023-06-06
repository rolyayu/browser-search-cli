import { Browser, SearchPlatform } from './../interfaces/index.js';

export const parseBrowser = (rawBrowser: string): Browser => {
    if (rawBrowser.toLocaleLowerCase().includes('chrome')) {
        return Browser.CHROME;
    }
    if (rawBrowser.toLocaleLowerCase().includes('edge')) {
        return Browser.EDGE;
    }
    if (rawBrowser.toLocaleLowerCase().includes('firefox')) {
        return Browser.FIREFOX;
    }
    throw new Error('Undefined browser. Check your input carefully.')
}

export const parseSearchPlatform = (rawPlatform: string): SearchPlatform => {
    if (rawPlatform.toLocaleLowerCase().includes('stack')) {
        return SearchPlatform.STACKOVERFLOW;
    }
    if (rawPlatform.toLocaleLowerCase().includes('google')) {
        return SearchPlatform.GOOGLE;
    }
    if (rawPlatform.toLocaleLowerCase().includes('yandex')) {
        return SearchPlatform.YANDEX;
    }
    if (rawPlatform.toLocaleLowerCase().includes('youtube')) {
        return SearchPlatform.YOUTUBE;
    }
    if (rawPlatform.toLocaleLowerCase().includes('bing')) {
        return SearchPlatform.BING;
    }
    throw new Error('Undefined platform. Check your input carefully.');
}

export const getPrettyPlatform = (platform: SearchPlatform): string => {
    switch (platform) {
        case SearchPlatform.BING:
            return 'Bing';
        case SearchPlatform.GOOGLE:
            return 'Google';
        case SearchPlatform.STACKOVERFLOW:
            return 'StackOverflow';
        case SearchPlatform.YANDEX:
            return 'Yandex';
        case SearchPlatform.YOUTUBE:
            return 'YouTube';
        default:
            const unknownPlatform: never = platform;
            throw new Error(`Unknown platform: ${unknownPlatform}`);
    }
}

export const getPrettyBrowser = (browser: Browser): string => {
    switch (browser) {
        case Browser.CHROME:
            return 'Google Chrome';
        case Browser.EDGE:
            return 'Microsoft Edge';
        case Browser.FIREFOX:
            return 'Firefox';
        default:
            const unknownBrowser: never = browser;
            throw new Error(`Unknown browser: ${unknownBrowser}`);
    }
}

export const browserToExecutable = (browser: Browser): string[] => {
    switch (browser) {
        case Browser.CHROME:
            return ['google-chrome', 'google-chrome-stable', 'chromium']
        case Browser.EDGE:
            return ['microsoft-edge', 'microsoft-edge-dev']
        case Browser.FIREFOX:
            return ['firefox']
        default:
            const unknownBrowser: never = browser;
            throw new Error(`Unknown browser: ${unknownBrowser}`);
    }
}