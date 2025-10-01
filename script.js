class AIGitHub {
    constructor() {
        this.searchSuggestions = [
            'React authentication system',
            'Python machine learning models',
            'JavaScript game development',
            'Node.js REST API',
            'Vue.js dashboard components',
            'Docker deployment configurations',
            'TensorFlow image recognition',
            'GraphQL schema design'
        ];
        
        this.chatMessages = [
            "Hi! I'm your AI coding assistant. How can I help you today?",
            "I can help you with code analysis, bug fixes, documentation, and more!",
            "Try asking me about your repository's performance or security issues."
        ];
        
        this.init();
    }
    
    init() {
        this.setupSearch();
        this.setupChat();
        this.setupAnimations();
        this.setupScrollEffects();
        this.setupRepositoryFilter();
        this.simulateRealtimeUpdates();
    }
    
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const suggestions = document.getElementById('search-suggestions');
        
        if (!searchInput || !suggestions) return;
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 1) {
                this.showSearchSuggestions(query, suggestions);
            } else {
                suggestions.style.display = 'none';
            }
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }
    
    showSearchSuggestions(query, container) {
        const filtered = this.searchSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            container.innerHTML = filtered.map(suggestion => `
                <div class="suggestion-item" onclick="window.selectSuggestion('${suggestion}')">
                    <i class="fas fa-search"></i>
                    <span>${suggestion}</span>
                </div>
            `).join('');
            
            Object.assign(container.style, {
                display: 'block',
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                background: 'var(--dark-card)',
                border: '1px solid var(--dark-border)',
                borderRadius: '0.5rem',
                marginTop: '0.5rem',
                maxHeight: '200px',
                overflowY: 'auto',
                zIndex: '1000',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
            });
        } else {
            container.style.display = 'none';
        }
    }
    
    selectSuggestion(suggestion) {
        const searchInput = document.getElementById('search-input');
        const suggestions = document.getElementById('search-suggestions');
        
        if (searchInput) searchInput.value = suggestion;
        if (suggestions) suggestions.style.display = 'none';
        
        this.showSearchResults(suggestion);
    }
    
    showSearchResults(query) {
        this.showNotification(`Searching for: ${query}`, 'info');
        
        setTimeout(() => {
            this.showNotification(`Found 42 repositories matching "${query}"`, 'success');
        }, 1500);
    }
    
    setupChat() {
        const chatTrigger = document.getElementById('chat-trigger');
        const chatWidget = document.getElementById('ai-chat');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        const chatMessages = document.getElementById('chat-messages');
        
        if (!chatTrigger || !chatWidget || !chatClose || !chatInput || !chatSend || !chatMessages) return;
        
        chatTrigger.addEventListener('click', () => {
            chatWidget.classList.add('active');
            chatTrigger.classList.add('hidden');
        });
        
        chatClose.addEventListener('click', () => {
            chatWidget.classList.remove('active');
            chatTrigger.classList.remove('hidden');
        });
        
        chatSend.addEventListener('click', () => {
            this.sendChatMessage(chatInput, chatMessages);
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendChatMessage(chatInput, chatMessages);
            }
        });
        
        // Auto-show AI suggestions
        setTimeout(() => {
            this.showAISuggestion();
        }, 3000);
    }
    
    sendChatMessage(input, container) {
        const message = input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addChatMessage(container, message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const aiResponse = this.generateAIResponse(message);
            this.addChatMessage(container, aiResponse, 'ai');
        }, 1000);
    }
    
    addChatMessage(container, message, type) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}-message`;
        
        if (type === 'ai') {
            messageElement.innerHTML = `
                <i class="fas fa-robot"></i>
                <span>${message}</span>
            `;
        } else {
            messageElement.innerHTML = `<span>${message}</span>`;
        }
        
        container.appendChild(messageElement);
        container.scrollTop = container.scrollHeight;
    }
    
    generateAIResponse(userMessage) {
        const responses = {
            'code': "I can help you analyze your code for potential improvements. Would you like me to review a specific repository?",
            'bug': "I'd be happy to help you identify and fix bugs. Can you share the code snippet you're having trouble with?",
            'security': "Security is crucial! I can scan your repositories for common vulnerabilities like SQL injection, XSS, and dependency issues.",
            'performance': "I can analyze your code for performance bottlenecks and suggest optimizations. Which project needs attention?",
            'documentation': "I can automatically generate documentation for your functions and classes. Just point me to your repository!",
            'test': "I can help you write unit tests and suggest test cases for better code coverage. What's your testing framework?",
            'deploy': "I can assist with deployment configurations and CI/CD pipeline setup. Are you using Docker or traditional deployment?",
            'react': "I see you're interested in React! I can help with component optimization, state management, and performance improvements.",
            'javascript': "JavaScript is my specialty! I can help with ES6+ features, async/await patterns, and modern development practices.",
            'default': "I'm here to help with code analysis, security scanning, performance optimization, and more. What would you like to work on?"
        };
        
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return responses.default;
    }
    
    showAISuggestion() {
        const suggestions = [
            "💡 I noticed you have a React project. Want me to check for performance optimizations?",
            "🔍 Your Python repository could benefit from security scanning. Shall I run an analysis?",
            "📚 I can generate API documentation for your Node.js project automatically.",
            "🚀 Ready to optimize your deployment pipeline? I can suggest improvements.",
            "🔧 I found some potential code improvements in your recent commits. Want to see them?"
        ];
        
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        this.showNotification(randomSuggestion, 'ai', 5000);
    }
    
    setupAnimations() {
        this.typeWriter();
        this.observeElements('.feature-card');
        this.observeElements('.repo-card');
    }
    
    typeWriter() {
        const text = "AI Intelligence";
        const element = document.querySelector('.gradient-text');
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
            }
        }, 100);
    }
    
    observeElements(selector) {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    }
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (!navbar) return;
            
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }
    
    setupRepositoryFilter() {
        const filterInput = document.getElementById('filter-input');
        const filterSelect = document.getElementById('filter-select');
        const repoGrid = document.getElementById('repo-grid');
        
        if (!filterInput || !filterSelect || !repoGrid) return;
        
        const filterRepositories = () => {
            const searchTerm = filterInput.value.toLowerCase();
            const categoryFilter = filterSelect.value;
            const repoCards = repoGrid.querySelectorAll('.repo-card');
            
            repoCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.repo-description').textContent.toLowerCase();
                const badges = card.querySelectorAll('.badge');
                
                let matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
                let matchesCategory = categoryFilter === 'all';
                
                if (!matchesCategory) {
                    badges.forEach(badge => {
                        if (badge.classList.contains(categoryFilter)) {
                            matchesCategory = true;
                        }
                    });
                }
                
                if (matchesSearch && matchesCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };
        
        filterInput.addEventListener('input', filterRepositories);
        filterSelect.addEventListener('change', filterRepositories);
    }
    
    simulateRealtimeUpdates() {
        // Simulate real-time repository updates
        setInterval(() => {
            this.updateRepositoryStats();
        }, 10000);
        
        // Simulate AI analysis progress
        setInterval(() => {
            this.updateAIAnalysis();
        }, 15000);
    }
    
    updateRepositoryStats() {
        const statElements = document.querySelectorAll('.repo-stats .stat');
        statElements.forEach((stat) => {
            if (Math.random() > 0.7) {
                const icon = stat.querySelector('i');
                if (icon && icon.classList.contains('fa-star')) {
                    const currentValue = parseInt(stat.textContent.trim()) || 0;
                    const newValue = currentValue + Math.floor(Math.random() * 3) + 1;
                    stat.innerHTML = `<i class="fas fa-star"></i> ${newValue}`;
                    
                    stat.style.color = 'var(--success-color)';
                    setTimeout(() => {
                        stat.style.color = '';
                    }, 1000);
                }
            }
        });
    }
    
    updateAIAnalysis() {
        const insightElements = document.querySelectorAll('.insight-item');
        const updates = [
            { icon: 'fas fa-chart-line', text: 'Code quality improved to 96%', color: 'var(--success-color)' },
            { icon: 'fas fa-shield-alt', text: 'Security scan completed', color: 'var(--success-color)' },
            { icon: 'fas fa-lightbulb', text: '3 new optimizations found', color: 'var(--accent-color)' },
            { icon: 'fas fa-check-circle', text: 'All tests passing', color: 'var(--success-color)' }
        ];
        
        insightElements.forEach((element) => {
            if (Math.random() > 0.8) {
                const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
                element.innerHTML = `
                    <i class="${randomUpdate.icon}" style="color: ${randomUpdate.color}"></i>
                    <span>${randomUpdate.text}</span>
                `;
                
                element.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    element.style.animation = '';
                }, 500);
            }
        });
    }
    
    showNotification(message, type = 'info', duration = 3000) {
        // Remove existing notifications of same type
        const existingNotifications = document.querySelectorAll(`.notification-${type}`);
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        this.addNotificationStyles();
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, duration);
    }
    
    addNotificationStyles() {
        if (document.querySelector('#notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 2rem;
                background: var(--dark-card);
                border: 1px solid var(--dark-border);
                border-radius: 0.5rem;
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--text-primary);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            
            .notification-info { border-left: 4px solid var(--accent-color); }
            .notification-success { border-left: 4px solid var(--success-color); }
            .notification-warning { border-left: 4px solid var(--warning-color); }
            .notification-error { border-left: 4px solid var(--danger-color); }
            .notification-ai { border-left: 4px solid var(--primary-color); }
            
            .notification button {
                background: none;
                border: none;
                color: var(--text-muted);
                cursor: pointer;
                padding: 0.25rem;
                margin-left: auto;
                border-radius: 0.25rem;
            }
            
            .notification button:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);
    }
    
    getNotificationIcon(type) {
        const icons = {
            'info': 'info-circle',
            'success': 'check-circle',
            'warning': 'exclamation-triangle',
            'error': 'exclamation-circle',
            'ai': 'robot'
        };
        return icons[type] || 'info-circle';
    }
}

// Global utility functions
window.selectSuggestion = function(suggestion) {
    const aiGithub = window.aiGithubInstance;
    if (aiGithub) {
        aiGithub.selectSuggestion(suggestion);
    }
};

window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.openDemoModal = function() {
    const aiGithub = window.aiGithubInstance;
    if (aiGithub) {
        aiGithub.showNotification('Demo video coming soon! 🎬', 'info');
    }
};

window.createNewRepo = function() {
    const aiGithub = window.aiGithubInstance;
    if (aiGithub) {
        aiGithub.showNotification('New repository creation wizard launching...', 'success');
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.aiGithubInstance = new AIGitHub();
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
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
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
    }
    
    // Ctrl/Cmd + / for AI chat
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        const chatTrigger = document.getElementById('chat-trigger');
        if (chatTrigger) chatTrigger.click();
    }
    
    // Escape to close chat
    if (e.key === 'Escape') {
        const chatWidget = document.getElementById('ai-chat');
        const chatTrigger = document.getElementById('chat-trigger');
        if (chatWidget && chatWidget.classList.contains('active')) {
            chatWidget.classList.remove('active');
            if (chatTrigger) chatTrigger.classList.remove('hidden');
        }
    }
});
