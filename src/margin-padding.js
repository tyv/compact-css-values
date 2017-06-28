import {fourPairedValues} from './utils'

export function margin(conf) {
  return {margin: fourPairedValues(conf)}
}

export function padding(conf) {
  return {padding: fourPairedValues(conf)}
}
