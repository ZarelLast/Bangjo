import React, { Component } from 'react'
import { Grid, Paper, Fab, Typography } from '@material-ui/core'
import { grey, red, yellow, green } from '@material-ui/core/colors'

export default class Lampu extends Component {
  render () {
    return (
      <Grid item xs={12} md={3} className='text-center'>
        <h4 className='text-left'>Lampu {this.props.nomor}</h4>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Paper style={{ background: grey[900] }}>
              <Fab className='m-1' style={{ background: `${this.props.wmerah}` }} />
              <Fab className='m-1' style={{ background: `${this.props.wkuning}` }} />
              <Fab className='m-1' style={{ background: `${this.props.whijau}` }} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
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
