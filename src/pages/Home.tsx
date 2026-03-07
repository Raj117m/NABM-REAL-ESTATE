import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle, Shield } from 'lucide-react';
import './Home.css';

const fadeUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.18 } } };
const inView = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.55, delay } });

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

            {/* ─────────────── INTRO STRIP ─────────────── */}
            <section id="intro" className="intro-strip">
                <div className="intro-inner">
                    {[['₹0', 'Rental cost for stalled project members'], ['<500', 'sq.mt plots — fast-cashflow redevelopments'], ['DA / PJS', 'Stamp duty only — capital-light model'], ['11', 'Step end-to-end redevelopment roadmap']].map(([num, lbl], i) => (
                        <motion.div key={i} className="intro-stat" {...inView(i * 0.1)}>
                            <span className="is-num">{num}</span>
                            <span className="is-label">{lbl}</span>
                        </motion.div>
                    ))}
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
                    <motion.div className="target-content" {...inView(0.1)}>
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
                    </motion.div>
                </div>
                <div className="target-block reverse">
                    <div className="target-img-wrap">
                        <img src="/aerial.png" alt="Aerial view Mumbai premium residential towers" className="target-img" />
                        <div className="target-img-overlay" />
                        <span className="target-img-label">Category 02 — Stalled Projects</span>
                    </div>
                    <motion.div className="target-content" {...inView(0.1)}>
                        <span className="section-tag" style={{ color: '#F59E0B', borderColor: '#F59E0B' }}>Category 02</span>
                        <h2>Stalled Projects —<br /><em>We Take Over</em></h2>
                        <div className="gold-rule" />
                        <p>Society signed a DA. Developer failed. Construction stopped — the RCC is nearly done. We take over the DA and deliver the project that was promised.</p>
                        <ul className="check-list">
                            <li><CheckCircle size={15} />RCC substantially complete — lower cost to finish</li>
                            <li><CheckCircle size={15} />Members pay <strong>zero rental</strong> — no transit needed</li>
                            <li><CheckCircle size={15} />We rescue the society from legal paralysis</li>
                        </ul>
                        <Link to="/finder" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>View Pipeline <ArrowRight size={14} /></Link>
                    </motion.div>
                </div>
            </section>

            {/* ── ACQUISITION MODELS ── */}
            <section className="acq-section">
                <div className="blueprint-bg acq-blueprint">
                    <motion.div className="acq-inner" {...inView(0.1)}>
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
                    </motion.div>
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
                <motion.div className="completed-content section-padding" {...inView(0.15)}>
                    <span className="section-tag">The Outcome</span>
                    <h2>From Neglected Plot<br />to <em>Landmark Address</em></h2>
                    <div className="gold-rule" />
                    <p>A finished, premium residential tower where families move in, societies thrive, and the neighbourhood transforms. This is what every society we work with can look forward to.</p>
                    <Link to="/contact" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Start a Conversation <ArrowRight size={16} /></Link>
                </motion.div>
            </section>


            {/* ── B2B PROTOTYPE PLATFORM ── */}
            <section className="embedded-section section-padding" style={{ background: '#0C0B08', paddingBottom: '4rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <motion.span className="section-tag" style={{ color: '#34D399', borderColor: '#34D399' }} {...inView()}>
                        Platform Features
                    </motion.span>
                    <motion.h2 className="section-title" {...inView(0.1)} style={{ color: '#FFF' }}>
                        Single Source of Truth
                    </motion.h2>
                    <div className="gold-rule center" />
                    <motion.p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }} {...inView(0.2)}>
                        Crystal Developers is more than a developer. We offer a high-fidelity web-based B2B platform connecting societies, investors, and homeowners through unprecedented compliance, SaaS-managed oversight, and transparency.
                    </motion.p>
                </div>

                <div className="bmc-inline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    <motion.div className="bmc-inline-card glass-panel" {...inView(0.1)} whileHover={{ scale: 1.02 }} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="bic-head" style={{ borderBottomColor: '#C9A84C40' }}>
                            <h4 style={{ color: '#C9A84C', fontSize: '1.2rem', margin: 0, fontFamily: "'Cormorant Garamond',Georgia,serif" }}>Rescue Tracker</h4>
                        </div>
                        <ul className="bic-list" style={{ flex: 1, marginBottom: '1.5rem' }}>
                            <li><span className="bic-dot" style={{ background: '#C9A84C' }} />Enter RERA number for a real-time dashboard</li>
                            <li><span className="bic-dot" style={{ background: '#C9A84C' }} />Track the 5-phase completion roadmap</li>
                            <li><span className="bic-dot" style={{ background: '#C9A84C' }} />Weekly site photos & structural audits</li>
                        </ul>
                        <Link to="/tracker" className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.75rem', marginTop: 'auto' }}>Launch Tracker</Link>
                    </motion.div>

                    <motion.div className="bmc-inline-card glass-panel" {...inView(0.2)} whileHover={{ scale: 1.02 }} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="bic-head" style={{ borderBottomColor: '#34D39940' }}>
                            <h4 style={{ color: '#34D399', fontSize: '1.2rem', margin: 0, fontFamily: "'Cormorant Garamond',Georgia,serif" }}>SaaS Compliance Portal</h4>
                        </div>
                        <ul className="bic-list" style={{ flex: 1, marginBottom: '1.5rem' }}>
                            <li><span className="bic-dot" style={{ background: '#34D399' }} />Secure login for society members</li>
                            <li><span className="bic-dot" style={{ background: '#34D399' }} />Real-time Escrow account status</li>
                            <li><span className="bic-dot" style={{ background: '#34D399' }} />Ensures DMA subscription transparency</li>
                        </ul>
                        <Link to="/funds" className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.75rem', borderColor: '#34D399', color: '#34D399', marginTop: 'auto' }}>View Escrow Sync</Link>
                    </motion.div>

                    <motion.div className="bmc-inline-card glass-panel" {...inView(0.3)} whileHover={{ scale: 1.02 }} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="bic-head" style={{ borderBottomColor: '#93C5FD40' }}>
                            <h4 style={{ color: '#93C5FD', fontSize: '1.2rem', margin: 0, fontFamily: "'Cormorant Garamond',Georgia,serif" }}>B2B Feasibility Tool</h4>
                        </div>
                        <ul className="bic-list" style={{ flex: 1, marginBottom: '1.5rem' }}>
                            <li><span className="bic-dot" style={{ background: '#93C5FD' }} />Upload DA, IOD, CC documents</li>
                            <li><span className="bic-dot" style={{ background: '#93C5FD' }} />Automated DMA model eligibility screening</li>
                            <li><span className="bic-dot" style={{ background: '#93C5FD' }} />Get a simulated Project Viability Score</li>
                        </ul>
                        <Link to="/feasibility" className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '0.75rem', borderColor: '#93C5FD', color: '#93C5FD', marginTop: 'auto' }}>Run Feasibility</Link>
                    </motion.div>
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
                    <p className="section-subtitle">The six pillars of how Crystal Developers creates and captures value in Mumbai's stalled redevelopment market.</p>

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
            <motion.section className="cta-strip" {...inView(0)}>
                <motion.h2 {...inView(0.1)}>Is your society waiting for the right developer?</motion.h2>
                <motion.p {...inView(0.2)}>First consultation is free and fully confidential. Approach us or let us come to you.</motion.p>
                <motion.div {...inView(0.3)}>
                    <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={16} /></Link>
                </motion.div>
            </motion.section>

        </div>
    );
}
