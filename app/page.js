"use client";

import { useState } from "react";
import {
  Factory,
  Phone,
  Mail,
  Users,
  Truck,
  MessageCircle,
  X,
} from "lucide-react";

const materials = [
  "HMS-1",
  "HMS-2",
  "MS Scrap",
  "Copper Scrap",
  "Aluminium Scrap",
  "SS Scrap",
  "Nickel Scrap",
  "Lead Scrap",
  "Zinc Scrap",
  "TMT Cutting",
  "Sheet Cutting",
  "Plate Cutting",
  "Angle Cutting",
  "Damage Container",
];

const prices = [
  "Chennai HMS-1 Scrap | INR 36,500 / Ton",
  "Copper Scrap | INR 720 / Kg",
  "Aluminium Sheet Cutting | INR 185 / Kg",
  "SS Scrap 304 | INR 118 / Kg",
  "Lead Scrap | INR 168 / Kg",
];

export default function Home() {
  const [material, setMaterial] = useState("HMS-1");
  const [location, setLocation] = useState("Chennai");

  return (
    <main className="website">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-left">
            🟡 30+ Years Scrap Business Experience
          </div>

          <div className="top-right">
            <span>
              <Phone size={14} />
              +91 81688 11099
            </span>

            <span>
              <Mail size={14} />
              bhawanitraders31@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo-area">
            <div className="logo-icon">
              <Factory size={30} />
            </div>

            <div>
              <h1>BHAWANI TRADERS</h1>
              <p>Ferrous & Non-Ferrous Scrap Marketplace</p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#">Offers</a>
            <a href="#">Prices</a>
            <a href="#">Materials</a>
            <a href="#">AI Agent</a>
            <a href="#">Contact</a>
          </nav>

          <a
            href="https://wa.me/918168811099"
            target="_blank"
            className="enquire-btn"
          >
            Inquire Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tags">
              <span>✔ Verified Buyers & Sellers</span>
              <span>★ Trusted Scrap Supply</span>
              <span>✔ Chennai Port Leads</span>
            </div>

            <h2>
              Buy & Sell Scrap
              <br />
              with Bhawani
              <br />
              Traders
            </h2>

            <p>
              Connect with scrap buyers and sellers for aluminium,
              copper, SS, nickel, zinc, lead, HMS, MS cutting,
              TMT cutting and Chennai port damage container scrap.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start AI Matching
              </button>

              <button className="secondary-btn">
                Browse Offers
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="search-card">
            <h3>Search Scrap Materials</h3>

            <p>
              Find buyers, sellers and deal estimate
            </p>

            <select
              value={material}
              onChange={(e) =>
                setMaterial(e.target.value)
              }
            >
              {materials.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <input
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

            <button className="search-btn">
              Search / Analyze
            </button>

            <div className="info-grid">
              <div className="info-box">
                <Users size={24} />

                <div>
                  <h4>Buyer Network</h4>
                  <p>Pan India</p>
                </div>
              </div>

              <div className="info-box">
                <Truck size={24} />

                <div>
                  <h4>Supply Support</h4>
                  <p>Fast Deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE BAR */}
      <section className="price-bar">
        <div className="container price-inner">
          <div className="price-title">
            Scrap Prices
          </div>

          <div className="price-scroll">
            {prices.map((p) => (
              <div key={p} className="price-chip">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BhawaniBot />
    </main>
  );
}

function BhawaniBot() {
  const [open, setOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am Bhawani AI Assistant. Welcome to Bhawani Traders. Please tell me which scrap material you want to buy or sell.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "bot",
        text: "Thank you. Our team will contact you shortly regarding your enquiry.",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        className="chat-float"
        onClick={() => setOpen(true)}
      >
        <MessageCircle size={18} />
        Bhawani AI
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <div>
              <h3>Bhawani AI Assistant</h3>
              <p>Material enquiry assistant</p>
            </div>

            <button
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "bot"
                    ? "bot-message"
                    : "user-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              placeholder="Type enquiry..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>

          <a
            href="https://wa.me/918168811099"
            target="_blank"
            className="whatsapp-btn"
          >
            Send Enquiry on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}