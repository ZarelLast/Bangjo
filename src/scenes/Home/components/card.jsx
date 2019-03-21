import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, Grid } from '@material-ui/core'
import Video from './video';

export default class Cards extends Component {
  render () {
    return (
      <Grid item md={3} xs={12}>
          <h6 class='text-center'>CCTV {this.props.nomor} </h6>
          <Link to={'/camera/'+this.props.nomor}>
          <Card>
            <CardActionArea>
              <Video video={this.props.video}/>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    )
  }
}
