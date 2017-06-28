import {pick} from 'lodash'
import common from './common'

const allowedRules = [
  'list-style-type',
  'list-style-position',
  'list-style-url'
]

export default function listStyle(conf) {
  return common('list-style', pick(conf, allowedRules))
}
