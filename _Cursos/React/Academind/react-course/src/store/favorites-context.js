import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // Funções fantasma, só estão aqui pra o auto-complete depois
  addFavorite: (favoriteMeetup) => { },
  removeFavorite: (meetupId) => { },
  itemIsFavorite: (meetupId) => { }
})

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((previousUserFavoritesState) => {
      return previousUserFavoritesState.concat(favoriteMeetup)
    })
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((previousUserFavoritesState) => {
      return previousUserFavoritesState.filter(meetup => meetup.id !== meetupId)
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }


  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext