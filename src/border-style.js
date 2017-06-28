import {pick} from 'lodash'
import {fourPairedValues} from './utils'

const allowedRules = [
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style'
]

export default function borderStyle(conf) {
  return {
    'border-style': fourPairedValues(
      pick(conf, allowedRules),
      'none'
    )
  }
}
