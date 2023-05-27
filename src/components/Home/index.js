// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-page-container">
        <div className="home-first-container">
          <h1>Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
          <p>
            Fashion is part of the daily air and start working on some amazing
            projects! You can use the cursor CSS property to specify the mouse
            cursor to be displayed when pointing over an element
          </p>
          <button type="button" className="home-btn">
            Shop Now
          </button>
        </div>
        <div className="home-second-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    </>
  )
}

export default Home
