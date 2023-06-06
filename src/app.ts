#!/usr/bin/env node
import { parseSearchPlatform } from './helpers/index.js';
import { Browser, SearchPlatform } from './interfaces/index.js';
import { saveOrGetDefaultConfig, search } from './services/index.js';
import { getArgs } from './helpers/args.helper.js';
import * as colors from './helpers/colors.js';


const launchEdge = () => {
    const { all, config_browser, config_search_platform, platforms, text } = getArgs();
    try {
        const config = saveOrGetDefaultConfig(config_browser, config_search_platform);
        if (text == undefined) {
            return;
        }
        let searchPlatforms: SearchPlatform[];
        const browser: Browser = config.browser;
        if (all) {
            searchPlatforms = [SearchPlatform.BING, SearchPlatform.GOOGLE,
            SearchPlatform.STACKOVERFLOW, SearchPlatform.YANDEX,
            SearchPlatform.YOUTUBE];
        } else if (platforms) {
            searchPlatforms = platforms.map(rawPlatform => parseSearchPlatform(rawPlatform));
        } else {
            searchPlatforms = [config.searchPlatform];
        }
        const searchTheme = text.join(' ');

        search(browser, searchPlatforms, searchTheme);
    } catch (e) {
        if (e instanceof Error) {
            console.log(colors.red(e.message))
        }
    }
}

launchEdge();
