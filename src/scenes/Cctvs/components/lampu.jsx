import React, { Component } from 'react'
import { Grid, Paper, Fab, Typography } from '@material-ui/core'
import { grey, red, yellow, green } from '@material-ui/core/colors'

export default class Lampu extends Component {
  render () {
    return (
      <Grid item md={3} className='text-center'>
        <h4 className='text-left'>Lampu {this.props.nomor}</h4>
        <Grid container>
          <Grid item md={4}>
            <Paper style={{ background: grey[900] }}>
              <Fab className='m-1' style={{ background: red[900] }} />
              <Fab className='m-1' style={{ background: yellow[700] }} />
              <Fab className='m-1' style={{ background: green[700] }} />
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Typography variant='h5' component='p' className='my-1'>
                {this.props.merah} Detik
            </Typography>
            <Typography variant='h5' component='p' className='my-5'>
                {this.props.kuning} Detik
            </Typography>
            <Typography variant='h5' component='p' className='my-1'>
                {this.props.hijau} Detik
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
