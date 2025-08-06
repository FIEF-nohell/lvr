export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background iframe */}
      <iframe
        src="https://www.unicorn.studio/embed/5CKU03LOaJPqRDDW6lum"
        className="absolute inset-0 w-full h-full border-0 -z-10"
        title="Interactive Background"
        allowFullScreen
      />
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
      </div>
    </div>
  )
}
