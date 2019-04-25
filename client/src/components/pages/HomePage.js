import React from 'react';
// import { connect } from 'react-redux';
import QuoteForm from '../form/QuoteForm';

class HomePage extends React.Component {
  onSubmit = formValues => {
    //Send this to our post action
  };
  render() {
    return (
      <div>
        <h1>Complete this Quote Form</h1>
        <QuoteForm onSubmit={this.onSubmit} />
        {/* <Link to="/reset" /> */}
      </div>
    );
  }
}

// const mapStateToProps = state =>{
//   const
// }

export default HomePage;
