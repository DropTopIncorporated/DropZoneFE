import React from 'react';
import Header from '../components/Header/Header';
import UserProfile from '../components/UserProfile';
import FavoritesList from '../components/FavoritesList';


const UserFavoritesContainer = () => {
  return(
    <>
      <UserProfile />
      <FavoritesList />
    </>
  )
}

export default UserFavoritesContainer;