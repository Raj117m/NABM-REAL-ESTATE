import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Activity, FileText, Camera, CheckCircle, Clock } from 'lucide-react';
import './Tracker.css';

export default function Tracker() {
    const [rera, setRera] = useState('');
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearching(true);
        setTimeout(() => {
            setSearching(false);
            setResults(true);
        }, 1200);
    };

    return (
        <div className="tracker-wrap">
            <div className="blueprint-bg tracker-header">
                <div className="section-padding" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Stakeholder Portal
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8', marginTop: '1rem', marginBottom: '1rem' }}>
                        Rescue Tracker
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        style={{ color: 'rgba(245,237,216,0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        A single source of truth for stalled project stakeholders. Enter your RERA registration number to view the 5-phase completion roadmap, live structural audits, and weekly site photos.
                    </motion.p>

                    <form className="tracker-search glass-panel" onSubmit={handleSearch}>
                        <Search size={20} className="ts-icon" />
                        <input
                            type="text"
                            placeholder="Enter MAHARERA Number (e.g. P518000XXXXX)"
                            value={rera}
                            onChange={(e) => setRera(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-primary" disabled={searching}>
                            {searching ? 'Locating...' : 'Track Project'}
                        </button>
                    </form>
                </div>
            </div>

            {results && (
                <motion.div className="tracker-dashboard section-padding"
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

                    <div className="td-header">
                        <div>
                            <h2>Crystal Heights (Stalled Project Rescue)</h2>
                            <p className="text-gold">RERA NO: {rera.toUpperCase() || 'P51800012345'} • Location: Andheri West</p>
                        </div>
                        <div className="td-status glass-panel">
                            <span className="td-status-indicator pulse"></span>
                            Live Execution Mode
                        </div>
                    </div>

                    <div className="td-grid">
                        {/* 5-Phase Roadmap */}
                        <div className="td-card glass-panel td-span-2">
                            <h3><Activity size={18} /> 5-Phase Completion Roadmap</h3>
                            <div className="roadmap">
                                {[
                                    { name: 'Legal Audit & DA Transfer', status: 'done', desc: 'Title cleared, MOFA to RERA transition.' },
                                    { name: 'Structural Integrity Audit', status: 'done', desc: 'NDT testing on existing RCC framework.' },
                                    { name: 'BMC Re-Approvals & CC', status: 'active', desc: 'Amended plans approved, CC re-issued.' },
                                    { name: 'Construction Resumption', status: 'pending', desc: 'MEP and brickwork commencement.' },
                                    { name: 'OC & Handover', status: 'pending', desc: 'Final occupancy cert and society formation.' },
                                ].map((phase, i) => (
                                    <div key={i} className={`rm-phase ${phase.status}`}>
                                        <div className="rm-icon">
                                            {phase.status === 'done' && <CheckCircle size={16} />}
                                            {phase.status === 'active' && <div className="rm-active-dot" />}
                                            {phase.status === 'pending' && <Clock size={16} />}
                                        </div>
                                        <div className="rm-content">
                                            <h4>Phase 0{i + 1}: {phase.name}</h4>
                                            <p>{phase.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="td-sidebar">
                            <div className="td-card glass-panel">
                                <h3><Camera size={18} /> Weekly Site Audit</h3>
                                <div className="site-photo">
                                    <img src="/stalled.png" alt="Site progress" />
                                    <div className="photo-cap">Week 12 • RCC Reinforcement</div>
                                </div>
                                <div className="site-photo">
                                    <img src="/aerial.png" alt="Site progress" />
                                    <div className="photo-cap">Week 11 • Scaffolding setup</div>
                                </div>
                            </div>

                            <div className="td-card glass-panel">
                                <h3><FileText size={18} /> Official Reports</h3>
                                <div className="doc-list">
                                    <button className="doc-btn"><FileText size={14} /> Structural NDT Report (PDF)</button>
                                    <button className="doc-btn"><FileText size={14} /> Re-issued IOD/CC (PDF)</button>
                                    <button className="doc-btn"><FileText size={14} /> Escrow Drawdown #2 (PDF)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
