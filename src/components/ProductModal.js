import React, { useEffect } from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    const handleOverlayClick = (e) => {
        // Only close if the click is on the overlay itself, not the content
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={handleOverlayClick}
            style={{ display: isOpen ? 'flex' : 'none' }} // Force display flex when open
        >
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <img src={product.image} alt={product.title} />
                <div>
                    <h2>{product.title}</h2>
                    <ul className="ingredients-list">
                        {product.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
