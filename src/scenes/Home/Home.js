import React, { Component } from 'react'
import Cards from './components/card'
import './Home.css'
import { Grid } from '@material-ui/core'

export default class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/AiSXyvtAy7I?&autoplay=1&mute=0'
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/oXaATFucpz4?&autoplay=1&mute=0'
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/J85lXdTaKgA?&autoplay=1&mute=0'
      },
      {
        id: 4,
        link: 'https://www.youtube.com/embed/k5S6IJ6sFik?&autoplay=1&mute=0'
      },
      {
        id: 5,
        link: 'https://www.youtube.com/embed/VUrwgtQpjY8?&autoplay=1&mute=0'
      },
      {
        id: 6,
        link: 'https://www.youtube.com/embed/VwCYizMLDoc?&autoplay=1&mute=0'
      },
      {
        id: 7,
        link: 'https://www.youtube.com/embed/b5SD0Wrb9HE?&autoplay=1&mute=0'
      },
      {
        id: 8,
        link: 'https://www.youtube.com/embed/cMHJIsmObkA?&autoplay=1&mute=0'
      }
    ],
  }

  render () {
    return (
      <div className='bg-color'>
        <div className='container my-5'>
          <h4 class='text-center my-5'>Traffic Light</h4>
          <Grid container spacing={24}>
            {this.state.data.map(res=>
            <Cards
              nomor={res.id}
              video={res.link}
            />
            )}
          </Grid>
        </div>
      </div>
    )
  }
}