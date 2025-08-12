import React, { useState, useEffect } from 'react'
import './News.css'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showShareModal, setShowShareModal] = useState(false)

  useEffect(() => {
    // Simulate loading news articles
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: "Breakthrough in Computer Vision Research",
          date: "August 10, 2025",
          summary: "Our team has achieved a significant milestone in real-time object detection with 99.7% accuracy.",
          category: "Research",
          author: "Dr. Sarah Chen",
          readTime: "3 min read",
          fullContent: `
            <p>We are excited to announce a groundbreaking achievement in computer vision research that sets new industry standards for real-time object detection and analysis.</p>
            
            <h3>Revolutionary Accuracy</h3>
            <p>Our latest AI Vision System has achieved an unprecedented 99.7% accuracy rate in real-time object detection, surpassing previous benchmarks by 15%. This breakthrough was made possible through our innovative deep learning architecture that combines convolutional neural networks with advanced attention mechanisms.</p>
            
            <h3>Key Technical Innovations</h3>
            <ul>
              <li><strong>Multi-scale Feature Fusion:</strong> Our new approach seamlessly integrates features from different scales, enabling detection of objects ranging from tiny components to large structures.</li>
              <li><strong>Edge Computing Optimization:</strong> The system has been optimized for edge devices, reducing latency by 60% while maintaining high accuracy.</li>
              <li><strong>Real-time Processing:</strong> Capable of processing 60 frames per second on standard hardware, making it suitable for industrial applications.</li>
            </ul>
            
            <h3>Real-world Applications</h3>
            <p>This technology has immediate applications in:</p>
            <ul>
              <li>Autonomous vehicle navigation systems</li>
              <li>Industrial quality control and inspection</li>
              <li>Medical imaging and diagnostic tools</li>
              <li>Security and surveillance systems</li>
              <li>Augmented reality applications</li>
            </ul>
            
            <h3>Research Methodology</h3>
            <p>The research was conducted over 18 months, involving a team of 15 researchers and engineers. We utilized a dataset of over 2 million labeled images across 1,000 different object categories. The training process involved distributed computing across multiple GPU clusters, with over 10,000 hours of computational time.</p>
            
            <p>Dr. Sarah Chen, lead researcher on the project, commented: "This breakthrough represents years of dedicated research and innovation. We're particularly proud of how this technology can be deployed in real-world scenarios where accuracy and speed are critical."</p>
            
            <h3>Future Developments</h3>
            <p>Looking ahead, we plan to extend this technology to support 3D object detection and tracking, as well as integration with natural language processing for more intelligent scene understanding. We expect to release the commercial version of this technology in Q4 2025.</p>
          `,
          image: "/api/placeholder/800/400"
        },
        {
          id: 2,
          title: "New AI Ethics Framework Published",
          date: "August 8, 2025",
          summary: "We've released a comprehensive framework for ethical AI development and deployment.",
          category: "Ethics",
          author: "Dr. James Liu",
          readTime: "5 min read",
          fullContent: `
            <p>Today marks a significant milestone in responsible AI development with the publication of our comprehensive AI Ethics Framework, designed to guide organizations in the ethical development, deployment, and management of artificial intelligence systems.</p>
            
            <h3>The Need for Ethical AI</h3>
            <p>As AI systems become increasingly integrated into our daily lives, from healthcare diagnostics to financial decision-making, the importance of ethical considerations cannot be overstated. Our framework addresses critical concerns including bias, transparency, accountability, and fairness.</p>
            
            <h3>Framework Components</h3>
            <p>The framework consists of five core pillars:</p>
            <ul>
              <li><strong>Fairness and Non-discrimination:</strong> Ensuring AI systems treat all individuals and groups equitably</li>
              <li><strong>Transparency and Explainability:</strong> Making AI decision-making processes understandable and auditable</li>
              <li><strong>Privacy and Data Protection:</strong> Safeguarding personal information and respecting user privacy</li>
              <li><strong>Accountability and Governance:</strong> Establishing clear responsibility chains and oversight mechanisms</li>
              <li><strong>Human Agency and Oversight:</strong> Maintaining meaningful human control over AI systems</li>
            </ul>
            
            <h3>Implementation Guidelines</h3>
            <p>The framework includes practical implementation guidelines covering:</p>
            <ul>
              <li>Pre-development ethical impact assessments</li>
              <li>Bias detection and mitigation strategies</li>
              <li>Continuous monitoring and evaluation protocols</li>
              <li>Stakeholder engagement processes</li>
              <li>Incident response and remediation procedures</li>
            </ul>
            
            <h3>Industry Collaboration</h3>
            <p>This framework was developed in collaboration with leading technology companies, academic institutions, and civil society organizations. We've incorporated feedback from over 500 stakeholders across 30 countries, ensuring global applicability and cultural sensitivity.</p>
            
            <p>"Ethical AI isn't just about compliance—it's about building technology that serves humanity's best interests," says Dr. James Liu, Director of AI Ethics Research. "This framework provides practical tools for organizations to operationalize their ethical commitments."</p>
            
            <h3>Open Source and Accessibility</h3>
            <p>The complete framework is available as an open-source resource, encouraging widespread adoption and collaborative improvement. We've also developed assessment tools and training materials to support implementation across different organizational contexts.</p>
          `,
          image: "/api/placeholder/800/400"
        },
        {
          id: 3,
          title: "Partnership with Tech Giants Announced",
          date: "August 5, 2025",
          summary: "AI Research Lab partners with leading technology companies to advance machine learning research.",
          category: "Partnership",
          author: "Research Team",
          readTime: "4 min read",
          fullContent: `
            <p>We are thrilled to announce strategic partnerships with several leading technology companies that will accelerate breakthrough research in machine learning and artificial intelligence.</p>
            
            <h3>Partnership Objectives</h3>
            <p>These collaborations aim to bridge the gap between academic research and real-world applications, ensuring that cutting-edge AI research translates into practical solutions that benefit society.</p>
            
            <h3>Key Partnerships</h3>
            <ul>
              <li><strong>Cloud Computing Partnership:</strong> Joint development of distributed AI training platforms</li>
              <li><strong>Hardware Innovation:</strong> Collaboration on next-generation AI chips and accelerators</li>
              <li><strong>Data Science Initiative:</strong> Shared research on large-scale data processing and analysis</li>
              <li><strong>Industry Applications:</strong> Real-world testing and deployment of research prototypes</li>
            </ul>
            
            <h3>Research Focus Areas</h3>
            <p>The partnerships will concentrate on several key areas:</p>
            <ul>
              <li>Federated learning and privacy-preserving AI</li>
              <li>Edge computing and mobile AI applications</li>
              <li>Sustainable AI and green computing</li>
              <li>Human-AI collaboration interfaces</li>
              <li>AI safety and robustness</li>
            </ul>
            
            <h3>Expected Outcomes</h3>
            <p>Through these partnerships, we anticipate:</p>
            <ul>
              <li>Accelerated development of AI technologies by 2-3 years</li>
              <li>Access to larger datasets and computational resources</li>
              <li>Faster transition from research to commercial applications</li>
              <li>Enhanced global reach and impact of our research</li>
            </ul>
            
            <p>This collaboration represents a new model for academic-industry partnerships, emphasizing shared goals, complementary expertise, and mutual benefit while maintaining our commitment to open science and ethical AI development.</p>
          `,
          image: "/api/placeholder/800/400"
        },
        {
          id: 4,
          title: "Natural Language Processing Advancement",
          date: "August 3, 2025",
          summary: "Our NLP system now supports 50+ languages with enhanced contextual understanding.",
          category: "Technology",
          author: "Dr. Michael Rodriguez",
          readTime: "4 min read",
          fullContent: `
            <p>We're proud to announce a major advancement in our Natural Language Processing system, now supporting over 50 languages with significantly enhanced contextual understanding capabilities.</p>
            
            <h3>Multilingual Breakthrough</h3>
            <p>Our new multilingual NLP model represents a significant leap forward in cross-linguistic AI understanding. The system can now process and understand text in 52 languages, including low-resource languages that have traditionally been underserved by AI technologies.</p>
            
            <h3>Enhanced Capabilities</h3>
            <ul>
              <li><strong>Contextual Understanding:</strong> 40% improvement in understanding context and nuance across different languages</li>
              <li><strong>Cross-lingual Transfer:</strong> Knowledge learned in one language automatically benefits understanding in other languages</li>
              <li><strong>Cultural Sensitivity:</strong> Recognition of cultural context and appropriate language use</li>
              <li><strong>Real-time Translation:</strong> Instant, context-aware translation between supported languages</li>
            </ul>
            
            <h3>Technical Innovation</h3>
            <p>The advancement is powered by our new transformer architecture that incorporates:</p>
            <ul>
              <li>Multi-head attention mechanisms for better context capture</li>
              <li>Cross-lingual embedding spaces that preserve semantic meaning</li>
              <li>Few-shot learning capabilities for rapid adaptation to new languages</li>
              <li>Efficient model compression for deployment on mobile devices</li>
            </ul>
            
            <h3>Applications and Impact</h3>
            <p>This technology enables:</p>
            <ul>
              <li>Global customer service automation</li>
              <li>Multilingual content creation and translation</li>
              <li>Cross-cultural communication tools</li>
              <li>Educational language learning applications</li>
              <li>International business intelligence and analysis</li>
            </ul>
            
            <p>Dr. Michael Rodriguez notes: "Language is fundamental to human communication, and by breaking down language barriers with AI, we're creating opportunities for global collaboration and understanding."</p>
          `,
          image: "/api/placeholder/800/400"
        },
        {
          id: 5,
          title: "AI Research Lab Wins Innovation Award",
          date: "July 30, 2025",
          summary: "Recognized for outstanding contributions to artificial intelligence research and development.",
          category: "Award",
          author: "Admin Team",
          readTime: "3 min read",
          fullContent: `
            <p>We are honored to announce that AI Research Lab has been awarded the prestigious Global Innovation in AI Award 2025, recognizing our outstanding contributions to artificial intelligence research and development.</p>
            
            <h3>Award Recognition</h3>
            <p>The Global Innovation in AI Award is presented annually to organizations that demonstrate exceptional innovation, research excellence, and positive societal impact through artificial intelligence technologies.</p>
            
            <h3>Recognized Achievements</h3>
            <p>The award specifically recognizes our work in:</p>
            <ul>
              <li>Development of ethical AI frameworks</li>
              <li>Breakthrough research in computer vision</li>
              <li>Advancement of multilingual natural language processing</li>
              <li>Open-source contributions to the AI community</li>
              <li>Educational initiatives and knowledge sharing</li>
            </ul>
            
            <h3>Research Impact</h3>
            <p>Over the past year, our research has resulted in:</p>
            <ul>
              <li>15 peer-reviewed publications in top-tier journals</li>
              <li>6 patent applications for novel AI technologies</li>
              <li>3 open-source software releases adopted by the global community</li>
              <li>Collaboration with 25+ international research institutions</li>
              <li>Training of 200+ next-generation AI researchers</li>
            </ul>
            
            <h3>Future Commitment</h3>
            <p>This recognition reinforces our commitment to advancing AI research that benefits humanity. We will continue to focus on:</p>
            <ul>
              <li>Responsible AI development and deployment</li>
              <li>Addressing global challenges through AI innovation</li>
              <li>Fostering international collaboration in AI research</li>
              <li>Promoting diversity and inclusion in AI fields</li>
            </ul>
            
            <p>We extend our gratitude to our research team, collaborators, and the global AI community for their continued support and partnership in advancing the field of artificial intelligence.</p>
          `,
          image: "/api/placeholder/800/400"
        },
        {
          id: 6,
          title: "Open Source Machine Learning Platform Released",
          date: "July 28, 2025",
          summary: "We've made our ML platform available to the global research community.",
          category: "Open Source",
          author: "Dr. Emily Watson",
          readTime: "4 min read",
          fullContent: `
            <p>Today marks a significant milestone in democratizing machine learning research with the open-source release of our comprehensive ML Platform, now available to researchers, developers, and organizations worldwide.</p>
            
            <h3>Platform Overview</h3>
            <p>Our ML Platform provides a complete ecosystem for machine learning research and development, from data preprocessing to model deployment. The platform has been battle-tested in our research lab and is now ready for global adoption.</p>
            
            <h3>Key Features</h3>
            <ul>
              <li><strong>Automated Model Selection:</strong> Intelligent algorithms that select the best model architecture for your data</li>
              <li><strong>Distributed Training:</strong> Scale training across multiple GPUs and machines seamlessly</li>
              <li><strong>Model Versioning:</strong> Track and manage different versions of your models with built-in version control</li>
              <li><strong>Interactive Visualization:</strong> Rich, interactive dashboards for data exploration and model interpretation</li>
              <li><strong>Collaborative Workspace:</strong> Team collaboration features for shared research projects</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <p>The platform supports:</p>
            <ul>
              <li>100+ machine learning algorithms and model architectures</li>
              <li>Integration with popular frameworks (TensorFlow, PyTorch, Scikit-learn)</li>
              <li>Cloud-native deployment options</li>
              <li>REST API for easy integration</li>
              <li>Support for datasets up to 10TB in size</li>
            </ul>
            
            <h3>Community Impact</h3>
            <p>By open-sourcing this platform, we aim to:</p>
            <ul>
              <li>Accelerate machine learning research globally</li>
              <li>Lower barriers to entry for ML practitioners</li>
              <li>Foster collaboration and knowledge sharing</li>
              <li>Enable reproducible research practices</li>
              <li>Support educational initiatives in AI and ML</li>
            </ul>
            
            <h3>Getting Started</h3>
            <p>The platform is available under the MIT license and can be downloaded from our GitHub repository. We've also prepared comprehensive documentation, tutorials, and example projects to help users get started quickly.</p>
            
            <p>"Open source is fundamental to scientific progress," says Dr. Emily Watson, lead architect of the platform. "By sharing our tools and research, we can collectively advance the field of machine learning faster than any single organization could alone."</p>
            
            <h3>Community Contribution</h3>
            <p>We encourage the global community to contribute to the platform's development through bug reports, feature requests, and code contributions. A dedicated team will provide ongoing support and maintenance.</p>
          `,
          image: "/api/placeholder/800/400"
        }
      ])
      setLoading(false)
    }, 1800)
  }, [])

  const getCategoryColor = (category) => {
    const colors = {
      'Research': '#007bff',
      'Ethics': '#28a745',
      'Partnership': '#ffc107',
      'Technology': '#17a2b8',
      'Award': '#dc3545',
      'Open Source': '#6f42c1'
    }
    return colors[category] || '#6c757d'
  }

  const openArticle = (article) => {
    setSelectedArticle(article)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  const shareArticle = async (article) => {
    const shareData = {
      title: article.title,
      text: article.summary,
      url: `${window.location.origin}${window.location.pathname}#news-${article.id}`
    }

    try {
      // Check if Web Share API is available (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Show share modal with multiple options
        setShowShareModal(true)
      }
    } catch (error) {
      // Fallback: show share modal
      setShowShareModal(true)
    }
  }

  const copyToClipboard = async (article) => {
    const shareText = `${article.title}\n\n${article.summary}\n\nRead more: ${window.location.origin}${window.location.pathname}#news-${article.id}`
    
    try {
      await navigator.clipboard.writeText(shareText)
      showShareNotification('Article link copied to clipboard!')
      setShowShareModal(false)
    } catch (error) {
      showShareNotification('Failed to copy to clipboard')
    }
  }

  const shareOnSocialMedia = (platform, article) => {
    const url = `${window.location.origin}${window.location.pathname}#news-${article.id}`
    const text = `${article.title} - ${article.summary}`
    
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'email':
        const subject = encodeURIComponent(article.title)
        const body = encodeURIComponent(`${article.summary}\n\nRead the full article: ${url}`)
        shareUrl = `mailto:?subject=${subject}&body=${body}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
    setShowShareModal(false)
  }

  const showShareNotification = (message) => {
    // Create and show a temporary notification
    const notification = document.createElement('div')
    notification.className = 'share-notification'
    notification.textContent = message
    document.body.appendChild(notification)
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 3000)
  }

  const contactAuthor = (article) => {
    const subject = encodeURIComponent(`Inquiry about: ${article.title}`)
    const body = encodeURIComponent(
      `Hello ${article.author},\n\nI read your article "${article.title}" and would like to get in touch.\n\nBest regards`
    )
    
    // Use the lab's contact email or a general inquiry email
    const email = 'ly.nguyen@eiu.edu.vn'
    window.open(`mailto:${email}?subject=${subject}&body=${body}`)
  }

  return (
    <section id="news" className="news">
      <div className="container">
        <h2>Latest News</h2>
        {/* <p className="section-subtitle">Stay updated with our latest research developments and announcements</p> */}
        
        {loading ? (
          <div className="loading">Loading latest news...</div>
        ) : (
          <div className="news-grid">
            {news.map(article => (
              <article key={article.id} className="news-card">
                <div 
                  className="news-category" 
                  style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                  {article.category}
                </div>
                <h3>{article.title}</h3>
                <div className="news-meta">
                  <span className="news-date">{article.date}</span>
                  <span className="news-author">By {article.author}</span>
                </div>
                <p className="news-summary">{article.summary}</p>
                <div className="news-footer">
                  <span className="read-time">{article.readTime}</span>
                  <button 
                    className="read-more-btn"
                    onClick={() => openArticle(article)}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Article Modal */}
        {selectedArticle && (
          <div className="modal-overlay" onClick={closeArticle}>
            <div className="article-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeArticle}>×</button>
              
              <div className="modal-header">
                <div 
                  className="article-category"
                  style={{ backgroundColor: getCategoryColor(selectedArticle.category) }}
                >
                  {selectedArticle.category}
                </div>
                <h1>{selectedArticle.title}</h1>
                <div className="article-meta">
                  <div className="meta-row">
                    <span className="article-date">{selectedArticle.date}</span>
                    <span className="article-author">By {selectedArticle.author}</span>
                  </div>
                  <span className="article-read-time">{selectedArticle.readTime}</span>
                </div>
              </div>

              {selectedArticle.image && (
                <div className="article-image">
                  <img src={selectedArticle.image} alt={selectedArticle.title} />
                </div>
              )}

              <div className="article-content">
                <div 
                  className="article-text"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
                />
              </div>

              <div className="modal-actions">
                <button 
                  className="share-btn"
                  onClick={() => shareArticle(selectedArticle)}
                >
                  Share Article
                </button>
                <button 
                  className="contact-btn"
                  onClick={() => contactAuthor(selectedArticle)}
                >
                  Contact Author
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && selectedArticle && (
          <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowShareModal(false)}>×</button>
              
              <div className="share-header">
                <h3>Share Article</h3>
                <p>Share "{selectedArticle.title}" with others</p>
              </div>

              <div className="share-options">
                <button 
                  className="share-option twitter"
                  onClick={() => shareOnSocialMedia('twitter', selectedArticle)}
                >
                  <span className="share-icon">🐦</span>
                  Share on Twitter
                </button>
                
                <button 
                  className="share-option facebook"
                  onClick={() => shareOnSocialMedia('facebook', selectedArticle)}
                >
                  <span className="share-icon">📘</span>
                  Share on Facebook
                </button>
                
                <button 
                  className="share-option linkedin"
                  onClick={() => shareOnSocialMedia('linkedin', selectedArticle)}
                >
                  <span className="share-icon">💼</span>
                  Share on LinkedIn
                </button>
                
                <button 
                  className="share-option email"
                  onClick={() => shareOnSocialMedia('email', selectedArticle)}
                >
                  <span className="share-icon">📧</span>
                  Share via Email
                </button>
                
                <button 
                  className="share-option copy"
                  onClick={() => copyToClipboard(selectedArticle)}
                >
                  <span className="share-icon">📋</span>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default News
