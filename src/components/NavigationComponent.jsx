import React from 'react';

export const TopNavigation = ({ sections, currentSection, setCurrentSection }) => {
    return (
        <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/40 backdrop-blur-xl rounded-full px-2 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20 max-w-[95vw] overflow-x-auto">
            <div className="flex space-x-1 sm:space-x-3 min-w-max">
                {sections.map((section, index) => (
                    <button
                        key={section}
                        onClick={() => setCurrentSection(index)}
                        className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${currentSection === index
                                ? 'bg-white text-rose-600 shadow-md transform scale-105'
                                : 'text-slate-700 hover:bg-white/50 hover:text-rose-600'
                            }`}
                    >
                        {section}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export const BottomNavigation = ({ currentSection, setCurrentSection, sections }) => {
    return (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4 z-50">
            <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                className="bg-white/50 backdrop-blur-xl text-slate-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/70 transition-all shadow-lg border border-white/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                disabled={currentSection === 0}
            >
                ← Previous
            </button>
            <button
                onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                className="bg-white/50 backdrop-blur-xl text-slate-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/70 transition-all shadow-lg border border-white/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                disabled={currentSection === sections.length - 1}
            >
                Next →
            </button>
        </div>
    );
};