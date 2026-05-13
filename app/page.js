"use client";

import { useMemo, useState } from "react";
import {
  Factory,
  Bot,
  Calculator,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Search,
  Ship,
  ArrowRight
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
  "Scrap Container - Chennai Port"
];

const buyerData = {
  "Aluminium Scrap": [
    "Gravita India Ltd",
    "VTA Industries",
    "Akjay International",
    "JustDial Aluminium Buyers"
  ],
  "Copper Scrap": [
    "CMR Green Technologies",
    "Saaggar Exports India",
    "RecycleInMe.com",
    "JustDial Copper Buyers"
  ],
  "SS Scrap": [
    "Majisha Metals LLP",
    "IndiaMart SS Scrap Directory",
    "Volza Verified Buyers"
  ],
  "Nickel Scrap": [
    "Go4WorldBusiness Nickel Buyers",
    "IndiaMart Nickel Scrap Buyers",
    "Local Alloy Buyers"
  ],
  "Zinc Scrap": [
    "JustDial Zinc Scrap Buyers",
    "IndiaMart Zinc Buyers",
    "Local Metal Traders"
  ],
  "Lead Scrap": [
    "Jain Metal Group",
    "IndiaMart Lead Scrap Buyers",
    "Local Battery Scrap Buyers"
  ],
  "HMS-1": [
    "IndiaMart HMS Listings",
    "Go4WorldBusiness HMS",
    "ExportersIndia HMS",
    "TradeWheel HMS India"
  ],
  "HMS-2": [
    "IndiaMart HMS Listings",
    "Go4WorldBusiness HMS",
    "TradeWheel HMS India"
  ],
  "Damage Container": [
    "ScrapMonster India Directory",
    "IndiaMart Container Scrap",
    "TradeIndia"
  ],
  "Scrap Container - Chennai Port": [
    "ScrapMonster India Directory",
    "IndiaMart Container Scrap",
    "TradeIndia"
  ]
};

export default function Home() {
  const [form, setForm] = useState({
    material: "HMS-1",
    qty: "20",
    unit: "Tons",
    location: "Chennai",
    buy: "34",
    sell: "37",
    transport: "15000"
  });

  const [result, setResult] = useState(null);

  const profit = useMemo(() => {
    const qtyKg = Number(form.qty || 0) * (form.unit === "Tons" ? 1000 : 1);
    const buyCost = qtyKg * Number(form.buy || 0);
    const sellValue = qtyKg * Number(form.sell || 0);
    const transport = Number(form.transport || 0);
    const netProfit = sellValue - buyCost - transport;

    return {
      qtyKg,
      buyCost,
      sellValue,
      transport,
      netProfit,
      margin: sellValue ? ((netProfit / sellValue) * 100).toFixed(2) : "0.00"
    };
  }, [form]);

  const analyzeDeal = () => {
    const buyers = buyerData[form.material] || [
      "Local Foundry Buyers",
      "Re-Roller Buyers",
      "IndiaMart Buyers",
      "TradeIndia Buyers",
      "JustDial Buyers"
    ];

    setResult({
      ...form,
      buyers,
      profit
    });
  };

  const whatsappText = result
    ? `Material Available:%0A%0AMaterial: ${result.material}%0AQuantity: ${result.qty} ${result.unit}%0ALocation: ${result.location}%0A%0AReady for supply/lifting.%0APlease share your best buying rate.%0A%0ABhawani Traders`
    : "";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 p-3 rounded-2xl shadow-lg">
              <Factory />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide">
                BHAWANI TRADERS
              </h1>
              <p className="text-sm text-slate-400">
                Deals in Ferrous & Non-Ferrous Scrap
              </p>
            </div>
          </div>

          <a
            href="tel:+918168811099"
            className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-xl font-bold"
          >
            Call Now
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-300 font-bold mb-4">
              30+ Years Scrap Business Now Powered by AI
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Find Material. Match Buyers. Supply Faster.
            </h2>

            <p className="text-slate-300 mt-6 text-lg leading-8">
              Bhawani Traders helps source and supply ferrous, non-ferrous,
              industrial cutting scrap, damaged containers and Chennai port
              scrap using an AI-powered buyer matching workflow.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#agent"
                className="bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded-xl font-bold inline-flex items-center gap-2"
              >
                Use AI Agent <ArrowRight size={18} />
              </a>

              <a
                href="#materials"
                className="border border-white/20 px-6 py-4 rounded-xl font-bold"
              >
                View Materials
              </a>
            </div>
          </div>

          <div
            id="agent"
            className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Bot className="text-blue-300" size={34} />
              <div>
                <h3 className="text-2xl font-bold">
                  AI Material Supply Agent
                </h3>
                <p className="text-slate-400 text-sm">
                  Buyer matching + profit calculator + WhatsApp message
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
                className="col-span-2 bg-slate-800 rounded-xl p-3 outline-none"
                value={form.material}
                onChange={(e) =>
                  setForm({ ...form, material: e.target.value })
                }
              >
                {materials.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>

              <input
                className="bg-slate-800 rounded-xl p-3 outline-none"
                placeholder="Quantity"
                value={form.qty}
                onChange={(e) => setForm({ ...form, qty: e.target.value })}
              />

              <select
                className="bg-slate-800 rounded-xl p-3 outline-none"
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
              >
                <option>Tons</option>
                <option>Kg</option>
              </select>

              <input
                className="col-span-2 bg-slate-800 rounded-xl p-3 outline-none"
                placeholder="Location"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />

              <input
                className="bg-slate-800 rounded-xl p-3 outline-none"
                placeholder="Buying ₹/kg"
                value={form.buy}
                onChange={(e) => setForm({ ...form, buy: e.target.value })}
              />

              <input
                className="bg-slate-800 rounded-xl p-3 outline-none"
                placeholder="Selling ₹/kg"
                value={form.sell}
                onChange={(e) => setForm({ ...form, sell: e.target.value })}
              />

              <input
                className="col-span-2 bg-slate-800 rounded-xl p-3 outline-none"
                placeholder="Transport Cost ₹"
                value={form.transport}
                onChange={(e) =>
                  setForm({ ...form, transport: e.target.value })
                }
              />
            </div>

            <button
              onClick={analyzeDeal}
              className="w-full bg-blue-700 hover:bg-blue-800 mt-4 py-4 rounded-xl font-bold"
            >
              Analyze Deal
            </button>

            {result && (
              <div className="mt-5 bg-blue-500/10 border border-blue-400/30 rounded-2xl p-4">
                <h4 className="font-bold text-blue-300 mb-2">AI Result</h4>

                <p>
                  Buying Cost: ₹
                  {Math.round(result.profit.buyCost).toLocaleString("en-IN")}
                </p>
                <p>
                  Selling Value: ₹
                  {Math.round(result.profit.sellValue).toLocaleString("en-IN")}
                </p>
                <p>
                  Transport Cost: ₹
                  {Math.round(result.profit.transport).toLocaleString("en-IN")}
                </p>
                <p className="font-bold text-green-300 mt-2">
                  Net Profit: ₹
                  {Math.round(result.profit.netProfit).toLocaleString("en-IN")}
                </p>
                <p>Margin: {result.profit.margin}%</p>

                <p className="mt-3 font-bold">Suggested Buyers:</p>
                <ul className="list-disc ml-5 text-slate-200">
                  {result.buyers.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-green-300 font-bold"
                >
                  Send WhatsApp Message <MessageCircle size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="materials" className="bg-white text-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">
            Scrap Categories We Deal In
          </h2>

          <p className="text-slate-600 mb-10">
            Ferrous, non-ferrous, industrial cutting scrap and Chennai port
            container scrap.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((item) => (
              <div
                key={item}
                className="border rounded-2xl p-5 bg-slate-50 shadow-sm hover:shadow-lg transition"
              >
                <CheckCircle2 className="text-blue-700 mb-3" />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">
            Digital Scrap Supply Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Service
              icon={<Search />}
              title="Find Material"
              text="Capture material leads from suppliers, factories, yards and Chennai port sources."
            />
            <Service
              icon={<Bot />}
              title="AI Buyer Matching"
              text="Match material type with suitable buyers and trading platforms instantly."
            />
            <Service
              icon={<Calculator />}
              title="Profit Calculation"
              text="Calculate buying cost, selling value, transport cost and net profit."
            />
            <Service
              icon={<MessageCircle />}
              title="WhatsApp Offers"
              text="Generate professional buyer and supplier messages for faster deal closure."
            />
            <Service
              icon={<Truck />}
              title="Supply Tracking"
              text="Track loading, transport, payment and delivery status."
            />
            <Service
              icon={<ShieldCheck />}
              title="Verified Records"
              text="Organize suppliers, buyers, GST details, quotations and deal history."
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-700 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <Stat number="30+" label="Years Experience" />
          <Stat number="17+" label="Scrap Categories" />
          <Stat number="AI" label="Buyer Matching" />
          <Stat number="India" label="Supply Network" />
        </div>
      </section>

      <section className="bg-white text-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black mb-4">
              Chennai Port & Industrial Scrap Supply
            </h2>
            <p className="text-slate-600 leading-8">
              We focus on industrial scrap, ferrous and non-ferrous materials,
              cutting scrap, damaged containers and scrap containers. Our goal
              is to connect genuine material sources with reliable buyers using
              a faster digital process.
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8">
            <Ship className="text-blue-700 mb-4" size={42} />
            <h3 className="text-2xl font-black mb-3">
              Damage / Scrap Container Leads
            </h3>
            <p className="text-slate-600">
              Chennai port scrap container leads can be entered into the AI
              agent for buyer matching, quotation preparation and deal tracking.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-black">BHAWANI TRADERS</h3>
            <p className="text-slate-400 mt-3">
              Dealers in ferrous and non-ferrous scrap. AI-powered sourcing and
              supply support.
            </p>
          </div>

          <div className="space-y-3 text-slate-300">
            <p className="flex gap-3">
              <Phone className="text-blue-300" /> +91 81688 11099
            </p>
            <p className="flex gap-3">
              <Mail className="text-blue-300" /> bhawanitraders31@gmail.com
            </p>
            <p className="flex gap-3">
              <MapPin className="text-blue-300" /> Gummidipoondi, Manali New
              Town
            </p>
          </div>

          <div>
            <p className="font-bold">GST / CST</p>
            <p className="text-slate-400">33RSPS2216P1ZU</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition">
      <div className="text-blue-300 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 leading-7">{text}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-4xl font-black">{number}</p>
      <p className="font-semibold">{label}</p>
    </div>
  );
}
