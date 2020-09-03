import React from 'react';
import PersonalModal from './PersonalModal';

class PersonalModalButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showPersonalModal: false,
    };
  }

  handleClick = () => {
    if(!this.state.showPersonalModal) {
      this.setState({ showPersonalModal : true });
    } else {
      this.setState({ showPersonalModal : false })
    }
  }

  render() {
    return (
      <>
        <button className='personalInfo' onClick={this.handleClick}><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg></button>
        {this.state.showPersonalModal ?
          <PersonalModal /> :
          null
        }
      </>
    )
  }
}

export default PersonalModalButton;
