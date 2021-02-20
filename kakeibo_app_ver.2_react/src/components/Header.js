import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={isModalOpen: false}
    };

    handleClickOpen(){
        this.setState({isModalOpen: true});
    }

    handleClickClose(){
        this.setState({isModalOpen: false});
    }

    render() {
        let modal;
        if (this.state.isModalOpen){
            modal=(
            <div>
                <p>拓哉と京香の生活費を計算するためのアプリである</p>
                <button onClick={() =>
                {this.handleClickClose()}}>close
                </button>
            </div>)
        };
        return(
            <div className='modal'>
                <h2
                onClick={()=> {this.handleClickOpen()}}
                >家計簿アプリとは</h2>
                {modal}
            </div>
        )
    }
}

export default Header;