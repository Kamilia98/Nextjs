export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Recipe Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn't find the recipe you're looking for.
      </p>
      <a
        href="/recipes"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Recipes
      </a>
    </div>
  );
}
