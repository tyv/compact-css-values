import {mapKeys, camelCase, includes} from 'lodash'

export function camelCaseKeys(obj) {
  return mapKeys(obj, (key, value) => camelCase(value))
}

export function joinDimensionPairs(values) {
  if (
    values.length !== 4 ||
    values.some(value => typeof value !== 'string' || Boolean(value) === false)
  ) {
    throw new Error('`values.length` should have 4 items length and contains only non-empty strings')
  }

  const [a] = values
  let [, b, c, d] = values
  if (a === c) c = ''
  if (b === d) d = ''
  if (c === '' && d === '' && a === b) b = ''

  return [a, b, c, d].filter(value => value !== '').join(' ')
}

export function fourPairedValues(conf, defaultValue) {
  const {
    top = defaultValue,
    right = defaultValue,
    bottom = defaultValue,
    left = defaultValue
  } = Object.keys(conf).reduce((values, key) => {
    ['top', 'right', 'bottom', 'left'].some((side) => {
      if (includes(key, side)) {
        values = {...values, [side]: conf[key]}
        return true
      }
      return false
    })
    return values
  }, {})

  return joinDimensionPairs([top, right, bottom, left])
}

export function clearWhiteSpaces(str) {
  return str.replace(/ {2,}/g, ' ').trim()
}
