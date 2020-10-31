import React from 'react';
import Home from './HomePage.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home',
        }

        this.changePage = this.changePage.bind(this);
    }

    changePage(event) {
      if ( event.target.innerText === 'HOME') {
        this.setState({page:'home'})
      } else if ( event.target.innerText === `I've Lost My Pet`) {
        this.setState({page:'lost'})
      } else if ( event.target.innerText === 'My Account') {
        this.setState({page:'account'})
      }
    }


    render() {
        let currentPage;
        if (this.state.page === 'home') {
            currentPage = <div>
                <Home />
            </div>
        } else if (this.state.page === 'lost') {
            currentPage = <div>
                <div className='pageTitle'>I've Lost My Pet</div>
            </div>
        } else if (this.state.page === 'account') {
            currentPage = <div>
                <div className='pageTitle'>My Account</div>
            </div>
        }

        return (
            <div>
                <div className='Title'> Find My Furry Friend</div>
                <div className='NavBar'>
                    <button onClick={this.changePage}> HOME </button>
                    <button onClick={this.changePage}> I've Lost My Pet </button>
                    <button onClick={this.changePage}> My Account </button>
                </div>
                <div className='CurrentPage'>{currentPage}</div>
            </div>
        )
    }

}

export default App;