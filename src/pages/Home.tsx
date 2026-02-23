import { motion } from 'framer-motion';
import { ArrowRight, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.h1 className="hero-title" variants={fadeInUp}>
                        Reviving <span className="highlight">Stalled</span> Dreams.
                        <br />
                        Building <span className="highlight">Profitable</span> Futures.
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={fadeInUp}>
                        Builders ran out of funds? Project stuck at 8th slab? We step in where others failed.
                        Acquiring, redeveloping, and delivering promised homes.
                    </motion.p>
                    <motion.div className="hero-cta" variants={fadeInUp}>
                        <Link to="/finder" className="btn-primary">
                            Find Projects <ArrowRight size={18} />
                        </Link>
                        <Link to="/process" className="btn-secondary">
                            Our Process
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats / Types Section */}
            <section className="features-section section-padding">
                <motion.div
                    className="grid-cols-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glass-panel feature-card">
                        <TrendingUp size={32} className="feature-icon" />
                        <h3>Small Societies</h3>
                        <p>Targeting &lt;500 sq.mt plots. Quick redevelopment, fast cashflow. High turnover efficiency for rapid city renewal.</p>
                    </div>
                    <div className="glass-panel feature-card">
                        <Building2 size={32} className="feature-icon" />
                        <h3>Stalled Projects</h3>
                        <p>Taking over where developers failed. Saving societies from limbo. No rental costs for members, purely profit-driven completion.</p>
                    </div>
                </motion.div>
            </section>

            {/* Acquisition Models */}
            <section className="acquisition-section section-padding">
                <h2 className="section-title">Acquisition Models</h2>
                <div className="models-grid">
                    <div className="model-item">
                        <ShieldCheck size={24} />
                        <div className="model-text">
                            <h4>Conveyance (Outright Purchase)</h4>
                            <p>Direct ownership rights. Costly but provides full control over the land parcel.</p>
                        </div>
                    </div>
                    <div className="model-item">
                        <Building2 size={24} />
                        <div className="model-text">
                            <h4>Development Agreement (DA)</h4>
                            <p>Contract to redevelop property within a specified time. Efficient for society-owned land.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
