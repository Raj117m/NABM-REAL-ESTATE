import { motion } from 'framer-motion';
import './BusinessModel.css';

const canvas = [
    {
        id: 'CS', label: 'Customer Segments', color: '#C9A84C',
        items: [
            'Small housing societies (<500 sq.mt) in Mumbai receiving no viable redevelopment offers',
            'Stalled project societies — original builder defaulted mid-construction',
            'Investors & buyers seeking redeveloped flats in well-located Mumbai plots',
        ],
        note: 'We target the neglected segment — too small for big developers, too complex for small ones.',
    },
    {
        id: 'VP', label: 'Value Propositions', color: '#E8C76A',
        items: [
            'Zero rental cost for members in stalled projects (RCC already complete)',
            'Competitive offers where no developer previously approached',
            'DA / PJS model — stamp duty only, no outright land purchase burden',
            'Deemed conveyance handled — land title legally transfers to society first',
            'Fast, transparent redevelopment with legally binding offer letters',
        ],
        note: 'We are the developer who shows up when everyone else has walked away.',
    },
    {
        id: 'CH', label: 'Channels', color: '#8B6914',
        items: [
            'This website — digital inquiry and project discovery portal',
            'Direct society outreach and referral broker network',
            'BMC and RERA record scanning for distressed projects',
            'Housing society federations and cooperative networks',
            'WhatsApp / digital outreach within residential communities',
        ],
        note: 'Backend: We proactively scan BMC records for lapsed CCs and RERA defaulters before they go public.',
    },
    {
        id: 'CR', label: 'Customer Relationships', color: '#C9A84C',
        items: [
            'Trust-first engagement — no pressure tactics',
            'Dedicated relationship manager per society',
            'Regular construction milestone updates (WhatsApp + reports)',
            'Complete document transparency at every legal stage',
            'Post-handover association management support',
        ],
        note: 'Redevelopment is deeply personal. We are the trusted partner, not just a contractor.',
    },
    {
        id: 'RS', label: 'Revenue Streams', color: '#E8C76A',
        items: [
            'Sale of free-sale component flats (primary revenue, 60–70%)',
            'Commercial ground-floor space sales and leasing',
            'Early buyer booking premiums during construction phase',
            'DA project management fees on joint venture structures',
        ],
        note: 'Free-sale flats = units beyond what society members get. Sold to market to fund construction + profit.',
    },
    {
        id: 'KR', label: 'Key Resources', color: '#8B6914',
        items: [
            'Capital and financial tie-ups with Housing Finance Companies (HFCs)',
            'In-house legal team for DA execution, BMC filings & conveyance',
            'Architectural and structural engineering partners',
            'Project management capabilities and site supervision',
            'Brand reputation and referral track record',
        ],
        note: '',
    },
    {
        id: 'KA', label: 'Key Activities', color: '#C9A84C',
        items: [
            'Proactive scouting — identifying target societies before competition',
            'Negotiating and executing DAs, MOUs & legal documents',
            'Obtaining BMC approvals, RERA registration & Occupancy Certificates',
            'Managing construction — especially resuming stalled RCC projects',
            'Marketing and selling the free-sale flat inventory',
        ],
        note: 'The proactive identification process is itself our competitive moat.',
    },
    {
        id: 'KP', label: 'Key Partnerships', color: '#E8C76A',
        items: [
            'Housing Finance Companies (HFCs) for project-level funding',
            'BMC-empanelled architects & structural engineers',
            'Legal consultants specialising in deemed conveyance & RERA',
            'Construction contractors with RCC and finishing expertise',
            'Real estate brokers for free-sale inventory sales',
        ],
        note: '',
    },
    {
        id: 'CO', label: 'Cost Structure', color: '#8B6914',
        items: [
            'Stamp duty only on DA/PJS projects (vs. full land cost on conveyance)',
            'Construction cost — significantly lower for stalled RCC-complete projects',
            'Transit rental allowances — waived when RCC is already done',
            'Legal, BMC approval & RERA compliance costs',
            'Marketing and sales for free-sale flat inventory',
            'Project management, overheads and contingency',
        ],
        note: 'Stalled projects carry materially lower cost structures — saving foundation + transit costs.',
    },
];

export default function BusinessModel() {
    return (
        <div className="bmc-wrap">
            <div className="bmc-page-header">
                <motion.span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Strategic Framework
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8', marginTop: '0.5rem' }}>
                    Business Model Canvas
                </motion.h1>
                <div className="gold-rule center" />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    style={{ color: 'rgba(245,237,216,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
                    How Crystal Developers creates, delivers, and captures value in Mumbai's stalled redevelopment market.
                </motion.p>
            </div>

            <div className="section-padding">
                <div className="bmc-grid">
                    {canvas.map((item, i) => (
                        <motion.div key={item.id} className="bmc-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ scale: 1.02 }}>
                            <div className="bmc-card-header" style={{ borderBottomColor: item.color + '40' }}>
                                <span className="bmc-id" style={{ color: item.color }}>{item.id}</span>
                                <h3 style={{ color: item.color }}>{item.label}</h3>
                            </div>
                            <ul className="bmc-list">
                                {item.items.map((pt, j) => (
                                    <li key={j}><span className="bmc-bullet" style={{ background: item.color }} />{pt}</li>
                                ))}
                            </ul>
                            {item.note && <p className="bmc-note">💡 {item.note}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
