import React from 'react';
import { fetchPost, Post } from '@/utils/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

const PostPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const data = await fetchPost(id);
  const post: Post = data;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Post Details</h1>
        <p className="text-gray-600 mt-2">View post content and reactions</p>
      </div>

      <div className="max-w-4xl">
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <div key={tag}>{tag}</div>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.body}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Reactions</h3>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-medium">{post.reactions.likes}</span>
                  </div>
                  <span className="text-sm text-gray-600">Likes</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-red-50 text-red-700 px-3 py-2 rounded-lg">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="font-medium">
                      {post.reactions.dislikes}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Dislikes</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-sm text-gray-500">
                <p>Post ID: {post.id}</p>
                <p>Author ID: {post.userId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostPage;
