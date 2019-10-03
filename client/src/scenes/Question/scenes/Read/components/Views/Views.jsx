import React from 'react'
import PropTypes from 'prop-types'

import { useIntl } from 'services'

import './Views.css'

const Views = ({ value }) => {
  const intl = useIntl(Views)
  let formattedValue = value || 0
  if (value > 1000) {
    const locale = window.navigator.language
    const formatter = new Intl.NumberFormat(locale, { maximumSignificantDigits: 2 })
    formattedValue = `${formatter.format(value / 1000)}k`
  }

  return (
    <span className="views">
      {formattedValue} {formattedValue > 1 ? intl('views') : intl('view')}
    </span>
  )
}

Views.propTypes = {
  value: PropTypes.number
}

Views.translations = {
  en: {
    view: 'view',
    views: 'views'
  },
  fr: {
    view: 'vue',
    views: 'vues'
  }
}

export default Views
