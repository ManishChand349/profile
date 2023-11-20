import React, { useState, useEffect } from 'react';
import './profile.css'

function Profile() {
  const [profile, setProfile] = useState({ results: [] });

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setProfile(data);
      });
  }, []); 

  return (
    <div className=''>
      {profile.results.map((user) => (
        <div className='container' key={user.login.uuid}>
         <img className='img' src={user.picture.large} alt="" />
         <div className='info'>
          <p className='name'>Name: {user.name.first} {user.name.last}</p>
          <p className='gender'>Gender: {user.gender}</p>
          <p className='phoneNumber'>Phone Number: {user.phone}</p>
         </div>
          
        </div>
      ))}
    </div>
  );
}

export default Profile;
