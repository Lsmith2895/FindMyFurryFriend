import React from 'react';
import Home from './HomePage.jsx';
import LostPet from './LostPetPage';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home',
            OwnerName: 'john',
            Email: 'klajsd;lfkj',
            Phone: '123-456-7891',
            PetName: 'spot',
            Collar: 'green',
            size: 'M',
            Friendliness: 'Nervous',
            LastZip: '99999',
            LastSeen: 'pratt park',
            Photo: 'img.url.com',
            lostPetList: []
        }

        this.changePage = this.changePage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: '/api/Pets',
        })
        .then( (data) => {
           this.setState({lostPetList: data.data})
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    changePage(event) { //change to event.target.id/classname to prevent changes in html to mess up the buttons
        if (event.target.innerText === 'Home' || event.target.innerText === 'Find My Furry Friend') {
            this.setState({ page: 'home' })
        } else if (event.target.innerText === `I've Lost My Pet`) {
            this.setState({ page: 'lost' })
        } else if (event.target.innerText === 'My Account') {
            this.setState({ page: 'account' })
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let formData = this.state
        axios({
            method: 'post',
            url: '/api/LostForm',
            data: formData,
        });

        event.preventDefault();
    }
    
    render() {
        let currentPage;
        if (this.state.page === 'home') {
            currentPage = <div>
                <Home lostPetList={this.state.lostPetList}/>
            </div>
        } else if (this.state.page === 'lost') {
            currentPage = <div>
                <LostPet
                    handleSubmit={this.handleSubmit}
                    form={this.state}
                    handleChange={this.handleChange}
                />
            </div>
        } else if (this.state.page === 'account') {
            currentPage = <div>
                <div className='pageTitle'>My Account</div>
            </div>
        }

        return (
            <div className='all'>
                <nav className='NavBar'>
                    <div className='Title' onClick={this.changePage}>Find My Furry Friend</div>
                    <div className='HomeSelector' onClick={this.changePage}> Home </div>
                    <div className='LostSelector' onClick={this.changePage}> I've Lost My Pet </div>
                    <div className='FAQSelector'>FAQ</div>
                    <div className='TrialSelector'><span>DONATE</span></div>
                    <div className='AccountSelector' onClick={this.changePage}> My Account </div>
                </nav>
                <div className='CurrentPage'>{currentPage}</div>
            </div>
        )
    }

}

export default App;