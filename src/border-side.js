import {pick} from 'lodash'
import common from './common'

const [
  allowedTopRules,
  allowedRightRules,
  allowedBottomRules,
  allowedLeftRules
] = ['top', 'right', 'bottom', 'left']
  .map(side => [
    `border-${side}-width`,
    `border-${side}-style`,
    `border-${side}-color`
  ])

export function borderTop(conf) {
  return common('border-top', pick(conf, allowedTopRules))
}

export function borderRight(conf) {
  return common('border-right', pick(conf, allowedRightRules))
}

export function borderBottom(conf) {
  return common('border-bottom', pick(conf, allowedBottomRules))
}

export function borderLeft(conf) {
  return common('border-left', pick(conf, allowedLeftRules))
}
