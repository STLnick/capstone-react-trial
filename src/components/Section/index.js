import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Section = ({ section: { heading, images, list, text, title } }) => {

  const currentSection = title

  console.log('Inside Section:')
  console.log(currentSection)

  // TODO: Need a switch or check to render list and whole section appropriately

  const renderList = () => {
    return list.map((li, i) => {
      return (
        // TODO: remove hard coded li class and apply based on currentSection
        <li className='feature-list-item flex' key={i}>
          <img
            className={li.image.className}
            src={li.image.src}
            alt={li.image.alt}
          />
          {li.text}
        </li>
      )
    })
  }

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
    <section className={`section ${title ? 'section--' + title : null}`}>
      {heading ? <h3 className="section-heading">{heading}</h3> : null}
      {list ? <ul className="list section-text">{renderList()}</ul> : null}
      {text ? renderTexts() : null}
      {images ? <img alt={images.alt} src={images.src} /> : null}
    </section>
  )
}

Section.propTypes = {
  section: PropTypes.object
}
