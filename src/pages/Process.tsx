import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './Process.css';

const steps = [
    { id: 1, title: 'Identifying Society', desc: 'Pinpointing potential redevelopment candidates.' },
    { id: 2, title: 'Initial Approach', desc: 'Establishing contact with society members.' },
    { id: 3, title: 'Offer Proposal', desc: 'Outlining additional area and project timeline.' },
    { id: 4, title: 'Finalization', desc: 'Agreeing on the core terms of the redevelopment.' },
    { id: 5, title: 'MOU & DA Signing', desc: 'Formalizing the agreement legally.' },
    { id: 6, title: 'BMC Plan Submission', desc: 'Architectural planning and municipal submission.' },
    { id: 7, title: 'Approvals', desc: 'Securing necessary government clearances.' },
    { id: 8, title: 'Vacating Land', desc: 'Moving members to transit accommodation.' },
    { id: 9, title: 'Construction Begins', desc: 'Breaking ground and rapid development.' },
    { id: 10, title: 'Project Completion', desc: 'Finishing strictures and amenities.' },
    { id: 11, title: 'Handover', desc: 'Delivering keys to new, upgraded homes.' },
];

export default function Process() {
    return (
        <div className="process-container section-padding">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Redevelopment Roadmap
            </motion.h1>

            <div className="timeline">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <span className="step-number">{step.id}</span>
                        </div>
                        <div className="timeline-content glass-panel">
                            <div className="timeline-header">
                                <h3>{step.title}</h3>
                                <CheckCircle size={20} className="step-icon" />
                            </div>
                            <p>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
