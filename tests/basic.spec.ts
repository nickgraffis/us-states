import { expect, test } from 'vitest'
import { 
  state,
  stateNameToAbbreviation,
  stateAbbreviationToName,
  stateNameToNumberCode,
  stateNumberCodeToName,
  stateAbbreviationToNumberCode,
  stateNumberCodeToAbbreviation,
  autocomplete
} from '../src/index'

test('autocomplete', () => {
  let mar = autocomplete('mar')
  expect(mar).toEqual([
    { name: 'Maryland', abv: 'MD', code: '24' },
    { name: 'Commonwealth of the Northern Mariana Islands', code: '69' }
  ])

  let cal = autocomplete('cal')
  expect(cal).toEqual([
    { name: 'California', abv: 'CA', code: '06' },
  ])
})  

test('state', () => {
  let maryland = state('Maryland')
  expect(maryland).toEqual({ name: 'Maryland', abv: 'MD', code: '24' })
})

test('stateNameToAbbreviation', () => {
  let mar = stateNameToAbbreviation('Maryland')
  expect(mar).toEqual('MD')
})

test('stateAbbreviationToName', () => {
  let mar = stateAbbreviationToName('MD')
  expect(mar).toEqual('Maryland')
})

test('stateNameToNumberCode', () => {
  let mar = stateNameToNumberCode('Maryland')
  expect(mar).toEqual('24')
})

test('stateNumberCodeToName', () => {
  let mar = stateNumberCodeToName('24')
  expect(mar).toEqual('Maryland')
})

test('stateAbbreviationToNumberCode', () => {
  let mar = stateAbbreviationToNumberCode('MD')
  expect(mar).toEqual('24')
})

test('stateNumberCodeToAbbreviation', () => {
  let mar = stateNumberCodeToAbbreviation('24')
  expect(mar).toEqual('MD')
})