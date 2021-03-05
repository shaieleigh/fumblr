import React from 'react';
import '../assets/css/signup.css';

import SetDot from './SetDot';



class DotComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpDot: true,
      aboutDot: false,
      purpleDot: false,
      navyBlueDot: false,
      orangeDot: false,
      giphyDot: false
    }
  }

  componentDidMount() {
    if(this.props.about === 'about') {
      this.handleClickAbout();
    }
  }

  handleClickSignUp = e => {

    this.setState({
      signUpDot: true,
      aboutDot: false,
      purpleDot: false,
      navyBlueDot: false,
      orangeDot: false,
      giphyDot: false
    })

  }

  handleClickAbout = e => {
    this.setState({
      signUpDot: false,
      aboutDot: true,
      purpleDot: false,
      navyBlueDot: false,
      orangeDot: false,
      giphyDot: false
    })
  }

  handleClickPurple = e => {
    this.setState({
      signUpDot: false,
      aboutDot: false,
      purpleDot: true,
      navyBlueDot: false,
      orangeDot: false,
      giphyDot: false
    })
  }

  handleClickNavyBlue = e => {
    this.setState({
      signUpDot: false,
      aboutDot: false,
      purpleDot: false,
      navyBlueDot: true,
      orangeDot: false,
      giphyDot: false
    })
  }

  handleClickOrange = e => {
    this.setState({
      signUpDot: false,
      aboutDot: false,
      purpleDot: false,
      navyBlueDot: false,
      orangeDot: true,
      giphyDot: false
    })
  }

  handleClickGiphy = e => {
    this.setState({
      signUpDot: false,
      aboutDot: false,
      purpleDot: false,
      navyBlueDot: false,
      orangeDot: false,
      giphyDot: true
    })
  }


  render() {
    console.log('props', this.props)

    return (
      <div className='dotDiv'>
        <div className={this.state.signUpDot === true ? 'signUpDot dot dotActive' : 'signUpDot dot'} onClick={this.handleClickSignUp}></div>
        <div className={this.state.aboutDot === true ? 'aboutDot dot dotActive' : 'aboutDot dot'} onClick={this.handleClickAbout}></div>
        <div className={this.state.purpleDot === true ? 'purpleDot dot dotActive' : 'purpleDot dot'} onClick={this.handleClickPurple}></div>
        <div className={this.state.navyBlueDot === true ? 'navyBlueDot dot dotActive' : 'navyBlueDot dot'} onClick={this.handleClickNavyBlue}></div>
        <div className={this.state.orangeDot === true ? 'orangeDot dot dotActive' : 'orangeDot dot'} onClick={this.handleClickOrange}></div>
        <div className={this.state.giphyDot === true ? 'giphyDot dot dotActive' : 'giphyDot dot'} onClick={this.handleClickGiphy}></div>
        <SetDot state={this.state} />
      </div>
    )
  }

}

export default DotComponent;
