import { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle, FileText, Activity, ArrowRight, XCircle } from 'lucide-react';
import './Feasibility.css';

export default function Feasibility() {
    const [step, setStep] = useState(1); // 1 = Upload, 2 = Analyzing, 3 = Results
    const [progress, setProgress] = useState(0);
    const [log, setLog] = useState<string>('');

    const runAnalysis = () => {
        setStep(2);
        const steps = [
            { time: 500, label: 'Extracting Development Rights (DA/IOD)...' },
            { time: 1500, label: 'Calculating FSI & Tangible Rehab Area...' },
            { margin: 30 },
            { time: 2800, label: 'Simulating Structural Completion Costs...' },
            { margin: 60 },
            { time: 4000, label: 'Cross-referencing RERA defaults...' },
            { margin: 85 },
            { time: 5200, label: 'Generating Final Viability Score...' },
            { margin: 100 }
        ];

        let accTime = 0;
        steps.forEach(s => {
            if (s.time) {
                setTimeout(() => setLog(s.label), s.time);
            }
            if (s.margin) {
                accTime += 800;
                setTimeout(() => setProgress(s.margin), accTime);
            }
        });

        setTimeout(() => setStep(3), 6000);
    };

    return (
        <div className="feas-wrap section-padding">
            <div className="feas-header">
                <span className="section-tag">B2B Assessment Portal</span>
                <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '2.5rem', marginBottom: '1rem', color: '#F5EDD8' }}>
                    Automated Project Feasibility
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    Societies & Brokers: Upload existing DA, IOD, or CC documents to receive a simulated viability score and check eligibility for our Development Manager (DMA) execution model.
                </p>
                <div className="gold-rule center" style={{ marginTop: '2rem' }} />
            </div>

            <div className="feas-main">
                {step === 1 && (
                    <motion.div className="feas-upload-card glass-panel" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                        <div className="upload-zone">
                            <UploadCloud size={48} className="text-gold" style={{ marginBottom: '1rem' }} />
                            <h3>Drag & Drop Project Documents</h3>
                            <p>Supported: PDF, DOCX (Max 20MB per file)</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                                (e.g. Executed DA, Stalled CC, BMC Approvals)
                            </p>
                            <button className="btn-secondary" style={{ marginTop: '1.5rem' }}>Browse Files</button>
                        </div>

                        <div className="file-mocks">
                            <div className="fm-item">
                                <FileText size={16} /> <span>Society_DA_Signed.pdf</span> <XCircle size={14} style={{ marginLeft: 'auto', cursor: 'pointer', opacity: 0.5 }} />
                            </div>
                            <div className="fm-item">
                                <FileText size={16} /> <span>Lapsed_CC_BMC.pdf</span> <XCircle size={14} style={{ marginLeft: 'auto', cursor: 'pointer', opacity: 0.5 }} />
                            </div>
                        </div>

                        <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={runAnalysis}>
                            <Activity size={16} /> Run Feasibility Algorithm
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div className="feas-analyzing glass-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="fa-spinner pulse"></div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>
                            Processing Documents
                        </h3>
                        <p style={{ color: 'var(--gold-primary)', fontFamily: 'monospace', marginBottom: '2rem' }}>{log}</p>

                        <div className="fa-bar-bg">
                            <div className="fa-bar-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className="fa-pct">{progress}%</span>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div className="feas-results glass-panel" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="fr-top">
                            <div className="fr-score-box">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="circle" strokeDasharray="84, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" className="pct">84</text>
                                </svg>
                                <span>Viability Score</span>
                            </div>
                            <div className="fr-summary">
                                <h3>Eligible for DMA Model</h3>
                                <p>This stalled project holds sufficient margin in the remaining free-sale component (approx. 3,800 sq.ft) to fund completion without member equity contribution.</p>
                                <div className="fr-tags">
                                    <span className="ft-pass"><CheckCircle size={12} /> High FSI Yield</span>
                                    <span className="ft-pass"><CheckCircle size={12} /> RCC Complete (Low Risk)</span>
                                </div>
                            </div>
                        </div>

                        <div className="fr-divider" />

                        <div className="fr-next-steps">
                            <h4>Next Steps & Commercials</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                We propose executing this via our <strong>Development Manager (DMA) structure</strong>. Crystal Developers will charge a fixed PMC execution fee and onboard the society to our SaaS Compliance Portal for transparent milestone tracking.
                            </p>
                            <div className="fr-actions">
                                <button className="btn-primary">Download Deep-Dive Report PDF</button>
                                <button className="btn-secondary">Request Term Sheet <ArrowRight size={14} /></button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
