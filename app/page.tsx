import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes - squares/rectangles theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotated square top right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-teal-200/40 rotate-12"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 border border-teal-200/30 rotate-12"></div>
        {/* Bottom left squares */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-teal-200/40 -rotate-12"></div>
        <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-teal-200/30 -rotate-12"></div>
        {/* Floating small squares */}
        <div className="absolute top-1/4 right-[12%] w-4 h-4 bg-teal-200/30 rotate-45"></div>
        <div className="absolute top-[55%] left-[8%] w-3 h-3 border border-teal-300/40 rotate-45"></div>
        <div className="absolute top-[35%] right-[6%] w-6 h-6 border border-teal-200/30 rotate-12"></div>
        <div className="absolute bottom-[25%] right-[18%] w-2 h-2 bg-teal-300/40 rotate-45"></div>
        <div className="absolute top-[20%] left-[15%] w-5 h-5 border border-teal-200/20 rotate-45"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <span className="text-sm text-slate-900 font-medium">Wole Badmus</span>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/wolebadmus?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Single Card */}
      <main className="max-w-[1600px] mx-auto px-4 py-4 md:py-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-5 md:p-12">

          {/* Hero Section with Money Leak below title, Photo on right */}
          <section className="pb-6 border-b border-slate-100">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              {/* Left - Name, Title & Money Leak */}
              <div className="flex-1 order-1">
                {/* Name & Title */}
                <p className="text-teal-600 text-sm font-medium tracking-wider uppercase mb-1">Industrial Strategist</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-none mb-1">Wole Badmus</h1>
                <p className="text-base text-slate-500 mb-5">Industrial Capacity & Performance Strategist</p>

                {/* Money Leak Section - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-0.5 bg-teal-500"></div>
                    <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                      The Money Leak Most Industrial Organizations Normalize
                    </h2>
                  </div>

                  <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                    <p>Most industrial operations don&apos;t lose money in catastrophic failure. They lose it in normalization. Minor stops. Recurring adjustments. Chronic operator intervention. PM tasks completed, yet the same components fail again. Throughput that never quite reaches nameplate — but no one can isolate the constraint.</p>

                    <p className="text-teal-700 font-semibold">This is the money leak.</p>

                    <p className="font-medium text-slate-700">Globally:</p>

                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Unplanned downtime consumes <strong className="text-slate-900">5–20%</strong> of productive capacity annually.</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Maintenance represents <strong className="text-slate-900">15–40%</strong> of operating cost in asset-intensive industries.</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Reactive maintenance can cost <strong className="text-slate-900">3–5 times more</strong> than planned intervention when lost production is factored in.</span></li>
                    </ul>

                    <p>In environments where capital approval cycles are slow, FX volatility impacts spare procurement, and aging assets dominate — such as many manufacturing sites across West Africa — the impact compounds.</p>

                    <p className="text-slate-900 font-medium">But the deeper issue is not maintenance effort. It is structural misalignment.</p>

                    <ul className="space-y-1">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>PM programs disconnected from component behavior</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Downtime data lacking diagnostic clarity</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Spare strategy not tied to risk ranking</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Equipment constraints masked as operational variability</span></li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Capital decisions made before existing capacity is fully recovered</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="w-full lg:w-auto shrink-0 self-start order-2 flex justify-center lg:justify-start mb-8 lg:mb-0 lg:ml-8 px-4 lg:px-0">
                <div className="relative">
                  <div className="absolute -inset-3 bg-teal-100 rounded-2xl -rotate-3"></div>
                  <Image
                    src="/placeholder.png"
                    alt="Wole Badmus"
                    width={280}
                    height={420}
                    className="relative rounded-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Money Leak Section - Mobile only, shown after photo */}
              <div className="lg:hidden order-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-0.5 bg-teal-500"></div>
                  <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    The Money Leak Most Industrial Organizations Normalize
                  </h2>
                </div>

                <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                  <p>Most industrial operations don&apos;t lose money in catastrophic failure. They lose it in normalization. Minor stops. Recurring adjustments. Chronic operator intervention. PM tasks completed, yet the same components fail again. Throughput that never quite reaches nameplate — but no one can isolate the constraint.</p>

                  <p className="text-teal-700 font-semibold">This is the money leak.</p>

                  <p className="font-medium text-slate-700">Globally:</p>

                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Unplanned downtime consumes <strong className="text-slate-900">5–20%</strong> of productive capacity annually.</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Maintenance represents <strong className="text-slate-900">15–40%</strong> of operating cost in asset-intensive industries.</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Reactive maintenance can cost <strong className="text-slate-900">3–5 times more</strong> than planned intervention when lost production is factored in.</span></li>
                  </ul>

                  <p>In environments where capital approval cycles are slow, FX volatility impacts spare procurement, and aging assets dominate — such as many manufacturing sites across West Africa — the impact compounds.</p>

                  <p className="text-slate-900 font-medium">But the deeper issue is not maintenance effort. It is structural misalignment.</p>

                  <ul className="space-y-1">
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>PM programs disconnected from component behavior</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Downtime data lacking diagnostic clarity</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Spare strategy not tied to risk ranking</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Equipment constraints masked as operational variability</span></li>
                    <li className="flex gap-2"><span className="text-teal-400 shrink-0">*</span><span>Capital decisions made before existing capacity is fully recovered</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Money Leak Continued + Why Independent Analysis */}
          <section className="py-6 border-b border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Organizational Response */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 bg-teal-500"></div>
                  <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    Organizational Response
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p>When these misalignments persist, organizations compensate with:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Incremental capital upgrades</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Vendor-driven solutions</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Increased maintenance spend</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Operational workarounds</li>
                  </ul>
                  <p>Instead of structural correction.</p>
                  <p>In many cases, independent system-level analysis reveals recoverable throughput and cost stability before new capital is deployed. Capacity recovery is often more economical than capital expansion — if failure drivers are exposed early and execution priorities are sequenced correctly.</p>
                  <p className="italic text-slate-500 border-l-2 border-teal-300 pl-4">
                    Until then, the system continues to leak. Quietly. And consistently.
                  </p>
                </div>
              </div>

              {/* Right - Why Independent Analysis */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 bg-teal-500"></div>
                  <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    Why Independent System-Level Analysis Matters
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p>Internal teams are optimized for daily execution under pressure. Few are structured to step back and redesign the system architecture itself — to align maintenance structure, asset behavior, throughput constraints, and capital decisions into a single performance strategy.</p>
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                    <p className="text-teal-800 font-medium">That is where structural capacity recovery begins.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background */}
          <section className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Background */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 bg-teal-500"></div>
                  <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Background</h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p>Wole Badmus specializes in structural capacity recovery within material handling systems — including filling, dosing, conveying, packaging systems & automation, solids handling, and maintenance & reliability architecture.</p>
                  <p>He operates at the intersection of equipment mechanics, maintenance structure, throughput economics, and capital decision discipline — identifying where system behavior, not personnel performance, is silently limiting output and inflating cost.</p>
                  <p>His industrial experience spans complex manufacturing environments including <strong className="text-slate-900">ExxonMobil</strong>, <strong className="text-slate-900">BASF</strong>, <strong className="text-slate-900">Schwan&apos;s Company</strong>, <strong className="text-slate-900">Igloo Products</strong>, and multi-site operations across North America and West Africa. He has led and supported revamp and retrofit initiatives exceeding <strong className="text-slate-900">$200M in capital scope</strong> and developed component-based preventive maintenance frameworks across high-speed filling, solids handling, and packaging systems.</p>
                </div>
              </div>

              {/* Right - Focus Areas */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 bg-teal-500"></div>
                  <h2 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Focus Areas</h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Ranking failure drivers by measurable production impact</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Recovering hidden capacity before capital expansion decisions</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Converting task-based PM programs into component-driven reliability structures</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Aligning spare parts strategy with operational risk and procurement realities</li>
                    <li className="flex gap-2"><span className="text-teal-400">*</span>Sequencing execution priorities to stabilize throughput and deter unnecessary capital</li>
                  </ul>
                  <p>Rather than treating reliability as a maintenance function alone, his approach integrates system diagnostics, performance stabilization, and capital governance into a single structured recovery strategy.</p>
                  <p>Wole holds a <strong className="text-slate-900">master&apos;s degree in Subsea & Mechanical Engineering</strong> and has taught engineering at the <strong className="text-slate-900">University of Houston</strong> and <strong className="text-slate-900">Indiana State University</strong>. His perspective on structural workforce participation and industrial competitiveness was referenced in <a href="https://www.nytimes.com/2014/12/12/upshot/our-series-on-the-decline-of-work-an-introduction.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">The New York Times in &ldquo;The Vanishing Male Worker: How America Fell Behind.&rdquo;</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Thank You */}
          <section className="text-center pt-6 pb-2">
            <p className="text-slate-400 text-sm">Thank you for visiting.</p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 text-center">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Wole Badmus</p>
        </div>
      </footer>
    </div>
  );
}
