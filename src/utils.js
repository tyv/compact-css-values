import {mapKeys, camelCase} from 'lodash'

export function camelCaseKeys(obj) {
  return mapKeys(obj, (key, value) => camelCase(value))
}

export function joinDimensionPairs(values) {
  const [a] = values
  let [, b, c, d] = values
  if (a === c) c = ''
  if (b === d) d = ''
  if (c === '' && d === '' && a === b) b = ''

  return [a, b, c, d].filter(value => value !== '').join(' ')
}

export function clearWhiteSpaces(str) {
  return str.replace(/ {2,}/g, ' ').trim()
}
