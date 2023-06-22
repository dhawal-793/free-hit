import React, { useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import freehitlogo from '../assets/free-logo.png'
import { useLocation } from 'react-router-dom'
import { NavLink, useSearchParams } from "react-router-dom"
import "../styles/header.css"
import Sidebar from './Sidebar'

const Header = ({ filteredSuggestions }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const location = useLocation()
  const sideNavRef = useRef(null)

  const searchTerm = searchParams.get('q') || ''

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      document.getElementById("btn").checked = false;
    }
  }

  function setSearchTerm(val) {
    setSearchParams(prevParams => {
      if (val == "") {
        prevParams.delete('q')
      } else {
        prevParams.set('q', val)
      }
      return prevParams
    })
  }
  const handleChangeInInput = (event) => {
    const val = event.target.value
    setSearchTerm(val)
  }

  return (
    <nav className="navbar">
      <div className="nav-container" ref={sideNavRef}>
        <Sidebar />
        <h1 className="Free-Hit">
          <NavLink to="/about">
            <img className="free-logo" src={freehitlogo} alt="logo" />
          </NavLink>
          <NavLink className="free-word" to="/about">
            Free-Hit
          </NavLink>
        </h1>
      </div>
      {location.pathname !== '/about' && location.pathname !== '/community' && (
        <div className="container">
          <div className="search_box">
            <input
              type="text"
              className="input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => handleChangeInInput(e)}
            />
            <div className="btn btn_common">
              <i className="fas fa-search">
                <FaSearch />
              </i>
            </div>
          </div>
          {(filteredSuggestions.length > 1 || (filteredSuggestions.length > 0 && filteredSuggestions[0] != searchTerm)) && (
            <ul className="hnav-suggestionbar" id="serch-suggestions">
              {/* This shows as a list of suggestions based on the search term */}
              {filteredSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => {
                    setSearchTerm(suggestion)
                  }}
                  className="hnav-suggestion"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <ul className="pages">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header
