import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Section = ({ section: { heading, image, text } }) => {

  const renderTexts = () => {
    return text.map((txt, i) => {
      return (
        <Fragment key={i}>
          <p className="section-text">{txt}</p>
          <br />
        </Fragment>
      )
    })
  }

  return (
    <section className="section">
      <h3 className="section-heading">{heading}</h3>
      {renderTexts()}
    </section>
  )
}

Section.propTypes = {
  section: PropTypes.object
}
