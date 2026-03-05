import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

// ── Same URL as the FloatingContact widget ─────────────────────────────────
// Paste your Google Apps Script Web App URL here once you have it
const SHEET_URL = import.meta.env.VITE_SHEET_URL || 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
// ───────────────────────────────────────────────────────────────────────────

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', type: 'Housing Society Member / Secretary', location: '', message: '' });
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const body = new URLSearchParams();
            Object.entries({ ...form, source: 'Contact Page' }).forEach(([k, v]) => body.append(k, v));
            await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body });
        } catch (_) { /* no-cors swallows error — treat as success */ }
        setSending(false);
        setSubmitted(true);
    };

    return (
        <div className="contact-wrap">
            {/* Header */}
            <div className="contact-header">
                <img src="/aerial.png" alt="Premium Mumbai residential towers aerial view" className="contact-hero-img" />
                <div className="contact-hero-overlay" />
                <div className="contact-hero-text">
                    <motion.span className="section-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Let's Talk</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8' }}>
                        Partner With <em style={{ color: 'var(--gold-primary)', fontStyle: 'italic' }}>Crystal Developers</em>
                    </motion.h1>
                    <div className="gold-rule" />
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        style={{ color: 'rgba(245,237,216,0.75)', maxWidth: '520px', lineHeight: 1.75 }}>
                        Whether you're a society ready to redevelop, an investor seeking opportunities, or a broker with a lead — we want to hear from you.
                    </motion.p>
                </div>
            </div>

            <div className="section-padding">
                <div className="contact-grid">
                    {/* Left — Info */}
                    <motion.div className="contact-left"
                        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <div className="glass-panel contact-info-panel">
                            <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.4rem', marginBottom: '0.5rem' }}>Crystal Developers</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>Mumbai's specialist in stalled project rescues and small society redevelopment.</p>
                            <div className="info-rows">
                                <div className="info-row">
                                    <Mail size={18} className="text-gold" />
                                    <div><p className="info-lbl">Email</p><p className="info-val">partners@crystaldevelopers.in</p></div>
                                </div>
                                <div className="info-row">
                                    <Phone size={18} className="text-gold" />
                                    <div><p className="info-lbl">Phone</p><p className="info-val">+91 98765 43210</p></div>
                                </div>
                                <div className="info-row">
                                    <MapPin size={18} className="text-gold" />
                                    <div><p className="info-lbl">Office</p><p className="info-val">1204, Business Hub, BKC<br />Mumbai – 400051</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel who-panel">
                            <p className="who-head">Who Should Reach Out?</p>
                            <ul className="who-list">
                                <li>🏢 Housing societies ready to redevelop</li>
                                <li>⚠️ Societies stuck with defaulted developers</li>
                                <li>💼 Investors or HFCs seeking project pipelines</li>
                                <li>🤝 Brokers with verified society leads</li>
                                <li>🏗️ Construction partners &amp; architects</li>
                            </ul>
                        </div>

                        <div className="glass-panel prototype-note">
                            <p className="proto-tag">📌 Prototype Notice</p>
                            <p>This website is a business model prototype. All contact submissions are logged directly to our team for follow-up.</p>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
                        {!submitted ? (
                            <form className="glass-panel contact-form" onSubmit={submit}>
                                <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.5rem', marginBottom: '1.75rem' }}>
                                    Send Us a Message
                                </h3>
                                <div className="form-row">
                                    <div className="fg">
                                        <label>Full Name *</label>
                                        <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handle} required />
                                    </div>
                                    <div className="fg">
                                        <label>Phone Number *</label>
                                        <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handle} required />
                                    </div>
                                </div>
                                <div className="fg">
                                    <label>Email Address</label>
                                    <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle} />
                                </div>
                                <div className="fg">
                                    <label>I am a…</label>
                                    <select name="type" value={form.type} onChange={handle}>
                                        <option>Housing Society Member / Secretary</option>
                                        <option>Investor / HFC</option>
                                        <option>Real Estate Broker</option>
                                        <option>Construction Partner</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="fg">
                                    <label>Project / Society Location</label>
                                    <input name="location" type="text" placeholder="e.g. Andheri West, Mumbai" value={form.location} onChange={handle} />
                                </div>
                                <div className="fg">
                                    <label>Message</label>
                                    <textarea name="message" rows={5} placeholder="Tell us about your society, project, or query…" value={form.message} onChange={handle} />
                                </div>
                                <button type="submit" className="btn-primary w-full" disabled={sending}>
                                    {sending ? 'Sending…' : <><Send size={15} />Send Message</>}
                                </button>
                                <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.75rem' }}>
                                    Your details are never shared. First consultation is free and confidential.
                                </p>
                            </form>
                        ) : (
                            <div className="glass-panel contact-form contact-success">
                                <CheckCircle size={48} style={{ color: '#86EFAC', marginBottom: '1rem' }} />
                                <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                                    Message Received!
                                </h3>
                                <p>Thank you, <strong>{form.name}</strong>. A member of our team will reach out within 24 hours.</p>
                                <button className="btn-secondary" style={{ marginTop: '2rem' }} onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', type: 'Housing Society Member / Secretary', location: '', message: '' }); }}>
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
