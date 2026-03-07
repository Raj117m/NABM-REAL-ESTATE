import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, PieChart, DollarSign, DownloadCloud } from 'lucide-react';
import './FundMonitor.css';

export default function FundMonitor() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setLoggedIn(true);
        }, 1200);
    };

    if (!loggedIn) {
        return (
            <div className="fm-login-wrap section-padding">
                <motion.div className="fm-login-box glass-panel" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <Shield size={36} className="text-gold" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '2rem', marginBottom: '0.5rem' }}>Compliance & Fund Portal</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Secure access to escrow accounts & DMA compliance.</p>

                    <form onSubmit={handleLogin} className="fm-form">
                        <input type="text" placeholder="Society Code (e.g. C-HTS-402)" required />
                        <input type="password" placeholder="Access PIN" required />
                        <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
                            {loading ? 'Authenticating...' : <><Lock size={16} /> Login to Portal</>}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fm-wrap section-padding">
            <motion.div className="fm-dashboard" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>

                <div className="fm-dash-head">
                    <div>
                        <span className="section-tag">Fund Monitoring Dashboard</span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '2.5rem', marginTop: '0.5rem' }}>Crystal Heights CHS</h1>
                    </div>
                    <div className="fm-auth-status">
                        <Lock size={14} className="text-gold" />
                        <span>Escrow Sync: Real-Time</span>
                    </div>
                </div>

                <div className="fm-grid">
                    {/* Escrow Balance Card */}
                    <div className="fm-card glass-panel fm-main-card">
                        <div className="fm-card-title"><DollarSign size={18} /> Master Escrow Account</div>
                        <div className="fm-balance-row">
                            <div className="fm-bal-item">
                                <span className="fm-lbl">Total Accumulated (Free-Sale)</span>
                                <span className="fm-val">₹ 14.20 Cr</span>
                            </div>
                            <div className="fm-bal-item">
                                <span className="fm-lbl">Current Drawdown (Phase 3)</span>
                                <span className="fm-val text-red">- ₹ 2.85 Cr</span>
                            </div>
                            <div className="fm-bal-item">
                                <span className="fm-lbl">Net Escrow Balance</span>
                                <span className="fm-val text-green">₹ 11.35 Cr</span>
                            </div>
                        </div>
                        <div className="fm-progress">
                            <div className="fm-bar" style={{ width: '75%' }}></div>
                            <span className="fm-pct">75% Cap Remaining</span>
                        </div>
                    </div>

                    {/* DMA Compliance Card */}
                    <div className="fm-card glass-panel flex-col">
                        <div className="fm-card-title"><Shield size={18} /> DMA Compliance & SaaS Fees</div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            This portal is powered by our <strong>subscription-based compliance monitoring SaaS</strong>.
                            Under the Development Manager (DMA) structure, societies track construction milestones transparently while we execute with lower financial risk.
                        </p>
                        <div className="fm-fee-breakdown">
                            <div className="fee-line"><span>SaaS Recurring Fee</span><span>Paid (Q3)</span></div>
                            <div className="fee-line"><span>Fixed PM Execution Fee</span><span>4.5%</span></div>
                            <div className="fee-line"><span>Audit Health</span><span className="text-green">Compliant</span></div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="fm-card glass-panel fm-span-2">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <div className="fm-card-title" style={{ marginBottom: 0 }}><PieChart size={18} /> Escrow Drawdowns (Last 30 Days)</div>
                            <button className="doc-btn"><DownloadCloud size={14} /> Export Report</button>
                        </div>

                        <div className="fm-table">
                            <div className="fm-th">
                                <span>Date</span>
                                <span>Milestone</span>
                                <span>Approver (RERA Architect)</span>
                                <span>Amount</span>
                            </div>
                            <div className="fm-tr">
                                <span>Mar 02, 2026</span>
                                <span>Slab 6 Casting Complete</span>
                                <span>V. Patel & Associates</span>
                                <span className="text-red">₹ 85.00 L</span>
                            </div>
                            <div className="fm-tr">
                                <span>Feb 15, 2026</span>
                                <span>MEP Procurement - Phase 1</span>
                                <span>V. Patel & Associates</span>
                                <span className="text-red">₹ 120.50 L</span>
                            </div>
                            <div className="fm-tr">
                                <span>Feb 05, 2026</span>
                                <span>SaaS Compliance & PM Fee</span>
                                <span>Auto-Debited</span>
                                <span className="text-red">₹ 8.50 L</span>
                            </div>
                            <div className="fm-tr">
                                <span>Jan 28, 2026</span>
                                <span>Free-Sale Unit 402 Booking</span>
                                <span>RERA Escrow Account</span>
                                <span className="text-green">+₹ 240.00 L</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
