/**
 * options:
 * i: boolean
 * limit: number
 */
import Diacritic from './-formatters/diacritics'

const diacritic = Diacritic()

export default defineNuxtPlugin(() => {
  return {
    provide: {
      searchObjects: (items, keys, keyWord, options) => {
        const results = []
        const limit = options?.limit || 100

        if (typeof keys === 'string') {
          keys = [keys]
        }

        keys = keys.filter(key => !!key)

        const escapedKeyWord = escapeRegExp(keyWord)
        let keyWordRegex = keyWord ? new RegExp(escapedKeyWord.replace(/\s/g, '(.*)')) : ''

        if (options?.i) {
          keyWordRegex = keyWord ? new RegExp(escapedKeyWord.replace(/\s/g, '(.*)'), 'i') : ''
        }

        const foundItems = {}

        Array.from(items).forEach(item => {
          keys.forEach(key => {
            const unaccentedName = diacritic.clean(item[key])

            if (key in item && (item[key].search(keyWordRegex) !== -1 || unaccentedName.search(keyWordRegex) !== -1)) {
              if (results.length >= limit) {
                return false
              }

              const itemKey = JSON.stringify(item)
              if (!(itemKey in foundItems)) {
                foundItems[itemKey] = true
                results.push(item)
              }
            }
          })

          if (results.length >= limit) {
            return false
          }
        })

        return results
      }
    }
  }
})

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
