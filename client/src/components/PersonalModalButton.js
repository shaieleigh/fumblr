import React from 'react';
import PersonalModal from '../components/PersonalModal';

class PersonalModalButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showPersonalModal: false,
      handleClick: this.handleClick
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
        <button className='personalInfo' onClick={this.handleClick}>
          <svg className={this.state.showPersonalModal ? 'highlight' : 'personalModalButton'} viewBox="0 0 15 18.9" width="15" height="21"><path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"></path></svg>
        </button>
        {this.state.showPersonalModal ?
          <PersonalModal {...this.state} /> :
          null
        }
      </>
    )
  }
}

export default PersonalModalButton;
