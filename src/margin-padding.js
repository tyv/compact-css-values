import {mapKeys} from 'lodash'
import {joinDimensionPairs} from './utils'

export function fourPairedValues(conf) {
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0
  } = mapKeys(conf, (value, key) => key.split('-').pop())
  return joinDimensionPairs([top, right, bottom, left])
}

export function margin(conf) {
  return {margin: fourPairedValues(conf)}
}

export function padding(conf) {
  return {padding: fourPairedValues(conf)}
}
