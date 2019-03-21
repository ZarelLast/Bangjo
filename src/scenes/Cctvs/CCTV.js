import React, { Component } from 'react'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import Lampu from './components/lampu'
import './CCTV.css'
import Video from '../Home/components/video'
import { Link } from 'react-router-dom'

export default class Camera extends Component {
  state = {
    data: [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/AiSXyvtAy7I?&autoplay=1&mute=0'
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/oXaATFucpz4?&autoplay=1&mute=0'
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/J85lXdTaKgA?&autoplay=1&mute=0'
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
    lampu1: [
      {
        merah: 20,
        kuning: 2,
        hijau: 20,
      }
    ],
    merah: 2,
    kuning: 0,
    hijau: 0,
    vid: null
  }

  // componentDidMount () {
  //   const id = this.props.match.params.id - 1
  //   const vid = this.state.data[id].link
  //   this.setState({ vid })
  //   console.log(vid)
    
  //   setTimeout(() => {
  //     console.log('kuning')
  //   },2000)

  //   this.interval = setInterval(() => {
  //     // console.log(this.state.hijau)
      
  //     if(this.state.kuning===0 && this.state.hijau===0){
  //       this.setState({ merah: this.state.merah -1 })
  
  //       if(this.state.kuning===0 && this.state.hijau===0){
  //         clearInterval(this.interval)
  //         setTimeout(()=>{
  //           this.setState({kuning:2})
  //         })
  //       }
  //     }

  //     if(this.state.merah===0 && this.state.hijau===0){
  //       this.setState({ kuning: this.state.kuning -1 })

  //       if(this.state.kuning===0 && this.state.merah===0){
  //         clearInterval(this.interval)
  //         setTimeout(()=>{
  //           this.setState({kuning:2})
  //         })
  //       }
  //     }
      
  //     if(this.state.merah===0 && this.state.hijau===0){
  //       this.setState({ kuning: this.state.kuning -1 })

  //       if(this.state.kuning===0 && this.state.merah===0){
  //         clearInterval(this.interval)
  //         setTimeout(()=>{
  //           this.setState({hijau:20})
  //         })
  //       }
  
  //       if(this.state.kuning===0 && this.state.hijau===0){
  //         clearInterval(this.interval)
  //         setTimeout(()=>{
  //           this.setState({merah:20})
  //         })
  //       }
  //     }
  //   },1000)
  // }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  componentDidUpdate(){
    this.interval = setInterval(() => {
      // console.log(this.state.hijau)
      
      if(this.state.kuning===0 && this.state.hijau===0 && this.state.merah!==0){
        this.setState({ merah: this.state.merah -1 })
  
        if(this.state.hijau===0 && this.state.merah===0 && this.state.kuning===0){
          clearInterval(this.interval)
          setTimeout(()=>{
            this.setState({kuning:2})
          })
          if(this.state.merah===0 && this.state.hijau===0 && this.state.kuning!==0){
            this.setState({ kuning: this.state.kuning -1 })
    
            if(this.state.kuning===0 && this.state.merah===0 && this.state.hijau===0 ){
              clearInterval(this.interval)
              setTimeout(()=>{
                this.setState({hijau:20})
              })
            }
          }
        }
      }

      if(this.state.merah===0 && this.state.hijau!==0 && this.state.kuning===0){
        this.setState({ hijau: this.state.hijau -1 })

        if(this.state.kuning===0 && this.state.merah===0 && this.state.hijau===0){
          clearInterval(this.interval)
          setTimeout(()=>{
            this.setState({kuning:2})
          })
          if(this.state.merah===0 && this.state.hijau===0 && this.state.kuning!==0){
            this.setState({ kuning: this.state.kuning -1 })
    
            if(this.state.kuning===0 && this.state.merah===0 ){
              clearInterval(this.interval)
              setTimeout(()=>{
                this.setState({hijau:20})
              })
            }
      
            if(this.state.kuning===0 && this.state.hijau===0){
              clearInterval(this.interval)
              setTimeout(()=>{
                this.setState({merah:20})
              })
            }
          }
        }
      }
      
      if(this.state.merah===0 && this.state.hijau===0 && this.state.kuning!==0){
        this.setState({ kuning: this.state.kuning -1 })

        if(this.state.kuning===0 && this.state.merah===0 ){
          clearInterval(this.interval)
          setTimeout(()=>{
            this.setState({hijau:20})
          })
          if(this.state.merah===0 && this.state.hijau!==0 && this.state.kuning===0){
            this.setState({ hijau: this.state.hijau -1 })
    
            if(this.state.kuning===0 && this.state.merah===0 && this.state.hijau===0){
              clearInterval(this.interval)
              setTimeout(()=>{
                this.setState({kuning:2})
              })
              if(this.state.merah===0 && this.state.hijau===0 && this.state.kuning!==0){
                this.setState({ kuning: this.state.kuning -1 })
        
                if(this.state.kuning===0 && this.state.merah===0 ){
                  clearInterval(this.interval)
                  setTimeout(()=>{
                    this.setState({hijau:20})
                  })
                }
          
                if(this.state.kuning===0 && this.state.hijau===0){
                  clearInterval(this.interval)
                  setTimeout(()=>{
                    this.setState({merah:20})
                  })
                }
              }
            }
          }
        }
  
        if(this.state.kuning===0 && this.state.hijau===0){
          clearInterval(this.interval)
          setTimeout(()=>{
            this.setState({merah:20})
          })
          if(this.state.kuning===0 && this.state.hijau===0 && this.state.merah!==0){
            this.setState({ merah: this.state.merah -1 })
      
            if(this.state.hijau===0 && this.state.merah===0 && this.state.kuning===0){
              clearInterval(this.interval)
              setTimeout(()=>{
                this.setState({kuning:2})
              })
              if(this.state.merah===0 && this.state.hijau===0 && this.state.kuning!==0){
                this.setState({ kuning: this.state.kuning -1 })
        
                if(this.state.kuning===0 && this.state.merah===0 ){
                  clearInterval(this.interval)
                  setTimeout(()=>{
                    this.setState({hijau:20})
                  })
                }
          
                if(this.state.kuning===0 && this.state.hijau===0){
                  clearInterval(this.interval)
                  setTimeout(()=>{
                    this.setState({merah:20})
                  })
                }
              }
            }
          }
        }
      }
      
    },1000)
  
  }
  componentDidMount () {
    const id = this.props.match.params.id - 1
    const vid = this.state.data[id].link
    this.setState({ vid })
    console.log(vid)
    
    setTimeout(() => {
      console.log('kuning')
    },2000)
  }
  render () {
    return (
      <div className='bg-size'>
        <div className='container my-5'>
          <Grid container className='mb-5'>
            <Grid item md={6} className='mt-auto'>
              <Card className='py-2 px-4'>
                <Typography variant='subtitle1' component='p'>
                  Alamat : jl.Pemuda no 15 Semarang
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  Status : Mati / Hidup
                </Typography>
              </Card>
            </Grid>
            <Grid item md={5} className='ml-auto'>
              <Card style={{ height: '260px' }}>
                <Video video={this.state.vid} />
              </Card>
            </Grid>
          </Grid>
          <Grid container className='mb-5'>
            <Card className='w-100 p-5 bg-light'>
              <Grid container className='px-auto'>
                <Lampu
                  merah={this.state.merah}
                  kuning={this.state.kuning}
                  hijau={this.state.hijau}
                />
                <Lampu
                  merah={this.state.merah}
                  kuning={this.state.kuning}
                  hijau={this.state.hijau}
                />
                <Lampu
                  merah={this.state.merah}
                  kuning={this.state.kuning}
                  hijau={this.state.hijau}
                />
                <Lampu
                  merah={this.state.merah}
                  kuning={this.state.kuning}
                  hijau={this.state.hijau}
                />
              </Grid>
            </Card>
          </Grid>
          <Link to={'/Dashboard/'}>
            <Button variant='contained' className='ml-5'>
              Back
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}
