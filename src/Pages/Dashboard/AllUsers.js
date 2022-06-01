import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user'
        
    
).then(res => res.json()));
console.log(users)
if (isLoading) {
    return <Loading></Loading>
}
return (
    <div>
        <h1 className='text-2xl'>All User: {users?.length}</h1>

        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Admin</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default AllUsers;