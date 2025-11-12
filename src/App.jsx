import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { Dumbbell, Flame, Clock, Bolt, Shield, Sparkles, ArrowRight } from 'lucide-react'

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-white/80 backdrop-blur border border-white/40 shadow-sm flex items-center justify-center">
        <Icon className="text-blue-600" size={20} />
      </div>
      <div>
        <div className="text-xs text-gray-600">{label}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  )
}

export default function App() {
  const heroRef = useRef(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 mt-3 rounded-2xl border border-black/5 bg-white/70 backdrop-blur flex items-center justify-between px-4 shadow-sm">
            <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
                <Dumbbell size={18} />
              </span>
              <span className="text-lg">IronForge Gym</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
              <a href="#features" className="hover:text-gray-900 transition">Features</a>
              <a href="#classes" className="hover:text-gray-900 transition">Classes</a>
              <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
              <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
              <a href="#join" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow hover:shadow-md transition">
                Join Now <ArrowRight size={16} />
              </a>
            </nav>
            <a href="/test" className="text-xs font-semibold text-blue-600 hover:underline">Backend Test</a>
          </div>
        </div>
      </header>

      {/* Hero 3D section */}
      <section id="home" ref={heroRef} className="relative pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <Sparkles size={14} /> Next‑gen 3D fitness
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Train in style. Push limits. 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Feel the burn.</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-xl">
              A premium gym experience with immersive 3D visuals, elite coaching, and results that speak for themselves.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:shadow-lg transition">
                Get Membership <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold border border-black/10 hover:border-black/20 transition">
                Explore Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat icon={Flame} label="Calories burned" value="120k+" />
              <Stat icon={Clock} label="Open hours" value="24/7" />
              <Stat icon={Shield} label="Certified coaches" value="15+" />
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-black/5 bg-gradient-to-b from-slate-100 to-white shadow-md">
            <div className="absolute inset-0">
              {/* Replace the URL with your Spline 3D scene if desired */}
              <Spline scene="https://prod.spline.design/8b1g15H3u6Ci8a7W/scene.splinecode" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold border border-white/60 shadow">
                <Bolt size={14} className="text-yellow-500" /> Interactive 3D powered by Spline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: 'Elite Equipment', desc: 'Top-tier machines and free weights for every training style.' },
              { icon: Flame, title: 'HIIT Arena', desc: 'Heart‑pounding HIIT classes designed to torch calories fast.' },
              { icon: Shield, title: 'Personal Coaching', desc: 'Certified trainers to guide you to your best performance.' },
              { icon: Clock, title: '24/7 Access', desc: 'Train on your time with secure round‑the‑clock access.' },
              { icon: Bolt, title: 'Smart Tracking', desc: 'Progress dashboards that keep you motivated and on path.' },
              { icon: Sparkles, title: 'Recovery Lounge', desc: 'Sauna, ice bath, and massage chairs to recover right.' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow">
                  <f.icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: 'Strength 101', level: 'Beginner', color: 'from-rose-500 to-pink-500' },
              { title: 'Power HIIT', level: 'Intermediate', color: 'from-amber-500 to-yellow-500' },
              { title: 'Mobility Flow', level: 'All Levels', color: 'from-emerald-500 to-teal-500' },
            ].map((c, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden border border-black/5 shadow-md bg-gradient-to-br ${c.color}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_0%,white,transparent_40%)]" />
                <div className="relative p-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold border border-white/30">
                    <Flame size={14} /> {c.level}
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold drop-shadow">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/90 max-w-sm">High‑intensity programming designed by pros to maximize gains safely.</p>
                  <a href="#join" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-white transition">
                    Book a spot <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              { name: 'Starter', price: '$29/mo', perks: ['Gym floor access', 'Locker room', '1 class / week'] },
              { name: 'Pro', price: '$59/mo', popular: true, perks: ['All‑area access', 'Unlimited classes', 'Sauna & recovery lounge', 'Guest pass 2x/mo'] },
              { name: 'Elite', price: '$99/mo', perks: ['Everything in Pro', '1:1 coaching 2x/mo', 'Priority booking', 'Nutrition consult'] },
            ].map((p, i) => (
              <div key={i} className={`rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition flex flex-col ${p.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {p.popular && (
                  <div className="-mt-8 mb-2 self-start rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 shadow">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <div className="mt-2 text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {perk}</li>
                  ))}
                </ul>
                <a href="#join" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 font-semibold shadow hover:shadow-md transition">
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold">Come see the space</h3>
            <p className="mt-2 text-slate-600">Book a free tour and trial workout. Our team will tailor a plan that fits your goals.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="First name" className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input required placeholder="Last name" className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" required placeholder="Email" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="4" placeholder="Tell us your goals" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:shadow-md transition">
                Request Tour <ArrowRight size={18} />
              </button>
            </form>
          </div>
          <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-black/5 bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-8 shadow-md">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_0%,white,transparent_40%)]" />
            <div className="relative">
              <h4 className="text-3xl font-black">Why IronForge?</h4>
              <p className="mt-2 text-white/90 max-w-md">Community‑driven culture, performance‑grade equipment, and elite coaching all under one roof.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-3xl font-black">10k+</div>
                  <div className="text-sm text-white/90">Workouts completed</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-3xl font-black">4.9/5</div>
                  <div className="text-sm text-white/90">Member rating</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-3xl font-black">15</div>
                  <div className="text-sm text-white/90">Pro coaches</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
                  <div className="text-3xl font-black">24/7</div>
                  <div className="text-sm text-white/90">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/5 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <Dumbbell size={14} /> Limited offer
              </div>
              <h4 className="mt-3 text-2xl font-extrabold">Start today and get your first month 50% off</h4>
              <p className="text-slate-600">No contracts. Cancel anytime.</p>
            </div>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:shadow-md transition">
              View Plans <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white"><Dumbbell size={16} /></span>
            <span className="font-bold">IronForge</span> © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#classes" className="hover:text-slate-900">Classes</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
