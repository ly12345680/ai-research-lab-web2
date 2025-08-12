import React, { useState, useEffect } from 'react'
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    // Simulate loading products
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          title: "LLMs for Package Selection",
          description: "Advanced LLMs for intelligent package selection and optimization.",
          category: "LLMs",
          keyFeatures: [
            "----",

          ],
          videoDemo: "https://www.w3schools.com/html/mov_bbb.mp4",
          techSpecs: {
            "Processing Speed": "---",
            "Accuracy": "---",
            "Supported Formats": "---",
            "Platform": "---"
          }
        },
        {
          id: 1,
          title: "LLMs for Package Selection",
          description: "Advanced LLMs for intelligent package selection and optimization.",
          category: "LLMs",
          keyFeatures: [
            "----",

          ],
          videoDemo: "https://www.w3schools.com/html/mov_bbb.mp4",
          techSpecs: {
            "Processing Speed": "---",
            "Accuracy": "---",
            "Supported Formats": "---",
            "Platform": "---"
          }
        },
        {
          id: 1,
          title: "LLMs for Package Selection",
          description: "Advanced LLMs for intelligent package selection and optimization.",
          category: "LLMs",
          keyFeatures: [
            "----",

          ],
          videoDemo: "https://www.w3schools.com/html/mov_bbb.mp4",
          techSpecs: {
            "Processing Speed": "---",
            "Accuracy": "---",
            "Supported Formats": "---",
            "Platform": "---"
          }
        }
        
      ])
      setLoading(false)
    }, 1500)
  }, [])

  const openProductModal = (product) => {
    setSelectedProduct(product)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Products</h2>
        {/* <p className="section-subtitle">These are our products</p> */}
        
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-category">{product.category}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-actions">
                  <button 
                    className="demo-btn"
                    onClick={() => openProductModal(product)}
                  >
                    View Demo & Features
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Modal */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeProductModal}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeProductModal}>×</button>
              
              <div className="modal-header">
                <div className="product-category">{selectedProduct.category}</div>
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.description}</p>
              </div>

              <div className="modal-content">
                {/* Video Demo Section */}
                <div className="demo-section">
                  <h3>Video Demo</h3>
                  <div className="video-container">
                    <video 
                      controls 
                      poster="/api/placeholder/600/400"
                      className="demo-video"
                    >
                      <source src={selectedProduct.videoDemo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Key Features Section */}
                <div className="features-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProduct.keyFeatures.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div className="specs-section">
                  <h3>Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.techSpecs).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="contact-btn">Contact Sales</button>
                  <button className="trial-btn">Start Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
