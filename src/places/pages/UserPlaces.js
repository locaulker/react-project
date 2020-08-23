import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://www.tripsavvy.com/thmb/sfY_yVsEJiGPdRo_dgYYq6pA74Y=/3435x2576/smart/filters:no_upscale()/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://www.tripsavvy.com/thmb/sfY_yVsEJiGPdRo_dgYYq6pA74Y=/3435x2576/smart/filters:no_upscale()/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
