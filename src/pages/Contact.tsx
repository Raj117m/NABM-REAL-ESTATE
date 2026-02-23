import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container section-padding">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="section-title">Get in Touch</h1>
                <p className="contact-subtitle">Ready to transform your society? Let's build the future together.</p>
            </motion.div>

            <div className="contact-grid">
                <motion.div
                    className="contact-info glass-panel"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3>Contact Information</h3>
                    <div className="info-item">
                        <Mail className="info-icon" />
                        <div>
                            <p className="label">Email Us</p>
                            <p className="value">partners@rebuilt.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <p className="label">Call Us</p>
                            <p className="value">+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <p className="label">Visit Us</p>
                            <p className="value">1204, Innovation Tower, BKC, Mumbai - 400051</p>
                        </div>
                    </div>

                    <div className="map-placeholder">
                        <p>Map View</p>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form glass-panel"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Send us a Message</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <select>
                            <option>Society Redevelopment</option>
                            <option>Stalled Project Inquiry</option>
                            <option>Investor Relations</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows={5} placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" className="btn-primary">
                        Send Message <Send size={18} />
                    </button>
                </motion.form>
            </div>
        </div>
    );
}
