import './index.css'
import {formatDistanceToNow} from 'date-fns'

const HomeVideoItem = props => {
  const {videoItems} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = videoItems
  const {name, profileImageUrl} = channel

  const publishedDate = new Date(publishedAt)
  const currentDate = new Date()
  const years = currentDate.getFullYear() - publishedDate.getFullYear()

  return (
    <li>
      <img src={thumbnailUrl} alt="" className="thumbnail-styling" />
      <div className="profile-container">
        <div>
          <img src={profileImageUrl} alt="" className="profile-image" />
        </div>
        <div className="profile-all-text-container">
          <p className="profile-title">{title}</p>
          <div className="profile-text-container">
            <p className="profile-text">{name}</p>
            <p className="profile-text">.</p>
            <p className="profile-text">{viewCount} views</p>
            <p className="profile-text">.</p>
            <p className="profile-text">{years} years ago</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HomeVideoItem
