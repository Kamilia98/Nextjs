export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Recipe Management System
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover, create, and manage your favorite recipes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Browse Recipes
          </h2>
          <p className="text-gray-600 mb-4">
            Explore our collection of delicious recipes from around the world
          </p>
          <a
            href="/recipes"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Recipes
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Create Account
          </h2>
          <p className="text-gray-600 mb-4">
            Join our community to create and share your own recipes
          </p>
          <a
            href="/login"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            Access your personal recipe dashboard and management tools
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
