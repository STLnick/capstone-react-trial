import React, { Fragment } from 'react'

import { Hero, Section } from '../../components'

export const Home = () => {

  const sections = [
    {
      heading: 'Our Goal',
      images: null,
      list: null,
      text: [
        `Here at Jam Cafe we don't dream of being a rockstar. We dream of helping musicians
          connect to try and be rockstars or just jam buddies.`,
        `We get it`,
        `There's no better feeling than playing music with others.`
      ],
      title: null
    },
    {
      heading: 'How We Can Help',
      images: null,
      list: [
        {
          image: {
            alt: '',
            className: 'feature-list-item--marker',
            src: 'img/icons/electric-guitar.svg'
          },
          text: 'Search for other Musicians'
        },
        {
          image: {
            alt: '',
            className: 'feature-list-item--marker',
            src: 'img/icons/note_01.svg'
          },
          text: 'See availability to jam'
        },
        {
          image: {
            alt: '',
            className: 'feature-list-item--marker',
            src: 'img/icons/reel-to-reel-tape-recorder.svg'
          },
          text: 'Post open jam events'
        },
        {
          image: {
            alt: '',
            className: 'feature-list-item--marker',
            src: 'img/icons/vinyl-record.svg'
          },
          text: 'Post band openings'
        },
        {
          image: {
            alt: '',
            className: 'feature-list-item--marker',
            src: 'img/icons/audio-cable.svg'
          },
          text: 'Message musicians to connect'
        }
      ],
      listClass: '',
      listItemClass: 'feature-list-item flex',
      text: null,
      title: 'features'
    },
    {
      heading: 'How To Start Jamming',
      images: null,
      // Need to get images to include for each li
      // showing use of app
      list: [
        {
          image: {
            alt: '',
            className: 'use-img',
            src: 'img/icons/add-circle-sharp.svg'
          },
          text: 'Search for other Musicians'
        },
        {
          image: {
            alt: '',
            className: 'use-img',
            src: 'img/icons/add-circle-sharp.svg'
          },
          text: 'Check out profiles to see who fits'
        },
        {
          image: {
            alt: '',
            className: 'use-img',
            src: 'img/icons/add-circle-sharp.svg'
          },
          text: 'Send a message to connect'
        }
      ],
      listClass: 'use-list',
      listItemClass: '',
      text: null,
      title: 'use'
    },
    {
      button: <div className="flex flex--column flex--justify-center flex--align-center"><Link className="cta-btn bottom-cta-btn" to='/register'>Join to Jam</Link></div>,
      heading: 'Let Us Help You',
      images: null,
      list: null,
      listClass: null,
      listItemClass: null,
      text: [
        `It's a struggle as a working musician, no doubt. We can help make
        one part of that easier by connecting you with like-minded
        musicians for your band.`,
        `It's tough if you don't want to be in a band but just play some
        music too! Especially if you and ALL of your buddies play one
        instrument... yeesh. We can open the door to others who just
        want to play for fun.`,
        `Don't play alone!`
      ],
      title: 'help'
    }
  ]

  const reviews = [
    {
      className: 'testimonial-1',
      image: {
        src: "img/testimonial-1.jpg",
        className: "testimonial-1-img",
        alt: ""
      },
      quote: `I love using Jam Cafe. It's a place I know I can come to when
        I want to just jam or if I end up wanting to join a band!`,
      user: 'User 1'
    },
    {
      className: 'testimonial-2',
      image: {
        src: "img/testimonial-2.jpeg",
        className: "testimonial-2-img",
        alt: ""
      },
      quote: `Jam Cafe made it so easy for me to find new people to play with.
        All I did was search for a few local people and we got together
        and had an awesome time!`,
      user: 'User 1'
    },
    {
      className: 'testimonial-3',
      image: {
        src: "img/testimonial-3.jpg",
        className: "testimonial-3-img",
        alt: ""
      },
      quote: `I love playing music and that's why I'm in a band. Jam Cafe
        made it easy for me to find a quick replacement for my band
        when a member parted ways. Love it!`,
      user: 'User 1'
    }
  ]

  const renderSections = () => {
    return sections.map((sect, i) => <Section key={i} section={sect} />)
  }

  return (
    <Fragment>
      <Hero />

      {/* {renderSections()} */}

      {/* <Section section={sections[0]} /> */}

      <Section section={sections[0]} />

      {/* <section className="section">
        <h3 className="section-heading">Our Goal</h3>
        <p className="section-text">
          Here at Jam Cafe we don&apos;t dream of being a rockstar. We dream of helping musicians
          connect to try and be rockstars or just jam buddies.
          <br /><strong>We get it.</strong><br />
            There&apos;s no better feeling than playing music with others.
        </p>
      </section> */}

      <div>
        <img
          className="partition-img"
          src="img/instruments.jpg"
          alt="People's hands holding up instruments"
        />
      </div>

      <Section section={sections[1]} />

      {/* <section className="section section--features">
        <h3 className="section-heading">How We Can Help</h3>
        <ul className="list section-text">
          <li className="feature-list-item flex">
            <img
              src="img/icons/electric-guitar.svg"
              alt=""
              className="feature-list-item--marker"
            />
            Search for other Musicians
          </li>
          <li className="feature-list-item flex">
            <img
              src="img/icons/note_01.svg"
              alt=""
              className="feature-list-item--marker"
            />
            See availability to jam
          </li>
          <li className="feature-list-item flex">
            <img
              src="img/icons/reel-to-reel-tape-recorder.svg"
              alt=""
              className="feature-list-item--marker"
            />
            Post open jam events
          </li>
          <li className="feature-list-item flex">
            <img
              src="img/icons/vinyl-record.svg"
              alt=""
              className="feature-list-item--marker"
            />
            Post band openings
          </li>
          <li className="feature-list-item flex">
            <img
              src="img/icons/audio-cable.svg"
              alt=""
              className="feature-list-item--marker"
            />
            Message musicians to connect
          </li>
        </ul>
      </section> */}

      <Section section={sections[2]} />

      {/* TODO: Get actual images to display the use of app */}
      {/* <section className="section section--use">
        <h3 className="section-heading">How to Start Jamming</h3>
        <ul className="list use-list section-text">
          <li>
            Search for musicians
            <p><strong>(Image here showing search)</strong></p>
          </li>
          <li>
            Check out profiles to see who fits
            <p><strong>(Image here showing user profile)</strong></p>
          </li>
          <li>
            Send a message to connect
            <p><strong>(Image here showing messaging)</strong></p>
          </li>
        </ul>
      </section> */}

      <section className="section section--testimonials">
        <h3 className="section-heading">Hear From Our Users</h3>
        <div className="testimonial testimonial-1">
          <img
            src="img/testimonial-1.jpg"
            className="testimonial-1-img"
            alt=""
          />
          <blockquote>
            <p>
              I love using Jam Cafe. It&apos;s a place I know I can come to when
              I want to just jam or if I end up wanting to join a band!
            </p>
            <footer>User 1</footer>
          </blockquote>
        </div>
        <div className="testimonial testimonial-2">
          <img
            src="img/testimonial-2.jpeg"
            className="testimonial-2-img"
            alt=""
          />
          <blockquote>
            <p>
              Jam Cafe made it so easy for me to find new people to play with.
              All I did was search for a few local people and we got together
              and had an awesome time!
            </p>
            <footer>User 2</footer>
          </blockquote>
        </div>
        <div className="testimonial testimonial-3">
          <img
            src="img/testimonial-3.jpg"
            className="testimonial-3-img"
            alt=""
          />
          <blockquote>
            <p>
              I love playing music and that&apos;s why I&apos;m in a band. Jam Cafe
              made it easy for me to find a quick replacement for my band
              when a member parted ways. Love it!
            </p>
            <footer>User 3</footer>
          </blockquote>
        </div>
      </section> */}

      <Section section={sections[3]} />

      {/* <section className="section section--help">
        <h3 className="section-heading">Let Us Help You</h3>
        <p className="section-text">
          It&apos;s a struggle as a working musician, no doubt. We can help make
          one part of that easier by connecting you with like-minded
          musicians for your band.
        </p>
        <br />
        <p className="section-text">
          It&apos;s tough if you don&apos;t want to be in a band but just play some
          music too! Especially if you and ALL of your buddies play one
          instrument... yeesh. We can open the door to others who just
          want to play for fun.
        </p>
        <br />
        <div className="flex flex--column flex--justify-center flex--align-center">
          <p className="section-text">
            <strong>Don&apos;t play alone!</strong>
          </p>
          <a href="register.html" className="cta-btn bottom-cta-btn">Join to Jam</a>
        </div>
      </section> */}
    </Fragment>
  )
}
