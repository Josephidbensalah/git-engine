import React, { Component } from 'react'

export default class SearchUsers extends Component {
    state = {
        search:''
    }

    handleForm= (e) => {
        this.setState({
            search:e.target.value
        })
    }

    searchUsers = (e) => {
        // e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }
    render() {
        const {search} = this.state;
        return (
                <form onSubmit={this.searchUsers} >
                    <div className="form-group">
                        <input type="text" onChange={this.handleForm} value={search} id="search" className="form-control" placeholder="Search users.. " />
                        <button className="btn btn-danger btn-block mt-1">Search</button>
                    </div>
                    <span className="badge badge-warning " role="alert">
                    {search}  
                    </span>
                </form>
            
        )
    }
}
