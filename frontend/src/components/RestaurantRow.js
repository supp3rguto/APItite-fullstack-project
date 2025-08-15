import React, { useState } from 'react';

const INITIAL_ITEMS_LIMIT = 6;

const RestaurantRow = ({ title, restaurants }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedRestaurants = isExpanded ? restaurants : restaurants.slice(0, INITIAL_ITEMS_LIMIT);
    const shouldShowButton = restaurants.length > INITIAL_ITEMS_LIMIT;

    const handleImageError = (e) => {
        e.target.onerror = null; 
        e.target.src = `https://placehold.co/60x60/f7f7f7/ccc?text=${e.target.alt.charAt(0)}`;
    };

    return (
        <section className="restaurant-row">
            <div className="restaurant-row-header">
                <h2>{title}</h2>
                {shouldShowButton && (
                    <button onClick={toggleExpansion} className="view-more-button">
                        {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </button>
                )}
            </div>
            
            <div className="restaurant-grid">
                {displayedRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="establishment-card">
                        <div className="card-image-container">
                            <img 
                                src={`https://logo.clearbit.com/${restaurant.companyDomain}`} 
                                onError={handleImageError}
                                alt={restaurant.name} 
                            />
                        </div>
                        <div className="card-info">
                            <p className="card-title">{restaurant.name}</p>
                            <div className="card-details">
                                <span>⭐ {restaurant.rating}</span>
                                <span>•</span>
                                <span>{restaurant.category}</span>
                                <span>•</span>
                                <span>{restaurant.distance}</span>
                            </div>
                            <div className="card-delivery">
                                <span>{restaurant.deliveryTime}</span>
                                <span>•</span>
                                <span>R$ {String(restaurant.deliveryFee).replace('.', ',')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RestaurantRow;
