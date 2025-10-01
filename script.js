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
        this.simulateRealtimeUpdates();
    }
    
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const suggestions = document.getElementById('search-suggestions');
        
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
                <div class="suggestion-item" onclick="this.selectSuggestion('${suggestion}')">
                    <i class="fas fa-search"></i>
                    <span>${suggestion}</span>
                </div>
            `).join('');
            
            container.style.display = 'block';
            container.style.position = 'absolute';
            container.style.top = '100%';
            container.style.left = '0';
            container.style.right = '0';
            container.style.background = 'var(--dark-card)';
            container.style.border = '1px solid var(--dark-border)';
            container.style.borderRadius = '0.5rem';
            container.style.marginTop = '0.5rem';
            container.style.maxHeight = '200px';
            container.style.overflowY = 'auto';
            container.style.zIndex = '1000';
            container.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
        } else {
            container.style.display = 'none';
        }
    }
    
    selectSuggestion(suggestion) {
        document.getElementById('search-input').value = suggestion;
        document.getElementById('search-suggestions').style.display = 'none';
        // Simulate search action
        this.showSearchResults(suggestion);
    }
    
    showSearchResults(query) {
        // Simulate search results with notification
        this.showNotification(`Searching for: ${query}`, 'info');
        
        // In a real app, this would trigger actual search functionality
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
        // Typing animation for hero text
        this.typeWriter();
        
        // Animate feature cards on scroll
        this.observeElements('.feature-card');
        this.observeElements('.repo-card');
    }
    
    typeWriter() {
        const text = "Code with AI Intelligence";
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
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
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
        statElements.forEach((stat, index) => {
            if (Math.random() > 0.7) { // 30% chance to update
                const icon = stat.querySelector('i');
                if (icon && icon.classList.contains('fa-star')) {
                    const currentValue = parseInt(stat.textContent.trim());
                    const newValue = currentValue + Math.floor(Math.random() * 3) + 1;
                    stat.innerHTML = `<i class="fas fa-star"></i> ${newValue}`;
                    
                    // Add visual feedback
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
        
        insightElements.forEach((element, index) => {
            if (Math.random() > 0.8) { // 20% chance to update
                const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
                element.innerHTML = `
                    <i class="${randomUpdate.icon}" style="color: ${randomUpdate.color}"></i>
                    <span>${randomUpdate.text}</span>
                `;
                
                // Add pulse animation
                element.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    element.style.animation = '';
                }, 500);
            }
        });
    }
    
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add notification styles if not already present
        if (!document.querySelector('#notification-styles')) {
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
        
        document.body.appendChild(notification);
        
        // Auto remove after duration
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, duration);
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

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIGitHub();
});

// Add some global utility functions
window.selectSuggestion = function(suggestion) {
    document.getElementById('search-input').value = suggestion;
    document.getElementById('search-suggestions').style.display = 'none';
};

// Smooth scrolling for anchor links
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

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
    
    // Ctrl/Cmd + / for AI chat
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        document.getElementById('chat-trigger').click();
    }
});
