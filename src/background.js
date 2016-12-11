import {uniq} from 'lodash'
import {clearWhiteSpaces} from './utils'

export default function background(conf) {
  const {
    'background-clip': clip = '',
    'background-origin': origin = '',
    'background-position': position = '',
    'background-size': size = '',
    'background-image': image = '',
    'background-repeat': repeat = '',
    'background-attachment': attachment = '',
    'background-color': color = ''
  } = conf

  let originAndClip = ''
  if (clip || origin) {
    originAndClip = uniq(
      [
        origin || 'padding-box',
        clip || 'border-box'
      ]
    ).join(' ')
  }

  let positionAndSize = ''
  if (size) {
    positionAndSize = uniq(
      [
        position || '0% 0%',
        `/ ${size}`
      ]
    ).join(' ')
  }

  return {
    background: clearWhiteSpaces(
      `${color} ${image} ${positionAndSize} ${originAndClip} ${attachment} ${repeat}`
    )
  }
}
