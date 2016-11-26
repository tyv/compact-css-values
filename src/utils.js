import {mapKeys, camelCase} from 'lodash'

export function camelCaseKeys(obj) {
    return mapKeys(obj, (key, value) => camelCase(value))
}

export function joinDimensionPairs(values) {
    let [a, b, c, d] = values
    if (a === c) c = ''
    if (b === d) d = ''
    if (c === '' && d === '' && a === b) b = ''

    return [a, b, c, d].filter(value => value !== '').join(' ')
}