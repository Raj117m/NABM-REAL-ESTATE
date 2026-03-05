import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle, Shield, Building2, TrendingUp, Percent, Layers } from 'lucide-react';
import './Home.css';

const fadeUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.18 } } };

/* ── Business Model Canvas data ── */
const canvas = [
    {
        id: 'CS', label: 'Customer Segments', color: '#C9A84C',
        items: ['Small housing societies (<500 sq.mt) left out by big developers', 'Stalled project societies — original builder defaulted', 'Investors & flat buyers seeking redeveloped properties in Mumbai']
    },
    {
        id: 'VP', label: 'Value Propositions', color: '#E8C76A',
        items: ['Zero rental cost for stalled project members (RCC already done)', 'DA / PJS model — stamp duty only, no land purchase burden', 'Competitive offers where no developer previously approached', 'Full legal handling: deemed conveyance, BMC, RERA']
    },
    {
        id: 'RS', label: 'Revenue Streams', color: '#C9A84C',
        items: ['Sale of free-sale flats (60–70% of revenue)', 'Commercial ground-floor space sales', 'Early buyer booking premiums during construction', 'DA project management fees on JV structures']
    },
    {
        id: 'KA', label: 'Key Activities', color: '#E8C76A',
        items: ['Proactive society scouting via BMC & RERA records', 'Negotiating & executing DAs and legal documents', 'BMC approvals, RERA registration, OC', 'Managing construction — especially stalled RCC projects', 'Marketing & selling the free-sale flat inventory']
    },
    {
        id: 'KP', label: 'Key Partnerships', color: '#C9A84C',
        items: ['Housing Finance Companies (HFCs) for funding', 'BMC-empanelled architects & structural engineers', 'Legal consultants: conveyance & RERA specialists', 'Real estate brokers for free-sale inventory']
    },
    {
        id: 'CO', label: 'Cost Structure', color: '#E8C76A',
        items: ['Stamp duty only on DA/PJS projects', 'Construction cost (lower for RCC-complete stalled projects)', 'Transit rental allowances (waived for completed RCC)', 'Legal, approval & RERA compliance costs']
    },
];

/* ── Revenue streams ── */
const streams = [
    {
        icon: <Building2 size={24} />, title: 'Free-Sale Flats', pct: '60–70%',
        desc: 'We retain flats beyond what society members receive and sell them on the open market. These fund the entire project.'
    },
    {
        icon: <Layers size={24} />, title: 'Commercial Space', pct: '15–20%',
        desc: 'Ground-floor and podium commercial units command premium rates. We retain and sell or lease these.'
    },
    {
        icon: <Percent size={24} />, title: 'Early Buyer Premium', pct: '+8–12%',
        desc: 'Pre-sales during construction create early cashflow and reduce working capital requirements.'
    },
    {
        icon: <TrendingUp size={24} />, title: 'Project Management Fee', pct: 'Fixed',
        desc: 'On JV structures where we act as development manager — predictable, low-risk income.'
    },
];

export default function Home() {
    return (
        <div className="home-wrap">

            {/* ── HERO ── */}
            <section className="hero">
                <div className="hero-img" />
                <div className="hero-overlay" />
                <motion.div className="hero-inner" initial="initial" animate="animate" variants={stagger}>
                    <motion.span className="section-tag" variants={fadeUp}>Mumbai · Redevelopment Specialists</motion.span>
                    <motion.h1 className="hero-title" variants={fadeUp}>
                        We Rescue<br />
                        <em>Abandoned</em> Projects.<br />
                        We Rebuild <em>Communities.</em>
                    </motion.h1>
                    <motion.div className="hero-rule" variants={fadeUp} />
                    <motion.p className="hero-sub" variants={fadeUp}>
                        When builders run out of funds and projects stall mid-construction,
                        we step in — acquire the DA, rescue the society, and deliver the homes
                        that were promised but never built.
                    </motion.p>
                    <motion.div className="hero-ctas" variants={fadeUp}>
                        <Link to="/finder" className="btn-primary">View Live Projects <ArrowRight size={16} /></Link>
                        <Link to="/process" className="btn-secondary">Our Process</Link>
                    </motion.div>
                </motion.div>
                <a href="#intro" className="scroll-hint"><ChevronDown size={24} /></a>
            </section>

            {/* ── STATS STRIP ── */}
            <section id="intro" className="intro-strip">
                <div className="intro-inner">
                    <div className="intro-stat"><span className="is-num">₹0</span><span className="is-label">Rental cost for stalled project members</span></div>
                    <div className="is-div" />
                    <div className="intro-stat"><span className="is-num">&lt;500</span><span className="is-label">sq.mt plots — fast-cashflow redevelopments</span></div>
                    <div className="is-div" />
                    <div className="intro-stat"><span className="is-num">DA / PJS</span><span className="is-label">Stamp duty only — capital-light model</span></div>
                    <div className="is-div" />
                    <div className="intro-stat"><span className="is-num">11</span><span className="is-label">Step end-to-end redevelopment roadmap</span></div>
                </div>
            </section>

            {/* ── TWO TARGETS ── */}
            <section className="targets-section">
                <div className="target-block">
                    <div className="target-img-wrap">
                        <img src="/society.png" alt="Mumbai housing cooperative society" className="target-img" />
                        <div className="target-img-overlay" />
                        <span className="target-img-label">Category 01 — Small Societies</span>
                    </div>
                    <div className="target-content">
                        <span className="section-tag">Category 01</span>
                        <h2>Small Societies<br /><em>Left Behind</em></h2>
                        <div className="gold-rule" />
                        <p>Societies under <strong>500 sq.mt</strong> with no viable redevelopment offers. Big developers ignore them — we don't. Members waiting for years with no takers finally get a genuine deal.</p>
                        <ul className="check-list">
                            <li><CheckCircle size={15} />Quick to redevelop — fast cashflow generation</li>
                            <li><CheckCircle size={15} />DA / PJS model: stamp duty only</li>
                            <li><CheckCircle size={15} />Deemed conveyance — land title transfers to society</li>
                            <li><CheckCircle size={15} />Members get additional area on top of existing</li>
                        </ul>
                        <Link to="/process" className="btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>See Process <ArrowRight size={14} /></Link>
                    </div>
                </div>
                <div className="target-block reverse">
                    <div className="target-img-wrap">
                        <img src="/aerial.png" alt="Aerial view Mumbai premium residential towers" className="target-img" />
                        <div className="target-img-overlay" />
                        <span className="target-img-label">Category 02 — Stalled Projects</span>
                    </div>
                    <div className="target-content">
                        <span className="section-tag" style={{ color: '#F59E0B', borderColor: '#F59E0B' }}>Category 02</span>
                        <h2>Stalled Projects —<br /><em>We Take Over</em></h2>
                        <div className="gold-rule" />
                        <p>Society signed a DA. Developer failed. Construction stopped mid-way — 8 of 12 slabs already complete. The RCC is nearly done. We take over the DA and finish what was started.</p>
                        <ul className="check-list">
                            <li><CheckCircle size={15} />RCC substantially complete — lower cost to finish</li>
                            <li><CheckCircle size={15} />Members pay <strong>zero rental</strong> — no transit needed</li>
                            <li><CheckCircle size={15} />We rescue the society from legal paralysis</li>
                            <li><CheckCircle size={15} />Free-sale component funds full construction</li>
                        </ul>
                        <Link to="/finder" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Find Stalled Projects <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            {/* ── ACQUISITION MODELS ── */}
            <section className="acq-section">
                <div className="blueprint-bg acq-blueprint">
                    <div className="acq-inner">
                        <div className="acq-text">
                            <span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }}>Land Acquisition</span>
                            <h2 style={{ color: '#F5EDD8' }}>Two Ways We<br /><em>Acquire Land</em></h2>
                            <div className="gold-rule" />
                            <div className="acq-cards">
                                <div className="acq-card">
                                    <Shield size={22} className="text-gold" />
                                    <h4>Conveyance</h4>
                                    <p>Outright purchase — full ownership. In <strong>deemed conveyance</strong>, legal title formally transfers from the original developer to the society itself before any work begins.</p>
                                </div>
                                <div className="acq-card">
                                    <Shield size={22} style={{ color: '#93C5FD' }} />
                                    <h4>Development Agreement</h4>
                                    <p>Contract to redevelop within a set timeframe. Land stays with the society. <strong>PJS DA model</strong> — only stamp duty payable. Capital-light entry for &lt;500 sq.mt plots.</p>
                                </div>
                            </div>
                        </div>
                        <div className="acq-blueprint-img">
                            <img src="/blueprint.png" alt="Architectural blueprint floor plan" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LOBBY CTA ── */}
            <section className="handover-section">
                <div className="handover-img-wrap">
                    <img src="/lobby.png" alt="Premium residential lobby" className="handover-img" />
                    <div className="handover-overlay" />
                    <div className="handover-content">
                        <span className="section-tag">The Promise We Keep</span>
                        <h2>Every Project Ends<br />with <em>Keys in Hand.</em></h2>
                        <div className="gold-rule" />
                        <p>From initial offer letter to handing over upgraded flats — we walk the full journey. Existing members get their new homes. Buyers get their purchases. Everyone goes home.</p>
                        <Link to="/contact" className="btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* ── COMPLETED TOWER ── */}
            <section className="completed-section">
                <div className="completed-img-wrap">
                    <img src="/completed.png" alt="Luxury completed residential development Mumbai" className="completed-img" />
                </div>
                <div className="completed-content section-padding">
                    <span className="section-tag">The Outcome</span>
                    <h2>From Abandoned Skeleton<br />to <em>Landmark Address</em></h2>
                    <div className="gold-rule" />
                    <p>This is what we build towards. A finished, premium residential tower where families move in, societies thrive, and the neighbourhood transforms. Free-sale flats fund the entire project — a self-sustaining cycle.</p>
                    <a href="#revenue-model" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>See Revenue Model <ArrowRight size={16} /></a>
                </div>
            </section>

            {/* ── REVENUE MODEL ── */}
            <section id="revenue-model" className="embedded-section">
                <div className="section-padding">
                    <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        Monetisation Model
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        How ReBuilt Makes Money
                    </motion.h2>
                    <div className="gold-rule" />
                    <p className="section-subtitle">We earn through four distinct channels — all funded by the project itself, not from society members.</p>

                    <div className="rev-inline-grid">
                        {streams.map((s, i) => (
                            <motion.div key={i} className="rev-inline-card glass-panel"
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="ric-top">
                                    <span className="text-gold">{s.icon}</span>
                                    <span className="ric-pct">{s.pct}</span>
                                </div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Project Economics */}
                    <div className="econ-inline">
                        <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Illustrative Project Economics
                        </h3>
                        <div className="econ-inline-grid">
                            {[
                                ['Project Type', 'Small Society — 450 sq.mt / G+7', false],
                                ['Total Buildable Area', '~8,000 sq.ft (with applicable FSI)', false],
                                ['Society Members Get', '4,800 sq.ft (existing + 20% extra)', false],
                                ['Our Free-Sale Component', '3,200 sq.ft ≈ ₹3.8–5 Cr revenue', true],
                                ['Construction Cost', '~₹2.0–2.5 Cr incl. transit & legal', false],
                                ['Estimated Net Margin', '₹1.5–2.5 Cr per project', true],
                            ].map(([l, v, hl], i) => (
                                <div key={i} className={`econ-cell glass-panel ${hl ? 'econ-hl' : ''}`}>
                                    <p className="econ-l">{l as string}</p>
                                    <p className="econ-v">{v as string}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.75rem', fontStyle: 'italic' }}>
                            * Indicative numbers for illustrative purposes only. Actuals vary by location, FSI, and market.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BUSINESS MODEL CANVAS ── */}
            <section id="business-model" className="embedded-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="section-padding">
                    <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        Strategic Framework
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Business Model Canvas
                    </motion.h2>
                    <div className="gold-rule" />
                    <p className="section-subtitle">The six pillars of how ReBuilt creates and captures value in Mumbai's stalled redevelopment market.</p>

                    <div className="bmc-inline-grid">
                        {canvas.map((item, i) => (
                            <motion.div key={item.id} className="bmc-inline-card glass-panel"
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                whileHover={{ scale: 1.02 }}>
                                <div className="bic-head" style={{ borderBottomColor: item.color + '30' }}>
                                    <span className="bic-id" style={{ color: item.color }}>{item.id}</span>
                                    <h4 style={{ color: item.color }}>{item.label}</h4>
                                </div>
                                <ul className="bic-list">
                                    {item.items.map((pt, j) => (
                                        <li key={j}><span className="bic-dot" style={{ background: item.color }} />{pt}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="cta-strip">
                <h2>Is your society waiting for the right developer?</h2>
                <p>First consultation is free and fully confidential. Approach us or let us come to you.</p>
                <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={16} /></Link>
            </section>

        </div>
    );
}
