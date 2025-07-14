import React, { useState } from 'react';
import VariantCard from './VariantCard';
import '../App.css';

const VARIANT_PREVIEW_COUNT = 2;

const RoomCard = ({ room }) => {
  const [expanded, setExpanded] = useState(false);
  const variantsToShow = expanded ? room.variants : room.variants.slice(0, VARIANT_PREVIEW_COUNT);

  return (
    <div className={`room-card${expanded ? ' expanded' : ''}`}>
      <h2>{room.name}</h2>
      <div className="variant-list">
        {variantsToShow.map((variant, idx) => (
          <VariantCard key={variant.id || idx} variant={variant} />
        ))}
      </div>
      {room.variants.length > VARIANT_PREVIEW_COUNT && (
        <button className="expand-btn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Click to see less' : 'Click to see more'}
        </button>
      )}
    </div>
  );
};

export default RoomCard; 