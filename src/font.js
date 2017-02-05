import {camelCaseKeys, clearWhiteSpaces} from './utils'

export default function font(conf) {
  const {
    fontStyle = '',
    fontVariant = '',
    fontWeight = '',
    fontStretch = '',
    fontSize = '100%',
    lineHeight = '',
    fontFamily
  } = camelCaseKeys(conf)
  if (!fontFamily) throw new Error('`font-family` property shouldn\'t be omitted')

  return {
    font: clearWhiteSpaces(
      `${fontStyle} ${fontVariant} ${fontWeight} ${fontStretch} ${fontSize}${lineHeight ? `/${lineHeight}` : ''} ${fontFamily}`
    )
  }
}
