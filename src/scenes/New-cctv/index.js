import React, { Component } from 'react'
import { Card, Grid, Button } from '@material-ui/core'
import { red, green } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'
import './index.css'
import IconVideo from '@material-ui/icons/VideoCall'

export default class index extends Component {
  render () {
    return (
      <Grid container className='py-5'>
        <Grid item md={4} xs={12} className='m-auto'>
          <Card className='py-5 my-5'>
            <Grid container>
              <Grid item md={12} xs={12}>
                <div class='text-center'>
                <h1>Add Video</h1>
                <IconVideo fontSize='large' className='my-5' />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
              <div class='text-center mt-5 '>
                <label for='upload' class='btn btn-info'>
                  UPLOAD <input type='file' id='upload' />
                </label>
                &nbsp;
                <Link to={'/'}>
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ backgroundColor: green[700] }} className='mb-2'
                  >
                    Save
                  </Button>
                </Link>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
