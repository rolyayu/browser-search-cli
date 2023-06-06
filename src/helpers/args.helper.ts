import { Args } from "../interfaces/args.js";
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

export const getArgs = (): Args => {
    const args = yargs(hideBin(process.argv)).options({
        text: { array: true, demandOption: false, string: true },
        config_search_platform: { string: true, demandOption: false },
        config_browser: {
            string: true, demandOption: false,
            choices: ['edge', 'firefox', 'chrome'], alias: 'default-browser'
        },
        platforms: {
            array: true, demandOption: false,
            choices: ['stack', 'youtube', 'bing', 'yandex', 'google'], alias: 'default-platform'
        },
        all: { boolean: true, demandOption: false }
    }).parseSync();
    return {
        ...args
    }
}