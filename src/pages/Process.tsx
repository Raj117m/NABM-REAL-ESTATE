import { motion } from 'framer-motion';
import { CheckCircle, FileText, Stamp, Building2, AlertTriangle } from 'lucide-react';
import './Process.css';

const steps = [
    {
        id: 1, phase: 'Discovery',
        title: 'Identifying the Right Society',
        desc: 'We proactively scout small societies (<500 sq.mt) across Mumbai — specifically those left out by big developers with no good offers on the table. Simultaneously, we track RERA-defaulted projects with half-built structures.',
        icon: <Building2 size={18} />,
    },
    {
        id: 2, phase: 'Approach',
        title: 'Making Initial Contact',
        desc: 'Either we approach the society with a competitive, transparent offer — or they come to us after hearing our track record. We prioritise societies that have been waiting for years with no takers.',
        icon: <CheckCircle size={18} />,
    },
    {
        id: 3, phase: 'Offer',
        title: 'Initial Offer Letter',
        desc: 'We issue a formal offer letter specifying: (1) Additional area each member will receive, (2) The free-sale component we retain for revenue, (3) Project completion timeline. All commitments in writing from Day 1.',
        icon: <FileText size={18} />,
    },
    {
        id: 4, phase: 'Negotiation',
        title: 'Finalization of Terms',
        desc: 'Both parties negotiate area ratios, transit rental terms, construction timelines, and quality specs. Society members vote and pass a formal resolution to proceed. Everything documented and witnessed.',
        icon: <CheckCircle size={18} />,
    },
    {
        id: 5, phase: 'Legal',
        title: 'MOU & Development Agreement',
        desc: 'We execute a legally binding MOU, followed by the formal DA. Under the PJS model, only stamp duty is payable — no outright land purchase cost. For deemed conveyance societies, land title is first transferred to the society before we sign.',
        icon: <Stamp size={18} />,
        highlight: true,
    },
    {
        id: 6, phase: 'Approvals',
        title: 'BMC Plan Submission',
        desc: 'Architects prepare IOD (Intimation of Disapproval) plans per BMC regulations. We file for building approval, IOD, and all statutory clearances from the Municipal Corporation. Our team handles all government liaison.',
        icon: <FileText size={18} />,
    },
    {
        id: 7, phase: 'Approvals',
        title: 'Obtaining All Approvals',
        desc: 'We secure the Commencement Certificate (CC), RERA registration, and environmental clearances. Society is kept informed at every step. No approvals, no construction — we never cut corners.',
        icon: <CheckCircle size={18} />,
    },
    {
        id: 8, phase: 'Construction',
        title: 'Society Vacates the Land',
        desc: 'Members move to transit accommodation funded by us — except for stalled projects where RCC is already substantially done. In those cases, members stay put and save on years of rental costs. Existing structure demolished safely.',
        icon: <AlertTriangle size={18} />,
        highlight: true,
    },
    {
        id: 9, phase: 'Construction',
        title: 'Construction Commences',
        desc: 'For stalled projects: RCC is already largely complete (e.g. 8 of 12 slabs). We resume from that point — dramatically reducing both cost and timeline. For fresh redevelopments: we break ground with a modern, approved design.',
        icon: <Building2 size={18} />,
        highlight: true,
    },
    {
        id: 10, phase: 'Completion',
        title: 'Project Completion & OC',
        desc: 'Full structural, finishing, amenity, and infrastructure work is completed as per the approved plan. Occupancy Certificate (OC) is obtained from BMC. Snag inspections and quality checks before handover.',
        icon: <CheckCircle size={18} />,
    },
    {
        id: 11, phase: 'Handover',
        title: 'Keys in Hand',
        desc: 'Existing society members receive their new upgraded flats including the additional area promised. Buyers who purchased from the free-sale component also take possession simultaneously. All legal transfer documentation executed.',
        icon: <CheckCircle size={18} />,
    },
];

export default function Process() {
    return (
        <div className="process-wrap">

            {/* Header with blueprint background */}
            <div className="process-header blueprint-bg">
                <div className="process-header-inner">
                    <motion.span className="section-tag" style={{ color: '#93C5FD', borderColor: '#93C5FD' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        End-to-End Execution
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,4vw,3rem)', color: '#F5EDD8' }}>
                        The Redevelopment Roadmap
                    </motion.h1>
                    <div className="gold-rule center" />
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ maxWidth: '560px', margin: '0 auto', color: 'rgba(245,237,216,0.7)', lineHeight: 1.75 }}>
                        From identifying a distressed society to handing over upgraded homes — 11 precise steps that we have systemised and executed.
                    </motion.p>
                </div>
            </div>

            {/* Timeline */}
            <div className="tl-outer">
                <div className="tl-line" />
                {steps.map((step, i) => (
                    <motion.div
                        key={step.id}
                        className={`tl-row ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.04 * i }}
                    >
                        <div className={`tl-card glass-panel ${step.highlight ? 'tl-hl' : ''}`}>
                            <div className="tl-card-header">
                                <span className="tl-phase">{step.phase}</span>
                                <span style={{ color: 'var(--gold-primary)' }}>{step.icon}</span>
                            </div>
                            <h3 className="tl-title"><span className="tl-num">{String(step.id).padStart(2, '0')}.</span> {step.title}</h3>
                            <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
                        </div>
                        <div className="tl-dot"><span>{step.id}</span></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
