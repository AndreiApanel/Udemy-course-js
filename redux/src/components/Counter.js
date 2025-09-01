import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';
const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={inc}>
        Increment
      </button>
      <button className="btn btn-primary" onClick={dec}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={rnd}>
        Random
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.value,
  };
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);
