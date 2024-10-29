// import React from 'react'

const Profile = () => {
  return (
    <section>
      <div>
        <img src="" alt="" />
        <h2>Name</h2>
        <p>Email</p>
        <p>Location</p>
        <ul>
          <li>
            <p>Followers</p>
            <span>11</span>
          </li>
          <li>
            <p>Views</p>
            <span>11</span>
          </li>
          <li>
            <p>Likes</p>
            <span>11</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Profile />
    </div>
  )
}

export default App;