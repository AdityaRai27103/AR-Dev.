import React from 'react'

const HomeHeaderBar = () => {
  return (
    <div className="header-bar">
            <div className="custom-container">
                <div className="header-bar-body d-flex align-items-center justify-content-between">
                    <div className="left">
                        <select className="country-select" name="country" id="country">
                            <option value="en">EN</option>
                            <option value="uk">UK</option>
                            <option value="dz">DZ</option>
                        </select>
                    </div>
                    <div className="right">
                        <p>
                            Level up your business with <a href="/About" data-word="AR-DEV" id="dataWord">AR-DEV.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeHeaderBar
