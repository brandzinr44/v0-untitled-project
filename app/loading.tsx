export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-10 h-10">
          <div
            className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white animate-spin"
            style={{ animationDuration: "0.8s" }}
          />
          <div className="absolute inset-1.5 rounded-full border border-white/10" />
        </div>
      </div>
    </div>
  )
}
