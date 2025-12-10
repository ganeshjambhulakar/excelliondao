export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-dark-800"></div>
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-500 animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-dark-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}




