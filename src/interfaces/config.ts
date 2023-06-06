
export enum Browser {
    CHROME = 'chrome',
    EDGE = 'edge',
    FIREFOX = 'firefox'
}

export enum SearchPlatform {
    YANDEX = 'yandex',
    GOOGLE = 'google',
    BING = 'bing',
    STACKOVERFLOW = 'stack',
    YOUTUBE = 'youtube'
}

export interface Config {
    browser: Browser,
    searchPlatform: SearchPlatform
}