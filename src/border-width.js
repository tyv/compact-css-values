import {pick} from 'lodash'
import {fourPairedValues} from './utils'

const allowedRules = [
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width'
]

export default function borderWidth(conf) {
  return {
    'border-width': fourPairedValues(
      pick(conf, allowedRules),
      'medium'
    )
  }
}
