const WorkoutSkeleton = () => {
  return (
    <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl animate-pulse space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <div className="h-6 w-40 bg-gray-700 rounded" />
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 rounded-full" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-gray-700 rounded-xl" />
          <div className="h-10 w-10 bg-gray-700 rounded-xl" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50"
          >
            <div className="h-10 w-10 bg-gray-700 rounded-xl" />
            <div className="space-y-1 w-full">
              <div className="h-3 w-1/3 bg-gray-600 rounded" />
              <div className="h-5 w-1/2 bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Date */}
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 bg-gray-700 rounded-lg" />
        <div className="h-4 w-40 bg-gray-600 rounded" />
      </div>
    </div>
  );
};

export default WorkoutSkeleton;