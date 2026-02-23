import { useState } from 'react';
import { Search, Filter, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Finder.css';

const mockProjects = [
    { id: 1, name: 'Sunshine Heights', type: 'Stalled', status: '8/12 Slabs', location: 'Andheri West', risk: 'High', area: '1200 sq.mt' },
    { id: 2, name: 'Green Valley Co-op', type: 'Small Society', status: 'Old Building', location: 'Borivali', risk: 'Low', area: '450 sq.mt' },
    { id: 3, name: 'Oceanic Towers', type: 'Stalled', status: 'Foundation Only', location: 'Dadar', risk: 'Critical', area: '2000 sq.mt' },
    { id: 4, name: 'Rose Villa', type: 'Small Society', status: ' dilapidated', location: 'Bandra', risk: 'Medium', area: '300 sq.mt' },
];

export default function Finder() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredProjects = mockProjects.filter(p =>
        (filter === 'All' || p.type === filter) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="finder-container section-padding">
            <h1 className="section-title">Project Discovery Engine</h1>

            <div className="finder-controls glass-panel">
                <div className="search-bar">
                    <Search className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by project name or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <Filter size={20} />
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">All Types</option>
                        <option value="Stalled">Stalled Projects</option>
                        <option value="Small Society">Small Societies</option>
                    </select>
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card glass-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="card-header">
                            <h3>{project.name}</h3>
                            <span className={`badge ${project.type === 'Stalled' ? 'badge-danger' : 'badge-success'} `}>
                                {project.type}
                            </span>
                        </div>

                        <div className="card-body">
                            <p><strong>Location:</strong> {project.location}</p>
                            <p><strong>Status:</strong> {project.status}</p>
                            <p><strong>Area:</strong> {project.area}</p>
                            {project.type === 'Stalled' && (
                                <div className="alert-box">
                                    <AlertTriangle size={16} />
                                    <span>Builder Defaulted</span>
                                </div>
                            )}
                        </div>

                        <button className="btn-primary w-full">View Feasibility</button>
                    </motion.div>
                ))}

                {filteredProjects.length === 0 && (
                    <p className="no-results">No projects found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}
