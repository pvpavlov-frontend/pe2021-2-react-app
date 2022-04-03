import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [1, 2, 3, 4],
        }
    }
  render() {
    return (
      <div>UserList</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)


