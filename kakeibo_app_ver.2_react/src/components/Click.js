// import React from 'react';
// import { connect } from 'react-redux';
// import { clickOpen,clickClose  } from '../actions/index';

// class Click extends React.Component{
//     render(){
//       return(
//         <div>
//           <button onClick={this.props.clickOpen}>
//             家計簿アプリとは
//           </button>
//           <p>拓哉と京香の生活費を計算するためのアプリである</p>
//           <button onClick={this.props.clickClose}>close</button>
//           <div>{console.log(this.props.state)}</div>
//         </div>
//       )
//     }
//   }
// const mapStateToProps = state => (state.startState)
// const mapDispatchToProps =dispatch => ({
//       clickOpen: () => dispatch(clickOpen()),
//       clickClose: () => dispatch(clickClose())
//     })

//  export default connect(mapStateToProps,mapDispatchToProps)(Click) ;
    //   render() {
    //     const props =this.props
    //      let modal;
    //         if (props.value=true){
    //             modal=(
    //             <div>
    //                 <p>拓哉と京香の生活費を計算するためのアプリである</p>
    //                 <button onClick={props.clickClose}>close
    //                 </button>
    //             </div>
    //             )
    //         };
    //       return(
    //         <React.Fragment>
    //           <div>
    //             <button onClick={props.clickOpen}>家計簿アプリとは</button>
    //           </div>
    //         </React.Fragment>
    //         )

    //     }
    // }

//     const mapStateToProps = state => ({value: state.click })
//     const mapDispatchToProps =dispatch => ({
//       clickOpen: () => dispatch(clickOpen()),
//       clickClose: () => dispatch(clickClose())
//     })

//     export default connect(mapStateToProps,mapDispatchToProps)(Click) ;
// //   render(){
//     return(
//       <div>hi</div>
//     )
//   }
// }

// export default Click ;