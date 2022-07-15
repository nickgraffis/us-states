import { states, statesWithNumberCode } from './data.mjs'
import fs from 'fs'

let allstates = Object.keys(statesWithNumberCode)
let statesData = {}
let abbreviationsData = {}
let codes = {}
for (let i = 0; i < allstates.length; i++) {
  let state = allstates[i]
  let stateCode = statesWithNumberCode[state]
  console.log(`${state} has code ${stateCode}`)
  statesData[state] = {
    name: state,
    code: stateCode,
    abv: states[state]
  }

  abbreviationsData[states[state]] = {
    name: state,
    code: stateCode,
    abv: states[state]
  }

  codes[stateCode] = {
    name: state,
    code: stateCode,
    abv: states[state]
  }
}

fs.writeFileSync('src/data.ts', `
export const states = ${JSON.stringify(statesData, null, 2)}

export const abbreviations = ${JSON.stringify(abbreviationsData, null, 2)}

export const numberCodes = ${JSON.stringify(codes, null, 2)}

export type State = ${allstates.map(state => `'${state}'`).join(' | ')}

export type StateAbv = ${allstates.map(state => `'${states[state]}'`).join(' | ')}

export type StateNumberCodes = ${allstates.map(state => `'${statesWithNumberCode[state]}'`).join(' | ')}
`)