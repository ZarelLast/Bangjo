import React, { Component } from 'react'
import './Login.css'
import 'typeface-roboto'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import { grey } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render () {
    return (
      <div className='bg-image'>
        <div className='container my-5'>
          <form>
            <div className='row h-100 w-100'>
              <Grid item md={4} xs={12} className='mx-auto my-5'>
                <h2 className='my-5 text-light text-center'>Selamat Datang :) </h2>
                <div className='form-group bg-white px-2 border-0 my-4 rounded-pill'>
                  <EmailIcon className='mx-3' color={grey[50]} />
                  <input placeholder='Email' className='border-0 py-3' />
                </div>
                <div className='form-group bg-white px-2 border-0 rounded-pill'>
                  <LockIcon className='mx-3' color={grey[50]} />
                  <input placeholder='Password' className='border-0 py-3' />
                </div>
                <Link to={'/Dashboard/'}>
                  <button className='btn btn-light mt-4 float-right rounded-pill border-0 py-1 px-4'>Masuk</button>
                </Link>
              </Grid>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
