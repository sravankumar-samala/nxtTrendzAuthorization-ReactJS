// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navigation">
    <div className="app-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="app-logo"
      />
      <Link to="/login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav logout"
          className="nav-logout"
        />
      </Link>
    </div>
    <ul className="navigation-list">
      <Link to="/" className="link-route">
        <li className="link-item">Home</li>
      </Link>
      <Link to="/products" className="link-route">
        <li className="link-item">Products</li>
      </Link>
      <Link to="/cart" className="link-route">
        <li className="link-item">Cart</li>
      </Link>
      <Link to="/login">
        <button type="button">Logout</button>
      </Link>
    </ul>
    <div className="nav-items">
      <Link to="/" className="link-route">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav home"
        />
      </Link>
      <Link to="/products" className="link-route">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </Link>
      <Link to="/cart" className="link-route">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
          alt="nav cart"
        />
      </Link>
    </div>
  </nav>
)

export default Header
