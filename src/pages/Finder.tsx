import { useState } from 'react';
import { Search, Filter, AlertTriangle, CheckCircle, MapPin, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import './Finder.css';

interface Project {
    id: number;
    name: string;
    type: 'Stalled' | 'Small Society';
    status: string;
    location: string;
    area: string;
    rccDone?: boolean;
    acquisitionType: string;
    feasibility: string;
}

const projects: Project[] = [
    { id: 1, name: 'Sunshine Heights CHS', type: 'Stalled', status: '8/12 Slabs Complete', location: 'Andheri West', area: '1,200 sq.mt', rccDone: true, acquisitionType: 'DA Takeover', feasibility: 'High' },
    { id: 2, name: 'Green Valley Co-op', type: 'Small Society', status: 'Pre-1980 — No Offers', location: 'Borivali East', area: '420 sq.mt', rccDone: false, acquisitionType: 'DA / PJS Model', feasibility: 'High' },
    { id: 3, name: 'Oceanic Towers (Stalled)', type: 'Stalled', status: 'Foundation + 2 Slabs', location: 'Dadar', area: '2,000 sq.mt', rccDone: false, acquisitionType: 'New DA Required', feasibility: 'Medium' },
    { id: 4, name: 'Rose Villa CHS', type: 'Small Society', status: 'Dilapidated — Left Out', location: 'Bandra West', area: '280 sq.mt', rccDone: false, acquisitionType: 'DA / PJS Model', feasibility: 'High' },
    { id: 5, name: 'Metro Residency Stalled', type: 'Stalled', status: '10/12 Slabs Complete', location: 'Mulund West', area: '900 sq.mt', rccDone: true, acquisitionType: 'DA Takeover', feasibility: 'Very High' },
    { id: 6, name: 'Sunrise Garden CHS', type: 'Small Society', status: 'Old Bldg — Left Behind', location: 'Ghatkopar', area: '380 sq.mt', rccDone: false, acquisitionType: 'Conveyance or DA', feasibility: 'High' },
];

const fColour: Record<string, string> = { 'Very High': '#E8C76A', High: '#C9A84C', Medium: '#F59E0B' };

export default function Finder() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const list = projects.filter(p =>
        (filter === 'All' || p.type === filter) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="finder-wrap">

            {/* Header */}
            <div className="finder-header blueprint-bg">
                <div className="finder-header-inner">
                    <motion.span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Project Discovery Engine
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8' }}>
                        Live Project Pipeline
                    </motion.h1>
                    <div className="gold-rule center" />
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        style={{ color: 'rgba(245,237,216,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
                        We identify distressed societies and stalled sites before they reach the open market — through BMC records, RERA defaults, and ground-level networks.
                    </motion.p>
                </div>
            </div>

            <div className="section-padding">
                {/* Controls */}
                <div className="finder-controls glass-panel">
                    <div className="finder-search">
                        <Search size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                        <input type="text" placeholder="Search by name or location…" value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                    <div className="finder-filter">
                        <Filter size={15} style={{ color: 'var(--gold-primary)' }} />
                        <select value={filter} onChange={e => setFilter(e.target.value)}>
                            <option value="All">All Projects</option>
                            <option value="Stalled">Stalled Projects</option>
                            <option value="Small Society">Small Societies</option>
                        </select>
                    </div>
                    <div className="finder-legend">
                        <span className="fl stalled">■ Stalled</span>
                        <span className="fl society">■ Small Society</span>
                    </div>
                </div>

                {/* Cards */}
                <div className="proj-grid">
                    {list.map((p, i) => (
                        <motion.div key={p.id} className="proj-card glass-panel"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                            <div className="pc-head">
                                <h3>{p.name}</h3>
                                <span className={`pc-badge ${p.type === 'Stalled' ? 'b-stalled' : 'b-society'}`}>{p.type}</span>
                            </div>
                            <div className="pc-meta">
                                <span><MapPin size={12} /> {p.location}</span>
                                <span><Layers size={12} /> {p.area}</span>
                            </div>
                            <div className="pc-details">
                                <div className="pc-det"><p className="pcd-l">Status</p><p className="pcd-v">{p.status}</p></div>
                                <div className="pc-det"><p className="pcd-l">Acquisition</p><p className="pcd-v">{p.acquisitionType}</p></div>
                            </div>
                            {p.rccDone && (
                                <div className="pc-alert green"><CheckCircle size={13} />RCC Substantially Complete — No Transit Cost</div>
                            )}
                            {p.type === 'Stalled' && !p.rccDone && (
                                <div className="pc-alert amber"><AlertTriangle size={13} />Builder Defaulted — Early Stage Site</div>
                            )}
                            <div className="pc-feas">
                                <span className="pcf-l">Feasibility</span>
                                <span className="pcf-v" style={{ color: fColour[p.feasibility] || '#C9A84C' }}>● {p.feasibility}</span>
                            </div>
                            <button className="btn-primary w-full" style={{ marginTop: '1rem', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                Request Feasibility Report
                            </button>
                        </motion.div>
                    ))}
                    {list.length === 0 && <p className="no-results">No projects match your search.</p>}
                </div>

                {/* Backend strip */}
                <div className="backend-section">
                    <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                        How We <em style={{ color: 'var(--gold-primary)', fontStyle: 'italic' }}>Find</em> These Projects
                    </h2>
                    <div className="gold-rule" />
                    <div className="backend-grid">
                        {[
                            ['BMC Record Scanning', 'We analyse Brihanmumbai Municipal Corporation records for buildings with lapsed Commencement Certificates and stalled construction approvals.'],
                            ['RERA Defaulter Watch', 'We track RERA-registered projects that have missed milestone deadlines — pre-empting formal legal actions by societies.'],
                            ['Society Network', 'Cooperative housing federation members and legal channels surface opportunities months before any formal process begins.'],
                            ['Broker Tie-ups', 'Empanelled brokers flag micro-market leads — small societies with frustrated members who have received no good offers.'],
                        ].map(([t, d], i) => (
                            <motion.div key={i} className="backend-card glass-panel"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <span className="backend-num">{String(i + 1).padStart(2, '0')}</span>
                                <h4>{t}</h4>
                                <p>{d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
