import { browserToExecutable, buildSearchUrl, getPrettyBrowser, getPrettyPlatform } from "../helpers/index.js";
import { Browser, SearchPlatform } from "../interfaces/config.js";
import * as open from 'open';
import * as colors from '../helpers/colors.js'


export const search = (browser: Browser, platforms: SearchPlatform[], searchTheme: string): void => {
    const prettyBrowser = getPrettyBrowser(browser);
    console.log(`Trying to search in ${prettyBrowser}...\n`)

    searchPl:
    for (const platform of platforms) {
        const searchUrl = buildSearchUrl(platform, searchTheme);
        const browserNames = browserToExecutable(browser);
        const prettyPlatform = getPrettyPlatform(platform);
        let isBrowserOpened = true;
        searchBr:
        for (const br of browserNames) {
            try {
                open.openApp(br, {
                    arguments: [
                        searchUrl.toString()
                    ],
                    newInstance: false
                })
                isBrowserOpened = true;
                console.log(`Searching for '${colors.green(searchTheme)}' in ${colors.blue(prettyPlatform)}`)
                break searchBr;
            } catch (e) {
                isBrowserOpened = false;
                continue searchBr;
            }
        }
        if (!isBrowserOpened) {
            console.log(`Seems like you don't have ${colors.red(prettyBrowser)}.`)
            break searchPl;
        }
    }
}