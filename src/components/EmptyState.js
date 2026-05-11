export default function EmptyState() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
      <h2 className="text-2xl font-bold mb-3">No Products Found</h2>
      <p className="text-gray-600">
        Try changing filters or search for something else.
      </p>
    </div>
  );
}