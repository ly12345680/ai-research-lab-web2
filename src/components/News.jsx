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
          title: "AI Research Lab Officially Established at Eastern International University",
          date: "August 12, 2025",
          summary: "The School of Computing and Information Technology proudly announces the establishment of our new AI Research Lab, marking a new era of innovation and research excellence.",
          category: "Partnership",
          author: "Dean's Office",
          readTime: "4 min read",
          fullContent: `
            <p>We are thrilled to announce the official establishment of the AI Research Lab within the School of Computing and Information Technology at Eastern International University. This groundbreaking initiative represents our commitment to advancing artificial intelligence research and education in Vietnam and Southeast Asia.</p>
            
            <h3>Vision and Mission</h3>
            <p>The AI Research Lab is founded with the vision to become a leading center for AI innovation, fostering cutting-edge research that addresses real-world challenges while training the next generation of AI professionals. Our mission encompasses three core pillars:</p>
            <ul>
              <li><strong>Research Excellence:</strong> Conducting world-class research in machine learning, deep learning, computer vision, natural language processing, and AI ethics</li>
              <li><strong>Educational Innovation:</strong> Developing comprehensive AI curricula and hands-on learning experiences for undergraduate and graduate students</li>
              <li><strong>Industry Collaboration:</strong> Partnering with leading technology companies and organizations to bridge the gap between academic research and practical applications</li>
            </ul>
            
            <h3>State-of-the-Art Facilities</h3>
            <p>The lab is equipped with cutting-edge infrastructure including:</p>
            <ul>
              <li>High-performance GPU clusters for deep learning research</li>
              <li>Advanced data visualization and analysis workstations</li>
              <li>Collaborative research spaces designed for interdisciplinary work</li>
              <li>Specialized hardware for robotics and computer vision experiments</li>
              <li>Secure cloud computing resources for large-scale data processing</li>
            </ul>
            
            <h3>Research Focus Areas</h3>
            <p>The AI Research Lab will concentrate on several key research domains:</p>
            <ul>
              <li><strong>Healthcare AI:</strong> Developing AI solutions for medical diagnosis, drug discovery, and personalized treatment</li>
              <li><strong>Smart Cities:</strong> Creating intelligent systems for urban planning, traffic management, and environmental monitoring</li>
              <li><strong>Financial Technology:</strong> Advancing AI applications in fraud detection, risk assessment, and algorithmic trading</li>
              <li><strong>Educational Technology:</strong> Building AI-powered learning platforms and personalized education systems</li>
              <li><strong>Sustainable AI:</strong> Researching energy-efficient AI algorithms and environmentally conscious computing</li>
            </ul>
            
            <h3>Leadership Team</h3>
            <p>The lab is led by a distinguished team of researchers and faculty members with extensive experience in AI research and industry applications. Our interdisciplinary approach brings together experts from computer science, engineering, mathematics, and domain-specific fields.</p>
            
            <h3>Student Opportunities</h3>
            <p>The establishment of the AI Research Lab opens exciting opportunities for students:</p>
            <ul>
              <li>Research assistantships and internship programs</li>
              <li>Access to industry mentorship and networking events</li>
              <li>Participation in international conferences and competitions</li>
              <li>Collaboration on real-world AI projects with industry partners</li>
              <li>Advanced AI specialization tracks and certification programs</li>
            </ul>
            
            <h3>Community Impact</h3>
            <p>Beyond academic research, the AI Research Lab is committed to making a positive impact on the local and global community. We plan to:</p>
            <ul>
              <li>Offer AI literacy programs for the general public</li>
              <li>Support local startups and SMEs in adopting AI technologies</li>
              <li>Contribute to national AI policy development and ethical guidelines</li>
              <li>Foster international research collaborations and knowledge exchange</li>
            </ul>
            
            <p>"The establishment of this AI Research Lab marks a pivotal moment for Eastern International University and our region," said the Dean of the School of Computing and Information Technology. "We are not just creating a research facility; we are building a hub for innovation that will shape the future of artificial intelligence in Southeast Asia."</p>
            
            <h3>Looking Forward</h3>
            <p>As we embark on this exciting journey, we invite students, faculty, industry partners, and the broader community to join us in shaping the future of AI research and education. Together, we will push the boundaries of what's possible and create meaningful solutions for tomorrow's challenges.</p>
            
            <p>For more information about research opportunities, partnerships, or collaboration, please contact us through our official channels.</p>
          `,
          image: "https://eiu.edu.vn/wp-content/uploads/2025/07/eastern-international-university-1.jpg"
        },
        
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
