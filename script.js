// ============================================
//   SK. MD. FAHAD HOSSAIN JOTY - Portfolio Script
//   Complete Biodata with Modal Popups (English Only)
// ============================================

// Modal Data with Complete Biodata
const modalData = {
    personal: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>`,
        title: 'Personal Information',
        subtitle: 'Basic details about me',
        content: `
            <div class="modal-grid">
                <div class="modal-item full-width">
                    <div class="modal-item-label">Full Name</div>
                    <div class="modal-item-value highlight">Sk. Md. Fahad Hossain Joty</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Date of Birth</div>
                    <div class="modal-item-value">25 March, 1997</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Age</div>
                    <div class="modal-item-value">28 Years</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Marital Status</div>
                    <div class="modal-item-value highlight">Unmarried</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Religion</div>
                    <div class="modal-item-value">Islam (Sunni)</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Nationality</div>
                    <div class="modal-item-value">Bangladeshi</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Languages</div>
                    <div class="modal-item-value">Bangla, English</div>
                </div>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">Bengali</span>
                <span class="modal-tag accent">Muslim (Sunni)</span>
                <span class="modal-tag pink">Never Married</span>
            </div>
        `
    },
    age: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>`,
        title: 'Birth & Age Details',
        subtitle: 'Date of birth and zodiac information',
        content: `
            <div class="modal-grid">
                <div class="modal-item">
                    <div class="modal-item-label">Date of Birth</div>
                    <div class="modal-item-value">25 March, 1997</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Current Age</div>
                    <div class="modal-item-value highlight">28 Years</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Zodiac Sign</div>
                    <div class="modal-item-value">Aries</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Birth Season</div>
                    <div class="modal-item-value">Spring</div>
                </div>
                <div class="modal-item full-width">
                    <div class="modal-item-label">Chinese Zodiac</div>
                    <div class="modal-item-value">Year of the Ox</div>
                </div>
            </div>
            <div class="modal-description">
                <p>Born in the vibrant month of March, representing energy, leadership, and enthusiasm. As an Aries, known for being ambitious, determined, and passionate about goals.</p>
            </div>
        `
    },
    physical: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
        </svg>`,
        title: 'Physical Attributes',
        subtitle: 'Height, weight and appearance',
        content: `
            <div class="modal-grid">
                <div class="modal-item">
                    <div class="modal-item-label">Height</div>
                    <div class="modal-item-value highlight">5'3"</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Weight</div>
                    <div class="modal-item-value">54 kg</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Blood Group</div>
                    <div class="modal-item-value highlight">O- (Negative)</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Complexion</div>
                    <div class="modal-item-value">Fair</div>
                </div>
            </div>
            <div class="modal-description">
                <p>Maintains a healthy lifestyle. No bad habits - doesn't smoke or consume any intoxicants. Follows a simple and disciplined way of life.</p>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">No Smoking</span>
                <span class="modal-tag accent">Healthy</span>
                <span class="modal-tag pink">Fair Complexion</span>
            </div>
        `
    },
    personality: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`,
        title: 'Personality & Lifestyle',
        subtitle: 'Character traits and values',
        content: `
            <div class="modal-description">
                <p>Religious, honest, responsible, calm-natured and family-oriented person. Leads a simple and disciplined life. No bad habits of any kind.</p>
            </div>
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">🕌</div>
                    <div class="modal-list-content">
                        <h5>Religious</h5>
                        <p>Practising Muslim, believes in Islamic values</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">✅</div>
                    <div class="modal-list-content">
                        <h5>Honest & Responsible</h5>
                        <p>Truthful and takes responsibility seriously</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">😌</div>
                    <div class="modal-list-content">
                        <h5>Calm & Composed</h5>
                        <p>Peaceful nature, patient personality</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">👨‍👩‍👧</div>
                    <div class="modal-list-content">
                        <h5>Family-oriented</h5>
                        <p>Values family above everything</p>
                    </div>
                </li>
            </ul>
            <div class="modal-tags">
                <span class="modal-tag">No Bad Habits</span>
                <span class="modal-tag accent">Practising Muslim</span>
                <span class="modal-tag pink">Caring</span>
            </div>
        `
    },
    skills: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`,
        title: 'Skills & Hobbies',
        subtitle: 'Abilities and interests',
        content: `
            <div class="modal-grid">
                <div class="modal-item full-width">
                    <div class="modal-item-label">Computer Proficiency</div>
                    <div class="modal-item-value highlight">Advanced</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Languages Known</div>
                    <div class="modal-item-value">Bangla, English</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Writing</div>
                    <div class="modal-item-value">Content Writing</div>
                </div>
            </div>
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">💻</div>
                    <div class="modal-list-content">
                        <h5>Programming & Research</h5>
                        <p>Interested in coding and research work</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">✈️</div>
                    <div class="modal-list-content">
                        <h5>Traveling & Adventure</h5>
                        <p>Loves traveling and adventures</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">🍳</div>
                    <div class="modal-list-content">
                        <h5>Cooking</h5>
                        <p>Enjoys cooking</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">⚽</div>
                    <div class="modal-list-content">
                        <h5>Sports</h5>
                        <p>Interested in sports activities</p>
                    </div>
                </li>
            </ul>
        `
    },
    education: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>`,
        title: 'Educational Background',
        subtitle: 'Academic qualifications',
        content: `
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">🎓</div>
                    <div class="modal-list-content">
                        <h5>B.Sc. (Hons) in Statistics</h5>
                        <p>Hajee Mohammad Danesh Science & Technology University, Dinajpur</p>
                        <p style="color: var(--accent-light); font-size: 0.8rem; margin-top: 4px;">Passing Year: 2020 | CGPA: 3.17/4.00</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">🏫</div>
                    <div class="modal-list-content">
                        <h5>Higher Secondary Certificate (HSC)</h5>
                        <p>Govt. Majid Memorial City College, Khulna (Science)</p>
                        <p style="color: var(--accent-light); font-size: 0.8rem; margin-top: 4px;">Passing Year: 2015 | GPA: 4.50</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">📚</div>
                    <div class="modal-list-content">
                        <h5>Secondary School Certificate (SSC)</h5>
                        <p>Khulna Zilla School, Khulna (Science)</p>
                        <p style="color: var(--accent-light); font-size: 0.8rem; margin-top: 4px;">Passing Year: 2013 | GPA: 5.00</p>
                    </div>
                </li>
            </ul>
            <div class="modal-description">
                <p><strong>Future Plan:</strong> Aspiring to pursue MS in Data Science or MBA.</p>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">Statistics</span>
                <span class="modal-tag accent">Science Background</span>
                <span class="modal-tag pink">Research-oriented</span>
            </div>
        `
    },
    govtjob: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>`,
        title: 'Government Job Preparation',
        subtitle: 'Career goals and current status',
        content: `
            <div class="modal-description">
                <p>Currently devoting full time to intensive preparation for highly competitive government examinations. The goal is to secure a position in BCS Cadre or First Class Non-Cadre Service.</p>
            </div>
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">📝</div>
                    <div class="modal-list-content">
                        <h5>BCS Cadre Examination</h5>
                        <p>Preparing for Bangladesh Civil Service examination</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">🏛️</div>
                    <div class="modal-list-content">
                        <h5>First Class Non-Cadre</h5>
                        <p>Preparing for First Class Non-Cadre positions</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">🏦</div>
                    <div class="modal-list-content">
                        <h5>Bank Jobs</h5>
                        <p>Also preparing for various bank examinations</p>
                    </div>
                </li>
            </ul>
            <div class="modal-tags">
                <span class="modal-tag">Full-time Prep</span>
                <span class="modal-tag accent">Focused</span>
                <span class="modal-tag pink">Career-Oriented</span>
            </div>
        `
    },
    experience: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`,
        title: 'Work Experience',
        subtitle: 'Previous employment',
        content: `
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">📝</div>
                    <div class="modal-list-content">
                        <h5>Article & Content Writer</h5>
                        <p>RETRO (Affiliate Marketing), Khulna</p>
                        <p style="color: var(--accent-light); font-size: 0.8rem; margin-top: 4px;">July 1, 2021 - February 28, 2023</p>
                    </div>
                </li>
            </ul>
            <div class="modal-description">
                <p>Worked for approximately two years at RETRO as an Article and Content Writer. During this time, developed strong writing skills and gained knowledge about Affiliate Marketing.</p>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">Content Writing</span>
                <span class="modal-tag accent">Marketing</span>
                <span class="modal-tag pink">Digital Skills</span>
            </div>
        `
    },
    family: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>`,
        title: 'Family Background',
        subtitle: 'Family details and values',
        content: `
            <div class="modal-grid">
                <div class="modal-item">
                    <div class="modal-item-label">Family Type</div>
                    <div class="modal-item-value">Nuclear Family</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Values</div>
                    <div class="modal-item-value highlight">Religious</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Siblings</div>
                    <div class="modal-item-value">5 Brothers</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Position</div>
                    <div class="modal-item-value">4th of 5</div>
                </div>
            </div>
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">👨</div>
                    <div class="modal-list-content">
                        <h5>Father - Md Forhad Hossain</h5>
                        <p>Service Holder & Businessman</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">👩</div>
                    <div class="modal-list-content">
                        <h5>Mother - Anoara Begum</h5>
                        <p>Housewife</p>
                    </div>
                </li>
            </ul>
            <div class="modal-description">
                <p><strong>Brothers:</strong></p>
                <p style="font-size: 0.85rem; line-height: 1.8; color: var(--text-medium);">
                    1. <strong>Abdulla Al Mamun</strong> (Elder) - Businessman, Married, 2 Daughters<br>
                    2. <strong>Md Imran Hossain</strong> (Elder) - LLB, Businessman, Married<br>
                    3. <strong>Md Foysal Hossain</strong> (Elder) - Renata Ltd., Married, 1 Daughter<br>
                    4. <strong>Sk. Md. Fahad Hossain Joty</strong> (Self)<br>
                    5. <strong>Md Nahad Hossain</strong> (Younger) - Diploma in Mechanical Engg.
                </p>
            </div>
            <div class="modal-grid">
                <div class="modal-item full-width">
                    <div class="modal-item-label">Permanent Address</div>
                    <div class="modal-item-value" style="font-size: 0.9rem;">Village: Jhinaikhali, Post: Amirpur, Thana: Batiaghata, District: Khulna</div>
                </div>
            </div>
        `
    },
    educated: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>`,
        title: 'Expectation: Education',
        subtitle: 'Educational requirements for partner',
        content: `
            <div class="modal-description">
                <p>Looking for a well-educated life partner who values knowledge and continuous learning. Education is essential for mutual understanding and intellectual compatibility.</p>
            </div>
            <div class="modal-grid">
                <div class="modal-item full-width">
                    <div class="modal-item-label">Minimum Education</div>
                    <div class="modal-item-value highlight">Graduate or Higher</div>
                </div>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">Well-read</span>
                <span class="modal-tag accent">Goal-oriented</span>
                <span class="modal-tag pink">Intellectual</span>
            </div>
        `
    },
    religious: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
        </svg>`,
        title: 'Expectation: Religious',
        subtitle: 'Religious values and practices',
        content: `
            <div class="modal-description">
                <p>Seeking a partner who is God-fearing and follows religious principles. Faith and spiritual values are important for building a blessed and harmonious family life.</p>
            </div>
            <div class="modal-grid">
                <div class="modal-item">
                    <div class="modal-item-label">Religion</div>
                    <div class="modal-item-value highlight">Islam</div>
                </div>
                <div class="modal-item">
                    <div class="modal-item-label">Practice</div>
                    <div class="modal-item-value">Practising</div>
                </div>
            </div>
            <div class="modal-tags">
                <span class="modal-tag">Practising</span>
                <span class="modal-tag accent">God-fearing</span>
                <span class="modal-tag pink">Faithful</span>
            </div>
        `
    },
    muslimah: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`,
        title: 'Expectation: Practising Muslimah',
        subtitle: 'Islamic values and modesty',
        content: `
            <div class="modal-description">
                <p>Looking for a practising Muslimah who follows Islamic values, maintains modesty, and prioritizes faith in daily life. Someone who understands the importance of building a family based on Islamic principles.</p>
            </div>
            <ul class="modal-list">
                <li>
                    <div class="modal-list-icon">🧕</div>
                    <div class="modal-list-content">
                        <h5>Modest & Respectful</h5>
                        <p>Values modesty in dress and behavior</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">🕌</div>
                    <div class="modal-list-content">
                        <h5>Practising Muslim</h5>
                        <p>Regular in prayers and Islamic duties</p>
                    </div>
                </li>
                <li>
                    <div class="modal-list-icon">❤️</div>
                    <div class="modal-list-content">
                        <h5>Family-oriented</h5>
                        <p>Values family life and relationships</p>
                    </div>
                </li>
            </ul>
            <div class="modal-tags">
                <span class="modal-tag">Modest</span>
                <span class="modal-tag accent">Pious</span>
                <span class="modal-tag pink">Loving</span>
            </div>
        `
    }
};

// Open Modal Function
function openModal(type) {
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const data = modalData[type];

    if (!data) return;

    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">${data.icon}</div>
            <h3 class="modal-title">${data.title}</h3>
            <p class="modal-subtitle">${data.subtitle}</p>
        </div>
        <div class="modal-body">
            ${data.content}
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal Function
function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Share Profile Function
async function shareProfile() {
    const shareData = {
        title: 'Sk. Md. Fahad Hossain Joty | Marriage Portfolio',
        text: 'Check out the Marriage Portfolio of Sk. Md. Fahad Hossain Joty - BSc in Statistics, HSTU Dinajpur. Currently preparing for BCS.',
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(window.location.href);
            showToast('Link copied to clipboard!');
        }
    } catch (err) {
        console.log('Share failed:', err);
        try {
            await navigator.clipboard.writeText(window.location.href);
            showToast('Link copied to clipboard!');
        } catch (clipErr) {
            showToast('Could not share. Please copy the URL manually.');
        }
    }
}

// Toast Notification
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(30, 41, 59, 0.95);
        backdrop-filter: blur(20px);
        color: white;
        padding: 14px 28px;
        border-radius: 50px;
        font-size: 0.9rem;
        z-index: 10000;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: toastIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes toastIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes toastOut {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
//   SCROLL REVEAL ANIMATIONS
// ============================================

// Initialize scroll animations
function initScrollAnimations() {
    // Add animate-on-scroll class to elements
    const animatedElements = [
        '.section-header',
        '.info-card',
        '.career-card',
        '.family-card',
        '.expectation-item',
        '.contact-card',
        '.social-links',
        '.share-button'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            // Add stagger delay for grid items
            if (selector === '.info-card' || selector === '.expectation-item') {
                el.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    });

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Parallax effect for hero
function initParallax() {
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
        }
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Card tilt effect on hover
function initCardTilt() {
    const cards = document.querySelectorAll('.info-card, .career-card, .expectation-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initSmoothScroll();
    initCardTilt();

    // Add loaded class to body for initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
