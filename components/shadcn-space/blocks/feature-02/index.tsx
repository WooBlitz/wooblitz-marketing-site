import Feature from "./feature"
import { BarChart3, CreditCard, Globe, Palette, Sparkles, Zap } from "lucide-react"

const featureData = [
  { icon: Sparkles, title: "AI-Powered Storefront", content: "Tell us what you sell. Our AI builds your storefront with the right blocks, layout, and copy — no design skills required." },
  { icon: Zap, title: "Lightning Fast Setup", content: "From signup to live store in under 10 minutes. We handle the infrastructure, payments, and hosting — you focus on your business." },
  { icon: Globe, title: "Custom Domain in Minutes", content: "Connect your own domain in a few clicks. We handle SSL, DNS, and provisioning automatically. No technical setup needed." },
  { icon: Palette, title: "Beautiful Themes", content: "Choose from hundreds of professional themes, or let AI match colors to your brand. Every theme is mobile-optimized." },
  { icon: CreditCard, title: "Built-in Payments", content: "Accept payments globally with Stripe, PayPal, and regional providers. Multi-currency support out of the box." },
  { icon: BarChart3, title: "Real-time Analytics", content: "Track visitors, conversions, and revenue in real-time. Get AI-powered insights to grow your business faster." }
]

const Feature02 = () => {
  return <Feature featureData={featureData} />
}

export default Feature02