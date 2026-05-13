"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Calculator,
  CheckCircle2,
  Factory,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";

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

const priceTicker = [
  "Chennai HMS-1 Scrap | INR 36,500 / Ton",
  "Copper Scrap | INR 720 / Kg",
  "Aluminium Sheet Cutting | INR 185 / Kg",
  "SS Scrap 304 | INR 118 / Kg",
  "Lead Scrap | INR 165 / Kg",
  "Zinc Scrap | INR 210 / Kg",
];

const sellOffers = [
  { tag: "SELL OFFER", title: "HMS-1 & HMS-2 Scrap Available", qty: "100 MT", location: "Chennai, India" },
  { tag: "SELL OFFER", title: "Aluminium Sheet Cutting Scrap", qty: "25 MT", location: "Tamil Nadu, India" },
  { tag: "SELL OFFER", title: "Copper Heavy Scrap Ready Stock", qty: "10 MT", location: "Chennai Port" },
  { tag: "SELL OFFER", title: "Damage Container Scrap Supply", qty: "Bulk", location: "Chennai Port" },
];

const buyOffers = [
  { tag: "BUY OFFER", title: "Buying HMS-1 Scrap Regularly", qty: "Monthly", location: "Pan India" },
  { tag: "BUY OFFER", title: "Need Copper Scrap Suppliers", qty: "20 MT", location: "South India" },
  { tag: "BUY OFFER", title: "SS Scrap Buyers Available", qty: "Bulk", location: "India" },
  { tag: "BUY OFFER", title: "Re-roller Buyers for MS Scrap", qty: "Truckload", location: "Tamil Nadu" },
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
  const [tab, setTab] = useState("sell");
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

  const whatsappText = result
    ? `Material Available:%0A%0AMaterial: ${result.material}%0AQuantity: ${result.qty} ${result.unit}%0ALocation: ${result.location}%0A%0AReady for supply/lifting.%0APlease share your best buying rate.%0A%0ABhawani Traders`
    : "";

  const offers = tab === "sell" ? sellOffers : buyOffers;

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="bg-[#062a43] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-sm">
          <p className="flex items-center gap-2">
            <BadgeCheck size={16} className="text-yellow-300" />
            30+ Years Scrap Business Experience
          </p>
          <div className="flex flex-wrap gap-5">
            <p className="flex items-center gap-2"><Phone size={15} /> +91 81688 11099</p>
            <p className="flex items-center gap-2"><Mail size={15} /> bhawanitraders31@gmail.com</p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0e9f6e] text-white">
              <Factory />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#062a43]">BHAWANI TRADERS</h1>
              <p className="text-xs font-semibold text-slate-500">Ferrous & Non-Ferrous Scrap Marketplace</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
            <a href="#offers">Offers</a>
            <a href="#prices">Prices</a>
            <a href="#materials">Materials</a>
            <a href="#agent">AI Agent</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/918168811099"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#0e9f6e] px-5 py-3 font-black text-white hover:bg-[#0b8059]"
          >
            Inquire Now
          </a>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-[#08344f] via-[#0b5570] to-[#0e9f6e] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded bg-white/15 px-4 py-2">✓ Verified Buyers & Sellers</span>
              <span className="rounded bg-white/15 px-4 py-2">★ Trusted Scrap Supply</span>
              <span className="rounded bg-white/15 px-4 py-2">✓ Chennai Port Leads</span>
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Buy & Sell Scrap with Bhawani Traders
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Connect with scrap buyers and sellers for aluminium, copper, SS, nickel, zinc, lead,
              HMS, MS cutting, TMT cutting and Chennai port damage container scrap.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#agent" className="rounded-md bg-yellow-400 px-7 py-4 font-black text-[#062a43] hover:bg-yellow-300">
                Start AI Matching
              </a>
              <a href="#offers" className="rounded-md border border-white/40 px-7 py-4 font-black hover:bg-white/10">
                Browse Offers
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black text-[#062a43]">Search Scrap Materials</h3>
            <p className="mt-1 text-sm text-slate-500">Find buyers, sellers and deal estimate</p>

            <div className="mt-5 grid gap-3">
              <select className="rim-input" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })}>
                {materials.map((m) => <option key={m}>{m}</option>)}
              </select>
              <input className="rim-input" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              <button onClick={analyzeDeal} className="rounded-md bg-[#0e9f6e] py-4 font-black text-white hover:bg-[#0b8059]">
                Search / Analyze
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Trust icon={<Users />} title="Buyer Network" text="Pan India" />
              <Trust icon={<Truck />} title="Supply Support" text="Fast Deals" />
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="shrink-0 rounded bg-[#062a43] px-4 py-2 text-sm font-black text-white">
              Scrap Prices
            </div>
            <div className="flex gap-4 overflow-x-auto text-sm font-semibold text-slate-700">
              {priceTicker.map((p) => (
                <span key={p} className="shrink-0 rounded border bg-slate-50 px-4 py-2">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          <Stat icon={<BadgeCheck />} number="30+" label="Years in Business" />
          <Stat icon={<MessageCircle />} number="1000+" label="Business Enquiries" />
          <Stat icon={<Users />} number="Pan India" label="Buyers & Sellers" />
          <Stat icon={<Star />} number="Trusted" label="Local Scrap Network" />
        </div>
      </section>

      <section id="offers" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-black text-[#0e9f6e]">MARKETPLACE</p>
              <h2 className="mt-2 text-4xl font-black text-[#062a43]">Recent Scrap Offers</h2>
              <p className="mt-2 text-slate-600">Browse sell offers and buy enquiries for scrap materials.</p>
            </div>

            <div className="flex rounded-md border bg-white p-1 shadow-sm">
              <button onClick={() => setTab("sell")} className={`rounded px-5 py-3 font-black ${tab === "sell" ? "bg-[#0e9f6e] text-white" : "text-slate-600"}`}>
                Sell Offers
              </button>
              <button onClick={() => setTab("buy")} className={`rounded px-5 py-3 font-black ${tab === "buy" ? "bg-[#0e9f6e] text-white" : "text-slate-600"}`}>
                Buy Offers
              </button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer) => (
              <OfferCard key={offer.title} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      <section id="agent" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black text-[#0e9f6e]">AI SCRAP BUSINESS AGENT</p>
            <h2 className="mt-2 text-4xl font-black text-[#062a43]">
              Match buyers and calculate profit instantly
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Enter material, quantity, rate and transport cost. The agent will suggest buyers,
              estimate profit and prepare WhatsApp message for deal communication.
            </p>

            <div className="mt-6 grid gap-3">
              {["Buyer matching", "Deal margin calculation", "WhatsApp offer message", "Supplier and buyer workflow"].map((x) => (
                <p key={x} className="flex gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="text-[#0e9f6e]" /> {x}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-[#f8fafc] p-6 shadow-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0e9f6e] text-white">
                <Bot />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#062a43]">AI Material Supply Agent</h3>
                <p className="text-sm text-slate-500">Buyer matching + profit calculator</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select className="rim-input col-span-2" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })}>
                {materials.map((m) => <option key={m}>{m}</option>)}
              </select>
              <input className="rim-input" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} />
              <select className="rim-input" value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })}>
                <option>Tons</option>
                <option>Kg</option>
              </select>
              <input className="rim-input col-span-2" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              <input className="rim-input" value={form.buy} onChange={(e) => setForm({ ...form, buy: e.target.value })} />
              <input className="rim-input" value={form.sell} onChange={(e) => setForm({ ...form, sell: e.target.value })} />
              <input className="rim-input col-span-2" value={form.transport} onChange={(e) => setForm({ ...form, transport: e.target.value })} />
            </div>

            <button onClick={analyzeDeal} className="mt-4 w-full rounded-md bg-[#0e9f6e] py-4 font-black text-white hover:bg-[#0b8059]">
              Analyze Deal
            </button>

            {result && (
              <div className="mt-5 rounded-xl border bg-white p-5">
                <h4 className="font-black text-[#062a43]">AI Result</h4>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Result label="Buying Cost" value={`₹${Math.round(result.profit.buyCost).toLocaleString("en-IN")}`} />
                  <Result label="Selling Value" value={`₹${Math.round(result.profit.sellValue).toLocaleString("en-IN")}`} />
                  <Result label="Transport" value={`₹${Math.round(result.profit.transport).toLocaleString("en-IN")}`} />
                  <Result label="Margin" value={`${result.profit.margin}%`} />
                </div>

                <div className="mt-4 rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-bold text-green-700">Estimated Net Profit</p>
                  <p className="text-3xl font-black text-[#062a43]">
                    ₹{Math.round(result.profit.netProfit).toLocaleString("en-IN")}
                  </p>
                </div>

                <p className="mt-4 font-black">Suggested Buyers</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {result.buyers.map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 size={16} className="text-[#0e9f6e]" /> {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-3 font-black text-white"
                >
                  Send WhatsApp Message <MessageCircle size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="materials" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-black text-[#0e9f6e]">SCRAP CATEGORIES</p>
          <h2 className="mt-2 text-4xl font-black text-[#062a43]">Materials We Deal In</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((item) => (
              <div key={item} className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Factory className="mb-4 text-[#0e9f6e]" />
                <p className="font-black">{item}</p>
                <p className="mt-2 text-sm text-slate-500">Available for sourcing and supply</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#062a43] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black">BHAWANI TRADERS</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Dealers in ferrous and non-ferrous scrap. AI-powered sourcing and supply support.
            </p>
          </div>

          <div className="space-y-4">
            <p className="flex gap-3"><Phone className="text-[#0e9f6e]" /> +91 81688 11099</p>
            <p className="flex gap-3"><Mail className="text-[#0e9f6e]" /> bhawanitraders31@gmail.com</p>
            <p className="flex gap-3"><MapPin className="text-[#0e9f6e]" /> Gummidipoondi, Manali New Town, Chennai, Tamil Nadu, India</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6">
            <p className="text-slate-300">GST / CST</p>
            <p className="mt-2 text-2xl font-black">33RSPS2216P1ZU</p>
          </div>
        </div>
      </footer>

      <EnquiryBot />
    </main>
  );
}

function EnquiryBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am Bhawani AI Assistant. Welcome to Bhawani Traders. Please tell me which scrap material you want to buy or sell.",
    },
  ]);
  const [input, setInput] = useState("");

  const businessNumber = "918168811099";

  const getBotReply = (userText) => {
    const text = userText.toLowerCase();

    if (
      text.includes("copper") ||
      text.includes("aluminium") ||
      text.includes("hms") ||
      text.includes("ms") ||
      text.includes("ss") ||
      text.includes("nickel") ||
      text.includes("zinc") ||
      text.includes("lead") ||
      text.includes("container") ||
      text.includes("tmt") ||
      text.includes("rod") ||
      text.includes("plate") ||
      text.includes("sheet")
    ) {
      return "Good. Please share quantity, location, and whether you want to buy or sell.";
    }

    if (
      text.includes("ton") ||
      text.includes("kg") ||
      text.includes("chennai") ||
      text.includes("rate") ||
      text.includes("price") ||
      text.includes("sell") ||
      text.includes("buy")
    ) {
      return "Thank you. Please share your phone number so our team can contact you. You can also click the WhatsApp button below.";
    }

    if (/\d{10}/.test(text)) {
      return "Thank you. Our Bhawani Traders team will contact you shortly.";
    }

    return "Please share material name, quantity, location, and buy/sell requirement.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const fullChat = messages
    .map((m) => `${m.sender === "bot" ? "Bot" : "User"}: ${m.text}`)
    .join("%0A");

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-2xl hover:bg-green-700"
      >
        💬 Bhawani AI
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[92vw] overflow-hidden rounded-2xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#062a43] px-5 py-4 text-white">
            <div>
              <h3 className="font-black">Bhawani AI Assistant</h3>
              <p className="text-xs text-slate-300">Material enquiry assistant</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-[330px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
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
                className="flex-1 rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none focus:border-green-600"
                placeholder="Type enquiry..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="rounded-lg bg-green-600 px-4 font-bold text-white hover:bg-green-700"
              >
                Send
              </button>
            </div>

            <a
              href={`https://wa.me/${businessNumber}?text=New%20Material%20Enquiry%0A%0A${fullChat}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-lg bg-[#25D366] px-4 py-3 text-center text-sm font-black text-white"
            >
              Send Enquiry on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Trust({ icon, title, text }) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">
      <div className="mb-2 text-[#0e9f6e]">{icon}</div>
      <p className="font-black">{title}</p>
      <p className="text-sm text-slate-500">{text}</p>
    </div>
  );
}

function Stat({ icon, number, label }) {
  return (
    <div className="rounded-xl border bg-slate-50 p-5">
      <div className="mb-3 text-[#0e9f6e]">{icon}</div>
      <p className="text-2xl font-black text-[#062a43]">{number}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}

function OfferCard({ offer }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <span className="rounded bg-green-50 px-3 py-1 text-xs font-black text-green-700">
        {offer.tag}
      </span>
      <h3 className="mt-4 text-lg font-black text-[#062a43]">{offer.title}</h3>
      <p className="mt-3 text-sm text-slate-600">Quantity: {offer.qty}</p>
      <p className="text-sm text-slate-600">Location: {offer.location}</p>
      <button className="mt-5 w-full rounded-md border border-[#0e9f6e] py-3 font-black text-[#0e9f6e] hover:bg-[#0e9f6e] hover:text-white">
        Inquire Now
      </button>
    </div>
  );
}

function Result({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className="font-black text-[#062a43]">{value}</p>
    </div>
  );
}