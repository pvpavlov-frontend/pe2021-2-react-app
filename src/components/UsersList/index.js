import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

// IMPORTANT!!!
// Повторяющиеся элементы списка должны иметь проп key,
// "приколоченный" к передаваемым пропсам

// Взаимодействие компонентов:
// 1 Parent => Child: props
// 2 Child => Parent: cb

const usersDB = [
  { id: 1, firstName: 'Test', lastName: 'Testovich' },
  { id: 2, firstName: 'John', lastName: 'Dou' },
  { id: 3, firstName: 'Jane', lastName: 'Dou' },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map(u => ({ ...u, isSelected: false })),
    };
  }
  mapUser = (u, index) => {
    const selectUser = () => {
      const { users } = this.state;
      const newUsers = [...users];

      newUsers[index].isSelected = !newUsers[index].isSelected;

      this.setState({ users: newUsers });
    };

    return <UsersListItem key={u.id} user={u} selectUser={selectUser} />;
  };

  // selectUser = id => {
  //   const { users } = this.state;
  //   const newUsers = [...users];

  //   const selectedUserIndex = newUsers.findIndex(u => u.id === id);

  //   newUsers[selectedUserIndex].isSelected =
  //     !newUsers[selectedUserIndex].isSelected;

  //   this.setState({ users: newUsers });
  // };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
