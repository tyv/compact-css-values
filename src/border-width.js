import {fourPairedValues} from './utils'

export default function borderWidth(conf) {
  return {'border-width': fourPairedValues(conf, 'medium')}
}
