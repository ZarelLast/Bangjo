import React, { Component } from 'react'

export default class ideo extends Component {
  render() {
    return (
        <iframe
        className='h-100 w-100'
        src='https://www.youtube.com/embed/oXaATFucpz4?&autoplay=1&mute=1'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    )
  }
}
