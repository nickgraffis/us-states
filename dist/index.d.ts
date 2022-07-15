import type { State, StateAbv, StateNumberCodes } from "./types";
export declare const stateNameToAbbreviation: (stateName: State) => string | null;
export declare const stateAbbreviationToName: (stateAbbreviation: StateAbv) => string | null;
export declare const stateNameToNumberCode: (stateName: State) => string | null;
export declare const stateNumberCodeToName: (stateNumberCode: StateNumberCodes) => string | null;
export declare const stateAbbreviationToNumberCode: (stateAbbreviation: StateAbv) => string | null;
export declare const stateNumberCodeToAbbreviation: (stateNumberCode: StateNumberCodes) => string | null;
export declare const autocomplete: (query: string) => {
    name: string;
    code: string;
}[];
export declare const state: (query: StateAbv | State | StateNumberCodes) => {
    name: string | undefined;
    abv: string | null | undefined;
    numberCode: string | undefined;
};
