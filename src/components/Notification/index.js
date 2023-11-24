// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="main-notification">
      <div className="notification-section">{children}</div>
      <GrFormClose className="close-icon-image" />
    </div>
  )
}

export default Notification
