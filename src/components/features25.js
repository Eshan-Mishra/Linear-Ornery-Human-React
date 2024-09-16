import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text1 thq-heading-2">
                      Easy Registration Process
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text3 thq-body-small">
                      Registering as a vendor in our flea market website is
                      quick and hassle-free. Simply fill in the required details
                      and submit!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text6 thq-heading-2">
                      Customizable Shop Profile
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4 thq-body-small">
                      Personalize your shop profile with your shop name, size,
                      business category, and more. Stand out among other
                      vendors!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                      Secure Contact Information
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Rest assured that your contact information is safe with
                      us. We prioritize the security and confidentiality of your
                      details.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Image symbolizing secure contact information',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1533648291743-ff1e039ddafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Image showing customizable shop profile',
  feature3Description: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature1ImgAlt: 'Image depicting easy registration process',
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1657208190327-b0c798d937e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjI2MDQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
}

Features25.propTypes = {
  feature1Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features25
