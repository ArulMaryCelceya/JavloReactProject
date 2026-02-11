import React, { useState } from 'react';
import ProductModal from './ProductModal';

// Product Data
const products = [
    {
        id: 1,
        title: 'Kupiameni Herbal Bar',
        tagline: 'ANCIENT HEALING',
        image: process.env.PUBLIC_URL + '/images/kupiameni.png',
        ingredients: ['Kupiameni Leaf Extract', 'Coconut & Castor Oil'],
        description: 'An Ayurvedic medicinal formulation with Kupiameni Leaf Extract that purifies the skin, reduces inflammation, and supports healthy skin recovery.'
    },
    {
        id: 2,
        title: 'Nalugu Mavu Bath Bar',
        tagline: 'TRADITIONAL GLOW',
        image: process.env.PUBLIC_URL + '/images/nalugu.png',
        ingredients: ['Green Gram Flour', 'Turmeric & Sandalwood'],
        description: 'An age-old Ayurvedic formulation with Green Gram Flour, Turmeric, and Sandalwood that purifies skin, improves complexion, and restores natural radiance.'
    },
    {
        id: 3,
        title: 'Activated Charcoal Bar',
        tagline: 'DEEP DETOX',
        image: process.env.PUBLIC_URL + '/images/charcoal.png',
        ingredients: ['Bamboo Charcoal', 'Tea Tree Oil'],
        description: 'Powerfully draws out toxins, unclogs deep pores, and controls excess oil. Helps reduce acne, blackheads, and breakouts while leaving skin fresh and balanced.'
    },
    {
        id: 4,
        title: 'Orange Peel Bar',
        tagline: 'FRESH RADIANCE',
        image: process.env.PUBLIC_URL + '/images/orange.png',
        ingredients: ['Orange Peel Powder', 'Natural Vitamin C'],
        description: 'Gently exfoliates dead skin cells, boosts natural radiance, and helps reduce tan and pigmentation. Leaves your skin visibly brighter, refreshed, and naturally glowing with every wash.'
    },
    {
        id: 5,
        title: 'Manjistha Beauty Bar',
        tagline: 'AYURVEDIC BEAUTY',
        image: process.env.PUBLIC_URL + '/images/manjistha.png',
        ingredients: ['Manjistha Root', 'Neem & Aloe Vera'],
        description: 'A powerful herbal blend that purifies the skin, fights impurities, and soothes irritation. Helps improve complexion, enhance skin clarity, and reveal naturally healthy, glowing skin.'
    },
    {
        id: 6,
        title: 'Neem & Aloe Vera Bar',
        tagline: 'PURE CARE',
        image: process.env.PUBLIC_URL + '/images/neem.png',
        ingredients: ['Neem Leaf Extract', 'Fresh Aloe Vera Gel', 'Coconut Oil Base'],
        description: 'Gently cleanses and purifies the skin while reducing acne and breakouts. Soothes irritation, calms redness, and helps restore skin balance. Perfect for sensitive, acne-prone, and problem-prone skin.'
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section id="products">
            <div className="title-wrapper">
                <h2>Our Signature Handmade Collection</h2>
                <p>Fully organic soaps crafted in small batches.</p>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="card"
                        onClick={() => handleOpenModal(product)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') handleOpenModal(product);
                        }}
                    >
                        <img src={product.image} alt={product.title} />
                        <span>{product.tagline}</span>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Products;
