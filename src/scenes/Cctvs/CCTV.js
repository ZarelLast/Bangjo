import React, { Component } from 'react'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import Lampu from './components/lampu'
import './CCTV.css'
import { Link } from 'react-router-dom'
import Video from '../Home/components/video'
import video1 from '../../video/video1.mp4'
import video2 from '../../video/video2.mp4'
import video3 from '../../video/video3.mp4'

export default class Camera extends Component {
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
    second: 20,  
    second2: 2,  
    wmerah: 'red',
    wkuning: '',
    whijau: '',
    wmerah2: '',
    whijau2: 'green',
    merah: 20,
    kuning: 0,
    hijau: 0,
    vid: null
  }

  lampu1 () {
    this.red = setInterval(() => {
      if (
        this.state.kuning === 0 &&
        this.state.hijau === 0 &&
        this.state.merah !== 0
      ) {
        this.setState({
          merah: this.state.merah - 1
        })
        if (
          this.state.hijau === 0 &&
          this.state.merah === 0 &&
          this.state.kuning === 0
        ) {
          clearInterval(this.red)
          setTimeout(() => {
            this.setState({ kuning: this.state.second2, wkuning: 'yellow', wmerah: '' , whijau2: '' })
          })
          this.yellow = setInterval(() => {
            if (
              this.state.merah === 0 &&
              this.state.hijau === 0 &&
              this.state.kuning !== 0
            ) {
              this.setState({ kuning: this.state.kuning - 1 })
              if (this.state.kuning === 0) {
                clearInterval(this.yellow)
                setTimeout(() => {
                  this.setState({
                    hijau: this.state.second,
                    wkuning: '',
                    whijau: 'green',
                    wmerah2: 'red'
                  })
                })
                this.green = setInterval(() => {
                  if (
                    this.state.merah === 0 &&
                    this.state.hijau !== 0 &&
                    this.state.kuning === 0
                  ) {
                    this.setState({ hijau: this.state.hijau - 1 })
                    if (
                      this.state.hijau === 0 &&
                      this.state.merah === 0 &&
                      this.state.kuning === 0
                    ) {
                      clearInterval(this.green)
                      setTimeout(() => {
                        this.setState({
                          kuning: this.state.second2,
                          wkuning: 'yellow',
                          whijau: '',
                          wmerah2:''
                        })
                      })
                      this.yellow = setInterval(() => {
                        if (
                          this.state.merah === 0 &&
                          this.state.hijau === 0 &&
                          this.state.kuning !== 0
                        ) {
                          this.setState({ kuning: this.state.kuning - 1 })
                          if (this.state.kuning === 0) {
                            clearInterval(this.yellow)
                            setTimeout(() => {
                              this.setState({
                                merah: this.state.second,
                                wmerah: 'red',
                                wkuning: '',
                                whijau2:'green'
                              })
                            })
                            this.red = setInterval(() => {
                              if (
                                this.state.kuning === 0 &&
                                this.state.hijau === 0 &&
                                this.state.merah !== 0
                              ) {
                                this.setState({
                                  merah: this.state.merah - 1
                                })
                                if (
                                  this.state.hijau === 0 &&
                                  this.state.merah === 0 &&
                                  this.state.kuning === 0
                                ) {
                                  clearInterval(this.red)
                                  setTimeout(() => {
                                    this.setState({
                                      kuning: this.state.second2,
                                      wkuning: 'yellow',
                                      wmerah: '',
                                      whijau2:''
                                    })
                                  })
                                  this.yellow = setInterval(() => {
                                    if (
                                      this.state.merah === 0 &&
                                      this.state.hijau === 0 &&
                                      this.state.kuning !== 0
                                    ) {
                                      this.setState({
                                        kuning: this.state.kuning - 1
                                      })
                                      if (this.state.kuning === 0) {
                                        clearInterval(this.yellow)
                                        setTimeout(() => {
                                          this.setState({
                                            hijau: this.state.second,
                                            wkuning: '',
                                            whijau: 'green',
                                            wmerah2:'red'
                                          })
                                        })
                                        this.green = setInterval(() => {
                                          if (
                                            this.state.merah === 0 &&
                                            this.state.hijau !== 0 &&
                                            this.state.kuning === 0
                                          ) {
                                            this.setState({
                                              hijau: this.state.hijau - 1
                                            })
                                            if (
                                              this.state.hijau === 0 &&
                                              this.state.merah === 0 &&
                                              this.state.kuning === 0
                                            ) {
                                              clearInterval(this.green)
                                              setTimeout(() => {
                                                this.setState({
                                                  kuning: this.state.second2,
                                                  wkuning: 'yellow',
                                                  whijau: '',
                                                  wmerah2:''
                                                })
                                              })
                                              this.yellow = setInterval(() => {
                                                if (
                                                  this.state.merah === 0 &&
                                                  this.state.hijau === 0 &&
                                                  this.state.kuning !== 0
                                                ) {
                                                  this.setState({
                                                    kuning:
                                                      this.state.kuning - 1
                                                  })
                                                  if (this.state.kuning === 0) {
                                                    clearInterval(this.yellow)
                                                    setTimeout(() => {
                                                      this.setState({
                                                        merah: this.state
                                                          .second,
                                                        wmerah: 'red',
                                                        whijau2:'green',
                                                        wkuning: ''
                                                      })
                                                    })
                                                  }
                                                }
                                              }, 1000)
                                            }
                                          }
                                        }, 1000)
                                      }
                                    }
                                  }, 1000)
                                }
                              }
                            }, 1000)
                          }
                        }
                      }, 1000)
                    }
                  }
                }, 1000)
              }
            }
          }, 1000)
        }
      }
    }, 1000)
  }
  
  componentDidMount () {
    const id = this.props.match.params.id - 1
    const vid = this.state.data[id].link
    this.setState({ vid })
    var i = 0
    console.log(vid)
    this.lampu1()
  }

  render () {
    return (
      <div className='bg-size'>
        <div className='container my-5'>
          <Grid container className='mb-5'>
            <Grid item xs={12} md={6} className='mt-auto'>
              <Card className='py-2 px-4'>
                <Typography variant='subtitle1' component='p'>
                  Alamat : jl.Pemuda no 15 Semarang
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  Status : Mati / Hidup
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={5} className='ml-auto'>
              <Card style={{ height: '260px' }}>
                <Video video={this.state.vid} />
              </Card>
            </Grid>
          </Grid>
          <Grid container className='mb-5'>
            <Card className='w-100 p-5 bg-light'>
              <Grid container className='px-auto'>
                <Lampu
                  nomor='1'
                  merah={this.state.merah}
                  wmerah={this.state.wmerah}
                  kuning={this.state.kuning}
                  wkuning={this.state.wkuning}
                  hijau={this.state.hijau}
                  whijau={this.state.whijau}
                />
                <Lampu
                  nomor='2'
                  merah={this.state.hijau}
                  wmerah={this.state.wmerah2}
                  kuning={this.state.kuning}
                  wkuning={this.state.wkuning}
                  hijau={this.state.merah}
                  whijau={this.state.whijau2}
                />
                <Lampu
                  nomor='3'
                  merah={this.state.merah}
                  wmerah={this.state.wmerah}
                  kuning={this.state.kuning}
                  wkuning={this.state.wkuning}
                  hijau={this.state.hijau}
                  whijau={this.state.whijau}
                />
                <Lampu
                  nomor='4'
                  merah={this.state.hijau}
                  wmerah={this.state.wmerah2}
                  kuning={this.state.kuning}
                  wkuning={this.state.wkuning}
                  hijau={this.state.merah}
                  whijau={this.state.whijau2}
                />
              </Grid>
            </Card>
          </Grid>
          <Link to={'/Dashboard/'}>
            <Button variant='contained' className='my-5'>
              Back
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}
