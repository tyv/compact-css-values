import {pick} from 'lodash'
import {fourPairedValues} from './utils'

const allowedRules = [
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color'
]

export default function borderColor(conf) {
  return {
    'border-color': fourPairedValues(
      pick(conf, allowedRules),
      'currentcolor'
    )
  }
}
