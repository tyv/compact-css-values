import {pick} from 'lodash'
import common from './common'

const allowedRules = [
  'border-width',
  'border-style',
  'border-color'
]

export default function border(conf) {
  return common('border', pick(conf, allowedRules))
}
