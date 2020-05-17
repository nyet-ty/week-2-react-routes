import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="main">
            <div id="title">Main</div>
            <Link to='/dashboard/profile/642a63c6-22c9-4488-858c-f460f095d567'>Go To Profile </Link>
            <Link to='/dashboard'>Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
