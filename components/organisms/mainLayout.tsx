import { ThemeProvider } from "next-themes";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col h-screen px-6 m-auto text-lg leading-7 max-w-7xl bg-neutral text-neutral-900 dark:bg-neutral-800 dark:text-neutral sm:px-14 md:px-24 lg:px-32">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;
