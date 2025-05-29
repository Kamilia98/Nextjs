export const dynamic = 'force-dynamic';

async function getRecipeTags(): Promise<string[]> {
  const response = await fetch('https://dummyjson.com/recipes/tags');
  const tags = await response.json();
  return tags.slice(0, 6);
}

export default async function TagsPage() {
  const tags = await getRecipeTags();

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
