import { motion } from 'framer-motion';
import { TrendingUp, Building2, Percent, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Revenue.css';

const streams = [
    {
        icon: <Building2 size={26} />, title: 'Free-Sale Flat Sales', pct: '60–70%', label: 'of total project revenue',
        desc: 'Beyond the area returned to society members, we retain "free-sale" flats to sell on the open market. In a 12-floor redevelopment, if members get 7 floors, we sell 5 floors. These units fund the entire project cost and generate our profit margin.'
    },
    {
        icon: <Layers size={26} />, title: 'Commercial Space', pct: '15–20%', label: 'supplementary revenue',
        desc: 'Ground-floor and podium commercial spaces command premium rates in Mumbai neighbourhoods. We retain and sell or lease these for additional revenue on top of the residential free-sale component.'
    },
    {
        icon: <Percent size={26} />, title: 'Early Buyer Premiums', pct: '8–12%', label: 'price premium vs later buyers',
        desc: 'Buyers who book during construction pay below-market rates but lock in at fixed prices. Staggered payment plans create early cashflow that funds ongoing construction, reducing our working capital requirements.'
    },
    {
        icon: <TrendingUp size={26} />, title: 'DA Project Management', pct: 'Fixed', label: 'fee on joint venture structures',
        desc: 'When we act as development manager rather than principal developer, we charge a PM fee on total construction value. Lower risk, predictable income — useful for societies with their own funding arrangements.'
    },
];

export default function Revenue() {
    return (
        <div className="rev-wrap">
            {/* Header */}
            <div className="rev-header blueprint-bg">
                <div className="rev-header-inner">
                    <motion.span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Monetisation Model
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8' }}>
                        How Crystal Developers Makes Money
                    </motion.h1>
                    <div className="gold-rule center" />
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        style={{ color: 'rgba(245,237,216,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
                        A multi-layered model — from project execution profits to a scalable platform revenue stream.
                    </motion.p>
                </div>
            </div>

            {/* Core Revenue Streams */}
            <div className="section-padding">
                <h2 className="rev-sub-head">Core Project Revenue</h2>
                <div className="gold-rule" />
                <div className="rev-grid">
                    {streams.map((s, i) => (
                        <motion.div key={i} className="rev-card glass-panel"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}>
                            <div className="rev-top">
                                <span className="text-gold">{s.icon}</span>
                                <div className="rev-pct-block">
                                    <span className="rev-pct">{s.pct}</span>
                                    <span className="rev-pct-l">{s.label}</span>
                                </div>
                            </div>
                            <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.2rem' }}>{s.title}</h3>
                            <p style={{ fontSize: '0.9rem' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Economics */}
            <div className="econ-strip">
                <div className="section-padding">
                    <h2 className="rev-sub-head" style={{ textAlign: 'center' }}>Illustrative Project Economics</h2>
                    <div className="gold-rule center" />
                    <div className="econ-grid">
                        {[
                            ['Project Type', 'Small Society — 450 sq.mt / G+7', false],
                            ['Total Buildable Area', '~8,000 sq.ft (with applicable FSI)', false],
                            ['Society Members Get', '4,800 sq.ft (existing + 20% extra area)', false],
                            ['Our Free-Sale Component', '3,200 sq.ft ≈ ₹3.8–5 Cr revenue', true],
                            ['Construction Cost', '₹2.0–2.5 Cr (incl. transit, legal, admin)', false],
                            ['Estimated Net Margin', '₹1.5–2.5 Cr per project', true],
                        ].map(([l, v, hl], i) => (
                            <motion.div key={i} className={`econ-box glass-panel ${hl ? 'econ-hl' : ''}`}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                                <p className="econ-l">{l as string}</p>
                                <p className="econ-v">{v as string}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="econ-disc">* Indicative figures for illustrative purposes. Actuals vary by location, FSI, and market conditions.</p>
                </div>
            </div>

            {/* Platform Revenue */}
            <div className="section-padding">
                <h2 className="rev-sub-head">Platform Revenue — The Website as a Business</h2>
                <div className="gold-rule" />
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                    Beyond project execution, this platform is designed to generate independent B2B revenue — connecting societies, developers, investors, and buyers at scale.
                </p>
                <div className="plat-grid">
                    {[
                        ['Lead Generation', 'Societies submit project details. Developers and investors pay a verified fee to access pre-screened leads of societies ready for redevelopment.'],
                        ['Project Listings', 'Developers list their DA-ready societies. Investors and buyers see the pipeline with live construction status updates.'],
                        ['Feasibility Reports', 'Paid independent feasibility and due diligence reports for societies that want an assessment before signing with any developer.'],
                        ['Compliance Monitoring SaaS', 'Monthly subscription for societies wanting independent monitoring of their developer\'s construction milestone and fund utilisation compliance.'],
                    ].map(([t, d], i) => (
                        <motion.div key={i} className="plat-card glass-panel"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <span className="plat-num">{String(i + 1).padStart(2, '0')}</span>
                            <h4>{t as string}</h4>
                            <p style={{ fontSize: '0.88rem' }}>{d as string}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="cta-strip">
                <h2>Ready to co-invest or partner?</h2>
                <p>Open to HFC partnerships, joint ventures, and institutional capital for pipeline projects.</p>
                <Link to="/contact" className="btn-primary">Talk to Our Team <ArrowRight size={16} /></Link>
            </div>
        </div>
    );
}
