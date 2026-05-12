export default function EmptyState() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900">No Products Found</h2>
      <p className="text-gray-600 text-lg">
        Try changing filters or search for something else.
      </p>
    </div>
  );
}