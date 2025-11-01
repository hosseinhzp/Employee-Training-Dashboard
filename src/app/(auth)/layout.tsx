import { ThemeProvider } from "@/components/ThemeProvider"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen">
        {/* LEFT */}
        <div className="flex w-full flex-1 flex-col">{children}</div>
        {/* RIGHT */}
        <div className="hidden lg:block  flex-1"></div>
      </div>
    </ThemeProvider>
  )
}
