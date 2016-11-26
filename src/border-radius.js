import {camelCaseKeys, joinDimensionPairs} from './utils'
import {mapValues, some, uniq} from 'lodash'

export default function borderRadius(conf) {
    const props = mapValues(
        camelCaseKeys(conf),
        value => value.split('/').map(value => value.trim())
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

    const lengthsStr = joinDimensionPairs(values.map(value => value[0]))
    const percentagesStr = hasPercentage ? joinDimensionPairs(values.map(value => value[1] || value[0])) : false
    return {
        'border-radius': lengthsStr + (percentagesStr ? ` / ${percentagesStr}` : '')
    }
}