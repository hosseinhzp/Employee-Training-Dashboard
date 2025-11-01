export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* LEFT */}
      <div className="flex w-full flex-1 flex-col">{children}</div>
      {/* RIGHT */}
      <div className="hidden lg:block  flex-1"></div>
    </div>
  )
}
