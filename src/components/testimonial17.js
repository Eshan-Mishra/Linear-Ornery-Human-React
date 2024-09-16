import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text27 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text26 thq-body-small">
                  I have been a vendor at this flea market for years and it has
                  always been a great experience. The registration process is
                  simple and the support team is very helpful.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31 thq-body-small">
                            Owner of JD&apos;s Vintage Finds
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        5 stars
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text35 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34 thq-body-small">
                            Founder of Smith&apos;s Antiques
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text32 thq-body-small">
                        I highly recommend registering as a vendor on this flea
                        market website. It has helped boost my business and
                        reach a wider audience.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36 thq-body-small">
                            Owner of MJ&apos;s Collectibles
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text37 thq-body-small">
                        Great platform for vendors looking to showcase their
                        products. The registration process is quick and easy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text28 thq-body-large">
                            Sarah Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            CEO of Lee&apos;s Treasures
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text33 thq-body-small">
                        I have had a fantastic experience as a vendor on this
                        flea market website. The team is responsive and the
                        website is user-friendly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Name: undefined,
  author4Position: undefined,
  content1: undefined,
  heading1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1449445576221-bca7f735d4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1536164261511-3a17e671d380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1509868918748-a554ad25f858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author3Alt: 'Image of Michael Johnson',
  review2: undefined,
  review4: undefined,
  author2Position: undefined,
  author2Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  author3Position: undefined,
  review3: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1636041241614-34cca8be1e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
}

Testimonial17.propTypes = {
  author1Name: PropTypes.element,
  author4Position: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  author2Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  review2: PropTypes.element,
  review4: PropTypes.element,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Position: PropTypes.element,
  review3: PropTypes.element,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial17
