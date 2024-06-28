import './index.css'
<<<<<<< HEAD
import {Component} from 'react'
import {MdCancel} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProcess: 'INPROCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    isPremiumNotDisplay: false,
    inputSearch: '',
  }

  componentDidMount() {
    this.getTheDataOfVideos()
  }

  handleCancelButton = () => {
    this.setState({isPremiumNotDisplay: true})
  }

  handleInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  handleSearchBtnInput = () => {
    this.getTheDataOfVideos()
  }

  premiumPrepaidBanner = () => {
    const {isPremiumNotDisplay} = this.state
    return (
      <div>
        {isPremiumNotDisplay ? (
          ''
        ) : (
          <div className="premium-container">
            <div className="premium-card-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt=""
                className="premium-nxtwatch-logo"
              />
              <button
                type="button"
                className="premium-cancel-button"
                onClick={this.handleCancelButton}
              >
                .
                <MdCancel className="premium-cancel-icon" />
              </button>
            </div>
            <p className="premium-text-styling">
              Buy Nxt Watch Premium
              <br />
              prepaid plans with UPI
            </p>
            <button className="premium-button-getItNow">GET IT NOW</button>
          </div>
        )}
      </div>
    )
  }

  updateFetchedData = videoList => {
    const videoUpdateList = videoList.map(eachItem => ({
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))

    return videoUpdateList
  }

  getTheDataOfVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProcess})
    const {inputSearch} = this.state

    const JwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updateVideoList = this.updateFetchedData(data.videos)
      this.setState({
        videosList: updateVideoList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleHomeVideosList = () => {
    const {videosList} = this.state
    return (
      <ul className="unorder-list-type">
        {videosList.map(eachItem => (
          <HomeVideoItem key={eachItem.id} videoItems={eachItem} />
        ))}
      </ul>
    )
  }

  handleLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  handleFailureView = () => <h1>Failure</h1>

  handleApiStatusConstants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.handleHomeVideosList()
      case apiStatusConstants.failure:
        return this.handleFailureView()
      case apiStatusConstants.inProcess:
        return this.handleLoading()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <Header />
        {this.premiumPrepaidBanner()}
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={this.handleInputSearch}
          />
          <button
            className="search-icon-container"
            onClick={this.handleSearchBtnInput}
          >
            .
            <FaSearch className="search-icon" />
          </button>
        </div>

        {this.handleApiStatusConstants()}
      </div>
    )
  }
}
=======

const Home = () => <h1>dinesh</h1>
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457

export default Home
