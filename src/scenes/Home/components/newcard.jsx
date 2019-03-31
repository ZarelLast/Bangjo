import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, Grid } from '@material-ui/core'
import Add from '@material-ui/icons/Add'

export default class Newcard extends Component {
  render () {
    return (
      <Grid item md={3} xs={12}>
        <h6 class='text-center'>New cctv</h6>
        <Link to={'/new-cctv/'}>
          <Card className='text-center'>
            <CardActionArea>
                <div class='my-5'>
                    <Add fontSize='large'/>
                    <h5>Add New</h5>
                </div>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    )
  }
}
