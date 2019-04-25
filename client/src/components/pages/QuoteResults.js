import React from 'react';
import { connect } from 'react-redux';

class QuoteResults extends React.Component {
  renderQuotes() {
    if (this.props.quotes === null) return <div>Loading...</div>;
    return <div>{this.props.quotes}</div>;
  }
  render() {
    return <div>{this.renderQuotes()}</div>;
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes.response };
};

export default connect(mapStateToProps)(QuoteResults);
