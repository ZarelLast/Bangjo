import React, { Component } from 'react'
import Cards from './components/card'
import './Home.css'
import { Grid } from '@material-ui/core'
import video1 from '../../video/video1.mp4'
import video2 from '../../video/video2.mp4'
import video3 from '../../video/video3.mp4'

export default class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        link: video1
      },
      {
        id: 2,
        link: video2
      },
      {
        id: 3,
        link: video3
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
          <div class='form-group'>
            <input class='form-control' placeholder='Search...' />
          </div>
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
