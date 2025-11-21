import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Welcome to AI Starter Next.js
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            A production-ready Next.js starter template built with modern best
            practices and AI-assisted development workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background-secondary rounded-lg border border-primary-200 dark:border-primary-800">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                TypeScript
              </h2>
              <p className="text-text-secondary">
                Strict mode enabled for maximum type safety and better
                developer experience.
              </p>
            </div>

            <div className="p-6 bg-background-secondary rounded-lg border border-primary-200 dark:border-primary-800">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Tailwind CSS
              </h2>
              <p className="text-text-secondary">
                Utility-first CSS framework with custom theme and dark mode
                support.
              </p>
            </div>

            <div className="p-6 bg-background-secondary rounded-lg border border-primary-200 dark:border-primary-800">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Redux Toolkit
              </h2>
              <p className="text-text-secondary">
                Modern Redux with simplified setup and built-in best practices.
              </p>
            </div>

            <div className="p-6 bg-background-secondary rounded-lg border border-primary-200 dark:border-primary-800">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Testing Ready
              </h2>
              <p className="text-text-secondary">
                Jest and React Testing Library configured and ready to use.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Ready to Build
            </h3>
            <p className="text-text-secondary">
              This template includes all the essentials: form validation with
              Zod, security with DOMPurify, and a complete testing setup. Start
              building your features right away!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
