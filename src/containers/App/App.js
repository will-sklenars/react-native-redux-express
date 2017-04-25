import React, {Component} from 'react';
import Display from '../../components/Display';
import { connect } from 'react-redux';

import { drinksFetchData } from '../../reducers/drinks/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Display
        drinks={this.props.drinks}
        isLoading={this.props.isLoading}
        hasErrored={this.props.hasErrored}
        fetchData={this.props.fetchData}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    drinks: state.drinks,
    hasErrored: state.drinksHasErrored,
    isLoading: state.drinksIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(drinksFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);