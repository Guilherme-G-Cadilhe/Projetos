import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList"


function AllMeetupsPage() {
  const [loadingMeetup, isLoading] = useState(true)
  const [meetupsArray, setMeetup] = useState([])

  useEffect(() => {
    isLoading(true)
    fetch('https://react-getting-started-60349-default-rtdb.firebaseio.com/meetups.json').then(response => response.json()).then(data => {
      const meetups = []

      for (const key in data) {

        const meetup = {
          id: key,
          ...data[key],
        }
        meetups.push(meetup)

      }

      console.log(meetups)
      isLoading(false)
      setMeetup(meetups)
    })
  }, [])



  if (loadingMeetup) {
    return (
      <section>
        <h2>Loading....</h2>
      </section>
    )
  }


  return <section>
    <h1>All Meetups</h1>
    <MeetupList items={meetupsArray} />

  </section>
}

export default AllMeetupsPage;