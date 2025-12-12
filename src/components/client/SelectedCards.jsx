"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function SelectedCards({ selectedCards, onRemoveCard, onClearAll }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && selectedCards.length > 0) {
      const cards = containerRef.current.querySelectorAll(".selected-card");
      animate(cards[cards.length - 1], {
        translateX: [-50, 0],
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 400,
        easing: "outBack",
      });
    }
  }, [selectedCards.length]);

  const handleRemove = (card) => {
    const cardElement = document.getElementById(`selected-${card.key}`);
    if (cardElement) {
      animate(cardElement, {
        scale: [1, 0],
        opacity: [1, 0],
        duration: 200,
        easing: "inQuad",
        onComplete: () => onRemoveCard(card),
      });
    } else {
      onRemoveCard(card);
    }
  };

  const getCardImageUrl = (card) => {
    return card.iconUrl || null;
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case "Common":
        return "border-gray-400";
      case "Rare":
        return "border-orange-400";
      case "Epic":
        return "border-purple-500";
      case "Legendary":
        return "border-yellow-400";
      case "Champion":
        return "border-pink-500";
      default:
        return "border-gray-400";
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Card Filters
          <span className="text-sm font-normal text-gray-400">
            ({selectedCards.length}/8 max)
          </span>
        </h2>
        {selectedCards.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear All
          </button>
        )}
      </div>

      {selectedCards.length === 0 ? (
        <div className="text-gray-500 text-center py-6 border-2 border-dashed border-gray-700 rounded-lg">
          <svg className="w-12 h-12 mx-auto mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p>Click on cards below to filter decks</p>
          <p className="text-sm mt-1">Decks containing your selected cards will be shown</p>
        </div>
      ) : (
        <div ref={containerRef} className="flex flex-wrap gap-2">
          {selectedCards.map((card) => (
            <div
              key={card.key}
              id={`selected-${card.key}`}
              className={`selected-card relative group bg-gray-700 rounded-lg p-1 border-2 ${getRarityBorder(card.rarity)} transition-transform hover:scale-105`}
            >
              <img
                src={getCardImageUrl(card)}
                alt={card.name}
                className="w-12 h-12 object-contain"
              />
              <button
                onClick={() => handleRemove(card)}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
              <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold rounded-tr-lg px-1">
                {card.elixir}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
