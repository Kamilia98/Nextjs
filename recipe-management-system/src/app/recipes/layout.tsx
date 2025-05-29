// app/recipes/layout.tsx
import { cookies } from 'next/headers';

interface RecipesLayoutProps {
  children: React.ReactNode;
  featured: React.ReactNode;
  tags: React.ReactNode;
  recent: React.ReactNode;
}

export default async function RecipesLayout({
  children,
  featured,
  tags,
  recent,
}: RecipesLayoutProps) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token');
  const isAuthenticated = !!authToken;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Recipe Management System</h1>
        {isAuthenticated ? (
          <p className="text-green-600">
            Welcome back! You can create new recipes.
          </p>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              Please{' '}
              <a href="/login" className="text-blue-600 underline">
                login
              </a>{' '}
              to create new recipes
            </p>
          </div>
        )}
      </div>

      {/* Parallel Routes Container */}
      {isAuthenticated && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-600">
              Featured Recipes
            </h2>
            {featured}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Recipe Tags
            </h2>
            {tags}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">
              Recent Recipes
            </h2>
            {recent}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
    </div>
  );
}
