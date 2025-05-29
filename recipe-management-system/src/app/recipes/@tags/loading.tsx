
export default function TagsLoading() {
  return (
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 h-6 w-16 rounded-full"
        ></div>
      ))}
    </div>
  );
}
  

