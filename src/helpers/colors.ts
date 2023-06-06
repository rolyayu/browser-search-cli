const RESET = "\u001B[0m";
const RED = "\u001B[31m";
const GREEN = "\u001B[32m";
const BLUE = "\u001B[34m";

export const red = (str: string): string => {
    return RED + str + RESET;
}


export const green = (str: string): string => {
    return GREEN + str + RESET;
}

export const blue = (str: string): string => {
    return BLUE + str + RESET;
}
