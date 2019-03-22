import React, { Component } from 'react'

export default class ideo extends Component {
  render() {
    return (
        <iframe
        className='h-100 w-100'
        src={this.props.video}
        width='100%'
        height='auto'
        frameborder='0'
        autoplay='true'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    )
  }
}
