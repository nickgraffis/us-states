import { abbreviations, numberCodes, states } from "./data";
import type { State, StateAbv, StateNumberCodes } from "./types";

export const stateNameToAbbreviation = (stateName: State) => {
  const state = states[stateName];

  if (state && 'abv' in state) {
    return state.abv;
  }
  return null;
}

export const stateAbbreviationToName = (stateAbbreviation: StateAbv) => {
  const state = abbreviations[stateAbbreviation];

  if (state && 'name' in state) {
    return state.name;
  }

  return null;
}

export const stateNameToNumberCode = (stateName: State) => {
  const state = states[stateName];

  if (state && 'code' in state) {
    return state.code;
  }

  return null;
}

export const stateNumberCodeToName = (stateNumberCode: StateNumberCodes) => {
  const state = numberCodes[stateNumberCode];

  if (state && 'name' in state) {
    return state.name;
  }

  return null;
}

export const stateAbbreviationToNumberCode = (stateAbbreviation: StateAbv) => {
  const state = abbreviations[stateAbbreviation];

  if (state && 'code' in state) {
    return state.code;
  }

  return null;
}

export const stateNumberCodeToAbbreviation = (stateNumberCode: StateNumberCodes) => {
  const state = numberCodes[stateNumberCode];

  if (state && 'abv' in state) {
    return state.abv;
  }

  return null;
}

export const autocomplete = (query: string) => {
  const queryLower = query.toLowerCase();
  const results = [];

  for (const stateName in states) {
    const state = states[stateName as State];
    let abv;

    if ('abv' in state) {
      abv = state.abv;
    }

    if (state.name.toLowerCase().includes(queryLower) || abv?.toLowerCase().includes(queryLower)) {
      results.push(state);
    }
  }

  return results;
}

export const state = (query: StateAbv | State | StateNumberCodes) => {
  let found: {
    name: string;
    abv?: string;
    code: string;
  } | null;
  if (query.length === 2 && query in abbreviations && isNaN(Number(query))) {
    found = abbreviations[query as StateAbv];
  } else if (query.length === 2 && query in numberCodes && !isNaN(Number(query))) {
    found = numberCodes[query as StateNumberCodes];
  } else if (query in states) {
    found = states[query as State];
  } else {
    found = null;
  }

  return {
    name: found?.name,
    abv: found && 'abv' in found ? found?.abv : null,
    numberCode: found?.code,
  }
}