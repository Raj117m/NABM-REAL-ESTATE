import { motion } from 'framer-motion';
import './BusinessModel.css';

const canvasItems = [
    { title: 'Key Partners', content: 'Legal Consultants, Architects, Construction Firms, Investors, Housing Societies.' },
    { title: 'Key Activities', content: 'Land Acquisition, Legal Clearance, Project Management, Sales & Marketing.' },
    { title: 'Value Propositions', content: 'Hassle-free redevelopment. Transparent dealings. Timely delivery. Zero rental cost for stalled projects.' },
    { title: 'Customer Relationships', content: 'Trust-based engagement. Regular updates. Dedicated relationship managers.' },
    { title: 'Customer Segments', content: 'Small Housing Societies (<500 sq.mt). Stalled Project Members.' },
    { title: 'Key Resources', content: 'Capital, Legal Expertise, Project Management Team, Brand Reputation.' },
    { title: 'Channels', content: 'Website, Direct Outreach, Real Estate Agents, Word of Mouth.' },
    { title: 'Cost Structure', content: 'Land Acquisition, Construction, Legal Fees, Marketing, Overheads.' },
    { title: 'Revenue Streams', content: 'Sale of Free-Sale Component Flats. Commercial Space Sales.' },
];

export default function BusinessModel() {
    return (
        <div className="model-container section-padding">
            <motion.h1
                className="section-title"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                Business Model Canvas
            </motion.h1>

            <div className="bmc-grid">
                {canvasItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bmc-card glass-panel"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
