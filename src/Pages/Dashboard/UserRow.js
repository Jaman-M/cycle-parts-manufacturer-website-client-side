const UserRow = ({user,refetch}) => {
    const {email,role}=user

    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/addmin/${email}`, {
            method: 'PUT',
            headers: {authorization: `{Bearer ${localStorage.getItem('accessToken')}`}

        })
        .then(res=>res.json())
        .then(data => {console.log(data)
            refetch()
        
        })
    }

    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' &&<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove Admin</button></td>
      </tr>
    );
};

export default UserRow;