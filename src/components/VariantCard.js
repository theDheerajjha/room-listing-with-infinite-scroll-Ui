import React from 'react';
import Media from './Media';
import '../App.css';

const VariantCard = React.memo(({ variant }) => {
  return (
    <div className="variant-card">
      <Media video_url={variant.video_url} room_images={variant.room_images} />
      <div className="variant-details">
        {/* Room details with icons */}
        <div className="variant-info-list">
          <div className="variant-info"><span role="img" aria-label="meal">🍽️</span> Room only</div>
          <div className="variant-info"><span role="img" aria-label="bed">🛏️</span> Double bed</div>
          <div className="variant-info"><span role="img" aria-label="adults">👤</span> Upto 2 adults</div>
        </div>
        {/* Price section */}
        <div className="variant-price-section">
          <div className="variant-price-label">Price for 1 night</div>
          <div className="variant-price-sub">Includes taxes & fees</div>
          <div className="variant-price-row">
            {variant.original_price && (
              <span className="original-price">{variant.original_price}</span>
            )}
            <span className="price">{variant.price}</span>
            {variant.discount && <span className="discount-badge">{variant.discount}</span>}
          </div>
        </div>
        <div className="variant-cancellation">Cancellation policy <span className="variant-cancellation-link">&gt;</span></div>
        <div className="variant-special">Select rooms to add special request</div>
        <button className="select-btn">Select</button>
      </div>
    </div>
  );
});

export default VariantCard; 