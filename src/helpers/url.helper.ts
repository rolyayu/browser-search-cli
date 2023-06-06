import { SearchPlatform } from "../interfaces/index.js";

const PREFIX = 'https://';

export const buildSearchUrl = (platform: SearchPlatform, search: string): URL => {
    const isEmptySearch: boolean = search ? false : true;
    const searchUrl = new URL(`${PREFIX}${getBaseUrl(platform, isEmptySearch)}`);
    if (isEmptySearch) {
        return searchUrl;
    }
    searchUrl.searchParams.set(getSearchQueryParamName(platform), search);
    return searchUrl;
}

const getBaseUrl = (platform: SearchPlatform, isEmptySearch: boolean): string => {
    switch (platform) {
        case SearchPlatform.YANDEX:
            return isEmptySearch ? 'yandex.ru' : 'yandex.ru/search/';
        case SearchPlatform.GOOGLE:
            return isEmptySearch ? 'google.com' : 'google.com/search';
        case SearchPlatform.BING:
            return isEmptySearch ? 'bing.com' : 'bing.com/search';
        case SearchPlatform.STACKOVERFLOW:
            return isEmptySearch ? 'stackoverflow.com' : 'stackoverflow.com/search';
        case SearchPlatform.YOUTUBE:
            return isEmptySearch ? 'youtube.com' : 'youtube.com/search'
        default:
            const unknownPlatform: never = platform;
            throw new Error(`Неизвестный вид платформы ${unknownPlatform}`);
    }
}

const getSearchQueryParamName = (platform: SearchPlatform): string => {
    switch (platform) {
        case SearchPlatform.YANDEX:
            return 'text'
        case SearchPlatform.GOOGLE:
        case SearchPlatform.BING:
        case SearchPlatform.STACKOVERFLOW:
        case SearchPlatform.YOUTUBE:
            return 'q';
        default:
            const unknownPlatform: never = platform;
            throw new Error(`Неизвестный вид платформы ${unknownPlatform}`);
    }
}