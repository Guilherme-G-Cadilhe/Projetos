import { useNavigate } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

//https://react-getting-started-60349-default-rtdb.firebaseio.com/




function NewMeetupsPage() {

  const navigate = useNavigate()


  function addMeetupHandler(meetupData) {

    fetch(
      'https://react-getting-started-60349-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    ).then(response => {
      navigate('/')
    })

  }

  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupsPage;