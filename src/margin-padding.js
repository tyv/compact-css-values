import {fourPairedValues} from './utils'


export function margin(conf) {
  return {margin: fourPairedValues(conf, '0')}
}

export function padding(conf) {
  return {padding: fourPairedValues(conf, '0')}
}
