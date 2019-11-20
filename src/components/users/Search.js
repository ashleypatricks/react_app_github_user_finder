import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  /***
   * TEXT CHANGED
   */

  // Instead of having a seperate event target for every element, we can use this key syntax to identifiy the element that was clicked. We get this using the name attribute of the element. Uncomment the console.log().
  textChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log([e.target.name]);
  };

  /***
   * SUBMIT FORM
   */

  /*
    IF YOU DON'T USE AN ARROW FUNCTION, THEN YOU HAVE TO BIND THE FUNCTION. OTHERWISE THE VALUE OF 'THIS' WILL BE UNDEFINED.
    
    BIND THIS WAY: onSubmit={this.submitForm.bind(this)} 
    
    AND THE FUNCTION DECLARATION WILL LOOK LIKE THIS:

    submitForm(e) {
        e.preventDefault();
        console.log(this.state.text);
    }
*/
  submitForm = e => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light'); // Our custom method. Takes in a message and a colour type which we can use for a css class.
    } else {
      this.props.searchUsers(this.state.text); // PASSING PROPS UP TO APP.JS RATHER THAN RECEIVING THEM DOWN FROM APP.JS etc.... We basically create this function on the fly in the props and pass in the text from the state.
      this.setState({ text: '' });
    }
  };

  /***
   * RENDER
   */

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.textChanged}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
