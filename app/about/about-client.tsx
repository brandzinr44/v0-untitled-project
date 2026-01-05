"use client"
import { WorkHeader } from "@/components/work-header"
import Image from "next/image"
import { PageLoader } from "@/components/page-loader"
import { motion } from "framer-motion"

const results = [
  {
    number: "51+",
    title: "Ecommerce Branding",
    description:
      "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
  },
  {
    number: "80+",
    title: "Brand Identity Projects",
    description:
      "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.",
  },
  {
    number: "200+",
    title: "Project Completed",
    description:
      "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
  },
  {
    number: "9+",
    title: "Packaging Design",
    description:
      "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
  },
]

function SimpleLink({
  href,
  children,
  variant = "default",
}: { href: string; children: string; variant?: "default" | "orange" }) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-2 px-0 py-0 transition-colors duration-300 ${
        variant === "orange" ? "text-chart-5" : "text-background hover:opacity-80"
      }`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:rotate-45"
      >
        <path
          d="M4 12L12 4M12 4H5.5M12 4V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export default function AboutClient() {
  return (
    <PageLoader>
      <main className="bg-background text-white">
        {/* <WorkHeader> About page uses WorkHeader component with mobile stacking */}
        <WorkHeader
          title="About Us"
          showFilters={false}
          tagline="A design studio built on purpose and the belief that great brands start with great ideas."
          location="Latitude: 23.4607° N Longitude: 91.1809° E"
        />

        <section className="pt-8 lg:pt-12 px-3 md:px-12 lg:px-8">
          <div className="max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/9] w-full overflow-hidden grayscale"
            >
              <Image
                src="https://4mkwknnmlp45gfn8.public.blob.vercel-storage.com/Firefly.jpg"
                alt="Studio Life"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="pt-10 lg:pt-15">
          <div className="max-w-full mx-auto h-px bg-chart-5/20" />
        </div>

        {/* Studio Story Section */}
        <section className="pt-8 lg:pt-15 pb-10 lg:pb-32 px-3 md:px-12 lg:px-8">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 lg:gap-70">
              <div>
                <h2 className="text-[30px] text-chart-5 font-medium tracking-tight">Studio Story</h2>
              </div>
              <div className="space-y-8">
                <p className="text-[16px] lg:text-[30px] font-medium text-chart-5 tracking-tight leading-tight">
                  lOZ!NR was built on a simple belief that great design isn't just something you see, it's something you
                  feel. We work closely with founders, startups and global teams to build brands that are bold in
                  thinking and refined in execution. Our process is hands-on and collaborative, combining clear strategy
                  with creative instinct to create work that's thoughtful, lasting and truly you.
                </p>
                <div className="lg:pt-4 pt-2">
                  <SimpleLink href="/contact" variant="orange">
                    Contact Us
                  </SimpleLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Agency Section */}
        <section className="pt-5 px-3 md:px-12 lg:px-8">
          <div className="max-w-full mx-auto">
            {/* Agency Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-12 lg:gap-17">
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[16/11] w-full overflow-hidden grayscale hover:grayscale-0 transition-transform duration-700"
              >
                <Image
                  src="https://4mkwknnmlp45gfn8.public.blob.vercel-storage.com/image%2001.jpg"
                  alt="Our Agency Team"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="space-y-12 lg:pt-12">
                <div className="space-y-8">
                  <p className="text-[13px] lg:text-[16px] font-regular tracking-tight text-chart-5/60">
                    At lOZ!NR, we create brand experiences that are timeless, scalable and built to connect. Through
                    thoughtful design systems, we help founders bring their ideas to life with clarity, emotion and
                    intention.
                  </p>
                  <p className="text-[13px] lg:text-[16px] font-regular tracking-tight text-chart-5/60">
                    We believe great design should move with meaning. Our vision is to build brands that lead. By
                    bringing together strategy, motion and craft, we aim to shape the next wave of iconic identities
                    that push culture and business forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="pt-10 lg:pt-15">
          <div className="max-w-full mx-auto h-px bg-chart-5/20" />
        </div>

        {/* Our Proven Result Section */}
        <section className="pt-10 lg:pt-50 px-3 md:px-12 lg:px-8">
          <div className="max-w-full mx-auto">
            {/* Results Header */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-50 mb-8 md:mb-24 items-start">
              <h2 className="text-[48px] md:text-8xl lg:text-[90px] lg:font-medium text-chart-5 font-bold lg:leading-tighter leading-none tracking-tight">
                Our Proven <br />
                Result
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-11 md:gap-22 items-start pt-0 lg:pt-15">
                <h3 className="hidden md:block text-[18px] font-medium tracking-tighter text-chart-5 whitespace-nowrap">
                  Our Numbers
                </h3>
                <ul className="hidden md:block space-y-3 text-[18px] font-medium leading-tight text-chart-5/60 font-regular">
                  <li>50: ECommerce Store</li>
                  <li>80: Brand Identity</li>
                  <li>90: Projects Completed</li>
                  <li>10: Packaging Designs</li>
                  <li>15: UI/UX Designs</li>
                </ul>
              </div>
            </div>

            {/* Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 mb-0 lg:mb-25">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-5 bg-transparent lg:bg-text-chart-5/5 rounded-xl lg:rounded-none border border-text-chart-5/20 flex flex-col justify-between aspect-[3/3] lg:aspect-[3/4] hover:border-text-chart-5/30 hover:bg-text-chart-5/5 transition-all duration-700 group relative overflow-hidden"
                >
                  <div className="lg:text-[96px] text-[72px] font-regular text-chart-5 lg:font-bold mb-8 group-hover:scale-105 tracking-tight transition-transform duration-700 ease-out origin-left">
                    {result.number}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[24px] text-chart-5 tracking-tighter font-medium">{result.title}</h4>
                    <p className="text-chart-5/60 text-[14px] lg:text-[18px] tracking-tight leading-tight font-regular">
                      {result.description}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-text-chart-5/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              ))}
            </div>

            <div className="md:hidden flex justify-center pt-8">
              <a
                href="/services"
                className="w-full bg-text-chart-5 text-background px-3 py-4 rounded-lg flex items-center justify-center gap-2 group transition-colors duration-300 hover:bg-white/90"
              >
                <span className="font-medium">See More Services</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:rotate-45"
                >
                  <path
                    d="M4 12L12 4M12 4H5.5M12 4V10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="pt-10 lg:pt-15">
          <div className="max-w-full mx-auto h-px bg-chart-5/20" />
        </div>

        {/* New Founder Section */}
        <section className="pt-15 px-3 md:px-12 lg:px-8 bg-background">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-8 md:gap-1 items-start">
              {/* Left Column: Label */}
              <div>
                <p className="text-[16px] lg:text-[16px] tracking-tight font-regular text-chart-5/50">Our founder</p>
              </div>

              {/* Center Column: Portrait */}
              <div className="relative aspect-[3/4] w-full max-w-[450px] lg:max-w-[400px]  mx-auto overflow-hidden bg-chart-5/5">
                <Image
                  src="https://xr5f8muea5zvkv4z.public.blob.vercel-storage.com/Adnan%20Akif.jpg"
                  alt="Anik Jain - Founder"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col h-full justify-start space-y-10 lg:pt-0 pt-3">
                <div className="space-y-8">
                  <p className="lg:text-[18px] text-[16px] text-chart-5 font-medium tracking-tight leading-relaxed max-w-[400px]">
                    Design should feel like clarity not noise. At lOZ!NR, we don't just design brands, we shape
                    identities that speak without shouting, and last without forcing.
                  </p>

                  <div className="space-y-1">
                    <h3 className="lg:text-[18px] text-[16px] text-chart-5 font-medium tracking-tight">Adnan Akif</h3>
                    <p className="lg:text-[18px] text-[16px] text-chart-5/50 font-medium tracking-tight">
                      Founder & Creative Director
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-chart-5">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/adnanbranding/" },
                    { label: "Facebook", href: "https://web.facebook.com/adnanbranding#" },
                    { label: "Youtube", href: "https://www.youtube.com/@adnanbranding" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center gap-2 text-white transition-colors duration-300"
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <span className="text-[16px] lg:text-[18px] text-chart-5 font-medium tracking-tight">{social.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="chart-5"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:rotate-45"
                      >
                        <path
                          d="M4 12L12 4M12 4H5.5M12 4V10.5"
                          stroke="chart-5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLoader>
  )
}
