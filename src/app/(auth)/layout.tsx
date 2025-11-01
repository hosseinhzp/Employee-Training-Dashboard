import { ThemeProvider } from "@/components/ThemeProvider"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {children}
      </div>
    </ThemeProvider>
  )
}
