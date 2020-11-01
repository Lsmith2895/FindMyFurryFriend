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
            <div className='all'>
                <nav className='NavBar'>
                <div className='Title'>Find My Furry Friend</div>
                    <div className='HomeSelector' onClick={this.changePage}> HOME </div>
                    <div className='LostSelector' onClick={this.changePage}> I've Lost My Pet </div>
                    <div className='FAQSelector'>FAQ</div>
                    <div className='TrialSelector'><span>START ONE MONTH FREE TRIAL</span></div>
                    <div className='AccountSelector' onClick={this.changePage}> My Account </div>
                </nav>
                <div className='CurrentPage'>{currentPage}</div>
            </div>
        )
    }

}

export default App;