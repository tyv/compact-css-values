import {pick} from 'lodash'
import {fourPairedValues} from './utils'

const [
  allowedPaddingRules,
  allowedMarginRules
] = ['padding', 'margin']
  .map(rule => [
    `${rule}-top`,
    `${rule}-right`,
    `${rule}-bottom`,
    `${rule}-left`
  ])

export function padding(conf) {
  return {
    padding: fourPairedValues(pick(conf, allowedPaddingRules))
  }
}

export function margin(conf) {
  return {
    margin: fourPairedValues(pick(conf, allowedMarginRules))
  }
}
