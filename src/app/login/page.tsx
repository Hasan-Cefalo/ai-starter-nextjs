import { ThemeToggle } from '@/components/theme-toggle';

// Figma assets served from the local assets server provided by the design tool
const imageLeft =
  'http://localhost:3845/assets/0c609d47911a99ae4c1d904f6aeed32df7b53ad3.png';

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      data-name="Sensa Unity - Landing"
      data-node-id="8775:5326"
    >
      {/* Soft radial background to match design */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#e8e9ff] via-white to-white"
      />
      <div className="absolute -left-40 top-12 h-[700px] w-[900px] rounded-full bg-white/70 blur-[160px]" />
      <div className="absolute -right-80 bottom-[-120px] h-[720px] w-[720px] rounded-full bg-white/70 blur-[220px]" />

      {/* Theme toggle for dev convenience */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-6">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Centered auth card */}
      <section className="relative z-10 mx-auto mt-6 flex max-w-[920px] items-stretch overflow-hidden rounded-2xl bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.05)]">
        {/* Left image */}
        <div className="hidden w-[418px] shrink-0 overflow-hidden sm:block" data-node-id="8785:5748">
          <img
            src={imageLeft}
            alt="Ocean waves"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="flex w-full flex-col items-center justify-center gap-6 px-10 py-12" data-node-id="8775:5329">
          {/* Logo mark + wordmark (simple approximation) */}
          <div className="flex flex-col items-center gap-3" aria-label="Sensa Trusted data logo">
            <div className="flex flex-col items-center gap-1">
              <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
                <span className="col-start-2 row-start-1 h-3 w-3 rounded-sm bg-black" />
                <span className="col-start-2 row-start-2 h-3 w-3 rounded-sm bg-black" />
                <span className="col-start-1 row-start-2 h-3 w-3 rounded-sm bg-black" />
                <span className="col-start-3 row-start-2 h-3 w-3 rounded-sm bg-black" />
                <span className="col-start-2 row-start-3 h-3 w-3 rounded-sm bg-black" />
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-black">Sensa</div>
                <div className="text-xs text-black/70">Trusted data</div>
              </div>
            </div>
          </div>

          <h2 className="mt-2 text-center text-[20px] font-semibold text-[#05050c]" data-node-id="8775:5336">
            Welcome to Sensa Unity Portal
          </h2>

          {/* Email field with icon */}
          <div className="w-full max-w-[340px]" data-node-id="8775:5331">
            <label htmlFor="email" className="sr-only">
              Organisation email
            </label>
            <div className="flex items-center rounded-[20px] border border-[#777777] bg-[#f1f1f1] px-4 py-2.5">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="mr-2 size-5 fill-current text-black/50"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
              <input
                id="email"
                type="email"
                inputMode="email"
                placeholder="Enter your organisation mail"
                className="w-full bg-transparent text-sm text-black/70 placeholder:text-black/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Microsoft button (disabled visual) */}
          <button
            type="button"
            disabled
            className="flex items-center gap-2 rounded-[20px] bg-[#c5c3c9]/50 px-5 py-2 text-sm font-semibold text-black/20"
            data-node-id="8775:5526"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-white/50 shadow-inner">
              <span className="block h-3 w-3 bg-gradient-to-br from-[#f25022] via-[#7fba00] to-[#00a4ef] opacity-50" />
            </span>
            Sign in with Microsoft
          </button>
        </div>
      </section>
    </main>
  );
}
