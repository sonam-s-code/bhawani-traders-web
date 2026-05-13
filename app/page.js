"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Bot,
  CheckCircle2,
  Factory,
  Mail,
  MapPin,
  Phone,
  Users,
  X,
  ShieldCheck,
  Clock,
  Award,
  PackageCheck,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80";

const products = [
  {
    title: "Aluminium Scrap",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
    text: "Industrial aluminium scrap, extrusion scrap, sheet cutting and mixed aluminium materials.",
  },
  {
    title: "Copper Scrap",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=900&q=80",
    text: "Copper heavy scrap, copper wire scrap and industrial copper supply solutions.",
  },
  {
    title: "SS Scrap",
    img: "https://images.unsplash.com/photo-1519440862171-af26cf8c2a85?auto=format&fit=crop&w=900&q=80",
    text: "Stainless steel scrap for foundries, traders and industrial buyers.",
  },
  {
    title: "HMS-1 / HMS-2",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    text: "Heavy melting scrap, LMS and MS scrap supply for re-rollers.",
  },
  {
    title: "Sheet / Plate Cutting",
    img: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=900&q=80",
    text: "Plate cutting, angle cutting, rod butt cutting and TMT cutting materials.",
  },
  {
    title: "Damage Containers",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80",
    text: "Damage container and scrap container sourcing from Chennai Port.",
  },
];

const materials = [
  "Aluminium Scrap",
  "Copper Scrap",
  "SS Scrap",
  "Nickel Scrap",
  "Zinc Scrap",
  "Lead Scrap",
  "MS Scrap",
  "HMS-1",
  "HMS-2",
  "LMS",
  "Sheet Cutting",
  "Plate Cutting",
  "Angle Cutting",
  "TMT Cutting",
  "Rod Butt Cutting",
  "Damage Container",
  "Scrap Container - Chennai Port",
];

const buyerData = {
  "Aluminium Scrap": ["Gravita India Ltd", "VTA Industries", "Akjay International"],
  "Copper Scrap": ["CMR Green Technologies", "Saaggar Exports India", "RecycleInMe.com"],
  "SS Scrap": ["Majisha Metals LLP", "IndiaMart SS Scrap Directory", "Volza Verified Buyers"],
  "HMS-1": ["IndiaMart HMS Listings", "Go4WorldBusiness HMS", "ExportersIndia HMS"],
  "HMS-2": ["IndiaMart HMS Listings", "Go4WorldBusiness HMS", "TradeWheel HMS India"],
  "Damage Container": ["ScrapMonster India Directory", "IndiaMart Container Scrap", "TradeIndia"],
  "Scrap Container - Chennai Port": ["ScrapMonster India Directory", "IndiaMart Container Scrap", "TradeIndia"],
};

export default function Home() {
  const [form, setForm] = useState({
    material: "HMS-1",
    qty: "20",
    unit: "Tons",
    location: "Chennai",
    buy: "34",
    sell: "37",
    transport: "15000",
  });

  const [result, setResult] = useState(null);

  const profit = useMemo(() => {
    const qtyKg = Number(form.qty || 0) * (form.unit === "Tons" ? 1000 : 1);
    const buyCost = qtyKg * Number(form.buy || 0);
    const sellValue = qtyKg * Number(form.sell || 0);
    const transport = Number(form.transport || 0);
    const netProfit = sellValue - buyCost - transport;

    return {
      buyCost,
      sellValue,
      transport,
      netProfit,
      margin: sellValue ? ((netProfit / sellValue) * 100).toFixed(2) : "0.00",
    };
  }, [form]);

  const analyzeDeal = () => {
    const buyers =
      buyerData[form.material] || [
        "Local Foundry Buyers",
        "Re-Roller Buyers",
        "IndiaMart Buyers",
        "TradeIndia Buyers",
      ];

    setResult({ ...form, buyers, profit });
  };

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-slate-900">
      <div className="bg-[#111827] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-3 text-sm">
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-orange-400" />
            bhawanitraders31@gmail.com
          </p>
          <div className="flex flex-wrap gap-5">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              +91 81688 11099
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              Gummidipoondi, Chennai
            </p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded bg-orange-500 text-white">
              <Factory size={30} />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#111827]">
                BHAWANI TRADERS
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Scrap Sourcing & Supply
              </p>
            </div>
          </div>

          <div className="hidden gap-7 text-sm font-black text-slate-700 md:flex">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#agent">AI Agent</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/918168811099"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-orange-500 px-5 py-3 font-black text-white hover:bg-orange-600"
          >
            Enquire Now
          </a>
        </nav>
      </header>

      <section
        className="relative overflow-hidden px-6 py-28 text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(17,24,39,0.92), rgba(17,24,39,0.72)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded bg-orange-500 px-4 py-2 text-sm font-black">
              30+ Years Experience
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Industrial Scrap Supply Solutions
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Dealers and suppliers in ferrous and non-ferrous scrap, industrial cutting scrap
              and Chennai port damage container materials.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded bg-orange-500 px-7 py-4 font-black text-white hover:bg-orange-600"
              >
                Explore Products
              </a>
              <a
                href="#agent"
                className="rounded border border-white/30 px-7 py-4 font-black hover:bg-white/10"
              >
                Use AI Agent
              </a>
            </div>
          </div>

          <div id="agent" className="rounded-xl bg-white p-6 text-slate-900 shadow-2xl">
            <p className="text-sm font-black text-orange-600">AI MATERIAL SUPPLY AGENT</p>
            <h3 className="mt-2 text-3xl font-black text-[#111827]">
              Find Buyers & Estimate Profit
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <select
                className="rim-input col-span-2"
                value={form.material}
                onChange={(e) => setForm({ ...form, material: e.target.value })}
              >
                {materials.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>

              <input
                className="rim-input"
                value={form.qty}
                onChange={(e) => setForm({ ...form, qty: e.target.value })}
                placeholder="Quantity"
              />

              <select
                className="rim-input"
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
              >
                <option>Tons</option>
                <option>Kg</option>
              </select>

              <input
                className="rim-input col-span-2"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Location"
              />

              <input
                className="rim-input"
                value={form.buy}
                onChange={(e) => setForm({ ...form, buy: e.target.value })}
                placeholder="Buy ₹/kg"
              />

              <input
                className="rim-input"
                value={form.sell}
                onChange={(e) => setForm({ ...form, sell: e.target.value })}
                placeholder="Sell ₹/kg"
              />

              <input
                className="rim-input col-span-2"
                value={form.transport}
                onChange={(e) => setForm({ ...form, transport: e.target.value })}
                placeholder="Transport Cost"
              />
            </div>

            <button
              onClick={analyzeDeal}
              className="mt-4 w-full rounded bg-orange-500 py-4 font-black text-white hover:bg-orange-600"
            >
              Analyze Deal
            </button>

            {result && (
              <div className="mt-5 rounded-lg border bg-slate-50 p-4">
                <p className="font-black text-[#111827]">Estimated Net Profit</p>
                <p className="text-3xl font-black text-green-700">
                  ₹{Math.round(result.profit.netProfit).toLocaleString("en-IN")}
                </p>
                <p className="mt-2 text-sm font-bold">Margin: {result.profit.margin}%</p>

                <p className="mt-3 font-black">Suggested Buyers:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {result.buyers.map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 size={16} className="text-orange-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 px-6 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 text-center md:grid-cols-4">
          <Stat number="30+" label="Years Experience" />
          <Stat number="17+" label="Scrap Categories" />
          <Stat number="Pan India" label="Buyer Network" />
          <Stat number="AI" label="Digital Matching" />
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial metal scrap yard"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="font-black uppercase text-orange-600">About Company</p>
            <h2 className="mt-3 text-5xl font-black text-[#111827]">Bhawani Traders</h2>
            <p className="mt-6 leading-8 text-slate-600">
              We deal in aluminium scrap, copper scrap, stainless steel scrap, HMS scrap,
              cutting scrap and Chennai port damage container materials. Our goal is to connect
              genuine material sources with reliable buyers using a faster digital process.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Info icon={<ShieldCheck />} title="Trusted Supply" text="Reliable sourcing and buyer matching." />
              <Info icon={<PackageCheck />} title="Industrial Materials" text="Ferrous and non-ferrous scrap supply." />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black uppercase text-orange-600">Our Products</p>
          <h2 className="mt-3 text-center text-5xl font-black text-[#111827]">
            Scrap Materials We Deal In
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.title} title={p.title} text={p.text} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black uppercase text-orange-600">Why Choose Us</p>
          <h2 className="mt-3 text-center text-5xl font-black text-[#111827]">
            Industry Expertise & Trust
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            <Why icon={<ShieldCheck />} title="Integrity" />
            <Why icon={<Award />} title="Quality" />
            <Why icon={<Clock />} title="Timely Supply" />
            <Why icon={<BadgeCheck />} title="Experience" />
            <Why icon={<Users />} title="Customer Focus" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111827] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">
              Need Industrial Scrap Material?
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Send your requirement to Bhawani Traders. Our team will check availability,
              buyer/supplier match and supply possibility.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="https://wa.me/918168811099"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-orange-500 px-8 py-4 font-black hover:bg-orange-600"
            >
              WhatsApp Enquiry
            </a>
            <a
              href="tel:+918168811099"
              className="rounded border border-white/30 px-8 py-4 font-black hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#111827] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black">BHAWANI TRADERS</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Dealers in ferrous and non-ferrous scrap materials.
            </p>
          </div>

          <div className="space-y-4">
            <p className="flex gap-3">
              <Phone className="text-orange-500" />
              +91 81688 11099
            </p>
            <p className="flex gap-3">
              <Mail className="text-orange-500" />
              bhawanitraders31@gmail.com
            </p>
            <p className="flex gap-3">
              <MapPin className="text-orange-500" />
              Gummidipoondi, Manali New Town, Chennai, Tamil Nadu, India
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6">
            <p className="text-slate-300">GST / CST</p>
            <p className="mt-2 text-2xl font-black">33RSPS2216P1ZU</p>
          </div>
        </div>
      </footer>

      <BhawaniBot />
    </main>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-4xl font-black">{number}</p>
      <p className="font-bold">{label}</p>
    </div>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="rounded-lg border p-5">
      <div className="mb-3 text-orange-500">{icon}</div>
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function ProductCard({ title, text, img }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img src={img} alt={title} className="h-56 w-full object-cover" />
      <div className="p-7">
        <Factory className="mb-5 text-orange-500" size={42} />
        <h3 className="text-2xl font-black text-[#111827]">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{text}</p>
        <button className="mt-5 font-black text-orange-600">Explore More</button>
      </div>
    </div>
  );
}

function Why({ icon, title }) {
  return (
    <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-orange-100 text-orange-600">
        {icon}
      </div>
      <h3 className="font-black">{title}</h3>
    </div>
  );
}

function BhawaniBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("requirement");
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({
    requirement: "",
    material: "",
    quantity: "",
    location: "",
    name: "",
    phone: "",
    extra: "",
  });

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am Bhawani AI Assistant. Are you looking to buy or sell scrap material?",
    },
  ]);

  const businessNumber = "918168811099";

  const askNext = (currentStep, value) => {
    if (currentStep === "requirement") {
      setLead((p) => ({ ...p, requirement: value }));
      setStep("material");
      return "Please tell me the material name.";
    }

    if (currentStep === "material") {
      setLead((p) => ({ ...p, material: value }));
      setStep("quantity");
      return "Please share the quantity.";
    }

    if (currentStep === "quantity") {
      setLead((p) => ({ ...p, quantity: value }));
      setStep("location");
      return "Please share the material location.";
    }

    if (currentStep === "location") {
      setLead((p) => ({ ...p, location: value }));
      setStep("name");
      return "Please share your name.";
    }

    if (currentStep === "name") {
      setLead((p) => ({ ...p, name: value }));
      setStep("phone");
      return "Please share your phone number.";
    }

    if (currentStep === "phone") {
      setLead((p) => ({ ...p, phone: value }));
      setStep("extra");
      return "Any extra details?";
    }

    if (currentStep === "extra") {
      setLead((p) => ({ ...p, extra: value }));
      setStep("complete");
      return "Thank you ✅ Please click WhatsApp button below.";
    }

    return "Please click WhatsApp.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const botText = askNext(step, userText);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: botText },
    ]);

    setInput("");
  };

  const whatsappMessage = `
New Material Enquiry - Bhawani Traders

Requirement: ${lead.requirement}
Material: ${lead.material}
Quantity: ${lead.quantity}
Location: ${lead.location}
Name: ${lead.name}
Phone: ${lead.phone}
Extra Details: ${lead.extra}
`;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-2xl hover:bg-green-700"
      >
        💬 Bhawani AI
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[92vw] overflow-hidden rounded-xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#111827] px-5 py-4 text-white">
            <div>
              <h3 className="font-black">Bhawani AI Assistant</h3>
              <p className="text-xs text-slate-300">Material enquiry assistant</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-[330px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                  msg.sender === "bot"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "ml-auto bg-green-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t bg-white p-3">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none"
                placeholder="Type here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button
                onClick={sendMessage}
                className="rounded-lg bg-green-600 px-4 font-bold text-white"
              >
                Send
              </button>
            </div>

            {step === "complete" && (
              <a
                href={`https://wa.me/${businessNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block rounded-lg bg-[#25D366] px-4 py-3 text-center text-sm font-black text-white"
              >
                ✅ Submit Enquiry to WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}