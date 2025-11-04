import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-background">
      {/* LEFT */}
      <div className="flex w-full flex-1 flex-col">{children}</div>
      {/* RIGHT */}
      <div className="hidden lg:flex flex-1 bg-sky-100 dark:bg-sidebar items-center justify-center">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center justify-center gap-4">
            <Image src="/icon.svg" alt="Logo" width={50} height={50} />
            <h1 className='text-3xl font-semibold font-sans'>AceDesign</h1>
          </Link>
          <div className="flex flex-col items-center">
            <p>A refined dashboard concept showcasing</p>
            <span>modern UI design</span>
          </div>
        </div>
      </div>
    </div>
  )
}
