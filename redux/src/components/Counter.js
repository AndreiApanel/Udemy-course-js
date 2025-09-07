// import {Component} from 'react';
// import {connect} from 'react-redux';
import {inc, dec, rnd} from '../actions';
// import {bindActionCreators} from 'redux';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={() => dispatch(dec())}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(inc())}>
        Increment
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(rnd())}>
        Random
      </button>
    </div>
  );
};

// class Counter extends Component {
//   render() {
//     const {counter, inc, dec, rnd} = this.props;
//     return (
//       <div className="jumbotron">
//         <h1>{counter}</h1>
//         <button className="btn btn-primary" onClick={inc}>
//           Increment
//         </button>
//         <button className="btn btn-primary" onClick={dec}>
//           Decrement
//         </button>
//         <button className="btn btn-primary" onClick={rnd}>
//           Random
//         </button>
//       </div>
//     );
//   }
// }

//     <div className="jumbotron">
//       <h1>{counter}</h1>
//       <button className="btn btn-primary" onClick={inc}>
//         Increment
//       </button>
//       <button className="btn btn-primary" onClick={dec}>
//         Decrement
//       </button>
//       <button className="btn btn-primary" onClick={rnd}>
//         Random
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     counter: state.value,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// };

export default Counter;
