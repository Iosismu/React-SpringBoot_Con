import React, { Component } from 'react'

class UserListComponent extends Compoenet {
  
  constructor(props) {

    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount () {
    this.reloaduserList ();
  }

  reloadUserList = () => {
    ApiService.fetchUsers ()
    .then( res => {
      this.setState ({
        users: res.data
      })
    })
    .catch(err => {
      console.log('reloadUserList () Error!', err);
    })
  }

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/edit-user');
  }

  addUser = ()=> {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-user');
  }

  render() {
    
    return (
      <div>
        <h2>User List</h2>
        <button onclick={ this.addUser } >Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map( user =>
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.salay}</td>
                <td>
                  <button onclick={ () => this.editUser(user.id) }>Edit</button>
                  <button onclick={ () => this.deleteUser(user.id) }>Delete</button>
                </td>
              </tr>
            ) }
          </tbody>
        </table>
      </div>
    )
  }

}

export default UserListComponent;