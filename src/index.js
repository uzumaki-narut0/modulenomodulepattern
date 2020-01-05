import React from 'react';
import classnames from 'classnames';

class AppBannerDownload extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: true
        }
    }

    handleAppbannerClose = () => {
        this.setState({
            isActive: false
        })
    }

    render() {
        const {
            isActive
        }= this.state;
        let bannerContainer = classnames('app-banner__container js-app-banner-container',{'inactive': !isActive});
        return(
            <div className={bannerContainer}>
                <span className="app-banner__close-btn js-app-banner-close-btn" onClick={this.handleAppbannerClose}>
                    <img className="app-banner_close-icon" src="https://imgd.aeplcdn.com/0x0//bw/static/app/logo/cross.svg" alt="Close Button" width="9" height="9" />
                </span>
                <a className="app-install-link" title="Try our App for better experience" href='https://play.google.com/store/apps/details?id=com.bikewale.app'>
                    <div className="app-banner__logo">
                        <img src="https://imgd.aeplcdn.com/0x0/bw/static/app/logo/app-logo.svg" alt="App -icon" height="35" width="35" />
                    </div>
                    <div className="app-banner__content">
                        <p>Try our App for better experience</p>
                        <div className="app-banner__ratings">
                            <span className="app-banner__ratefourhalf"></span>
                            <span className="app-banner__rate-numbers">4.6</span>
                        </div>
                    </div>
                    <span className="app-banner__install-btn btn btn-orange">DOWNLOAD NOW</span>
                </a>
            </div>
        );
    }
}

export default AppBannerDownload;
