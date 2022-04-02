import React, { Component } from 'react';

// IMPORTANT!!!
// Повторяющиеся элементы списка должны иметь проп key,
// "приколоченный" к передаваемым пропсам

function UsersListItem(props) {
  const {
    user: { firstName, lastName },
  } = props;

  return (
    <li>
      {firstName} {lastName}
    </li>
  );
}

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, firstName: 'Test', lastName: 'Testovich' },
        { id: 2, firstName: 'John', lastName: 'Dou' },
        { id: 3, firstName: 'Jane', lastName: 'Dou' },
      ],
    };
  }

  mapUser = u => <UsersListItem key={u.id} user={u} />;

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
