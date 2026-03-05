import { useState } from 'react';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';
import './FloatingContact.css';

// ── URL is set in .env as VITE_SHEET_URL ─────────────────────────────────────
const SHEET_URL = import.meta.env.VITE_SHEET_URL || 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
// ─────────────────────────────────────────────────────────────────────────────

export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', email: '', type: 'Society Member', location: '', message: '' });

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const body = new URLSearchParams();
            Object.entries({ ...form, source: 'Floating Contact Widget' }).forEach(([k, v]) => body.append(k, v));
            await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body });
        } catch (_) { /* no-cors swallows the response — treat as success */ }
        setSending(false);
        setSubmitted(true);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                id="floating-contact-btn"
                className={`fc-btn ${open ? 'fc-btn-open' : ''}`}
                onClick={() => { setOpen(o => !o); setSubmitted(false); }}
                aria-label="Contact us"
            >
                {open ? <X size={22} /> : <><MessageCircle size={20} />Let's Talk</>}
            </button>

            {/* Popup */}
            {open && (
                <div className="fc-popup glass-panel">
                    {!submitted ? (
                        <>
                            <div className="fc-popup-head">
                                <h4>Reach Out to Crystal Developers</h4>
                                <p>Quick message — we respond within 24 hours.</p>
                            </div>
                            <form onSubmit={submit} className="fc-form">
                                <input name="name" placeholder="Your Name *" value={form.name} onChange={handle} required />
                                <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handle} required />
                                <input name="email" placeholder="Email Address" value={form.email} onChange={handle} type="email" />
                                <select name="type" value={form.type} onChange={handle}>
                                    <option>Society Member</option>
                                    <option>Secretary / Chairman</option>
                                    <option>Real Estate Broker</option>
                                    <option>Investor / HFC</option>
                                    <option>Other</option>
                                </select>
                                <input name="location" placeholder="Society / Location" value={form.location} onChange={handle} />
                                <textarea name="message" placeholder="Brief message…" rows={3} value={form.message} onChange={handle} />
                                <button type="submit" disabled={sending} className="fc-submit">
                                    {sending ? 'Sending…' : <><Send size={14} />Send Message</>}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="fc-success">
                            <CheckCircle size={40} className="fc-check" />
                            <h4>Message Received!</h4>
                            <p>Thank you. A member of our team will reach out to you within 24 hours.</p>
                            <button className="fc-reset" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', type: 'Society Member', location: '', message: '' }); setOpen(false); }}>
                                Close
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
