import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import { fetchPosts, fetchUser, Post, User } from '@/utils/api';

const UserPostsPage = async ({ params }: { params: { userId: number } }) => {
  const { userId } = params;
  const data = await fetchPosts();
  const posts: Post[] = data.posts.filter((post) => post.userId == userId);

  // Fetch users for each post in parallel
  const usersMap: Record<number, User> = {};
  await Promise.all(
    posts.map(async (post) => {
      if (!usersMap[post.userId]) {
        const user = await fetchUser(post.userId);
        usersMap[post.userId] = user;
      }
    })
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
        <p className="text-gray-600 mt-2">Browse through user posts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const user = usersMap[post.userId];
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-1">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.body}
                  </p>
                  <div className="text-sm text-gray-500">
                    Author:{' '}
                    <Link
                      href={`/dashborad/posts/${user.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {user.firstName} {user.lastName}
                    </Link>{' '}
                    ({user.email})
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4 text-green-600" />
                        <span>{post.reactions.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span>{post.reactions.dislikes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserPostsPage;
