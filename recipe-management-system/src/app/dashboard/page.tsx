import { LogoutButton } from '@/components/LogoutButton';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token');

  if (!authToken) {
    redirect('/login');
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Welcome Back!
          </h2>
          <p className="text-gray-600 mb-4">
            You're successfully logged in and can now access all features.
          </p>
          <a
            href="/recipes/create"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Create Recipe
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Quick Stats
          </h2>
          <div className="space-y-2 text-sm">
            <p>🍽️ Total Recipes: Available</p>
            <p>⭐ Featured Recipes: 2</p>
            <p>🏷️ Recipe Tags: 6</p>
            <p>📱 Recent Recipes: 3</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <a
              href="/recipes"
              className="block text-blue-600 hover:text-blue-800 transition-colors"
            >
              📖 Browse All Recipes
            </a>
            <a
              href="/recipes/create"
              className="block text-blue-600 hover:text-blue-800 transition-colors"
            >
              ➕ Create New Recipe
            </a>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
