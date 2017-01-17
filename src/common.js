import {clearWhiteSpaces} from './utils'

export default function common(name, conf) {
  return {
    [name]: clearWhiteSpaces(
        Object.keys(conf).reduce((result, key) => `${result} ${conf[key]}`, '')
      )
  }
}
