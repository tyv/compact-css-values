import {mapValues, some} from 'lodash'
import {camelCaseKeys, joinDimensionPairs} from './utils'

export default function borderRadius(conf) {
  const props = mapValues(
      camelCaseKeys(conf),
      fullValue => fullValue.split('/').map(value => value.trim())
  )
  const {
      borderTopLeftRadius = [0],
      borderTopRightRadius = [0],
      borderBottomRightRadius = [0],
      borderBottomLeftRadius = [0]
  } = props

  const hasPercentage = some(props, value => value[1])
  const values = [
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius
  ]
  const length = joinDimensionPairs(values.map(value => value[0]))
  const percentage = hasPercentage && joinDimensionPairs(values.map(value => value[1] || value[0]))
  return {
    'border-radius': length + (percentage ? ` / ${percentage}` : '')
  }
}
