import { fetchUsers, User } from '@/utils/api';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UsersPage = async () => {
  const data = await fetchUsers();
  const users: User[] = data.users;
  console.log(users);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Users</h1>
        <p className="text-gray-600 mt-2">Browse the list of all users</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/dashboard/users/${user.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Image
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600 text-sm">{user.company?.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
