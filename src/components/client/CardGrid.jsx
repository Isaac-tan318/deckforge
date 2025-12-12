"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function CardGrid({
  cards,
  selectedCards,
  onCardSelect,
  searchTerm,
}) {
  const gridRef = useRef(null);

  // Filter cards based on search term
  const filteredCards = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.rarity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animate cards when they appear
  useEffect(() => {
    if (gridRef.current && filteredCards.length > 0) {
      animate(gridRef.current.querySelectorAll(".card-item"), {
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: stagger(20, { grid: [10, 10], from: "center" }),
        duration: 400,
        easing: "outElastic(1, .8)",
      });
    }
  }, [searchTerm, filteredCards.length]);

  const handleCardClick = (card) => {
    onCardSelect(card);

    // Animate the clicked card
    const cardElement = document.getElementById(`card-${card.key}`);
    if (cardElement) {
      animate(cardElement, {
        scale: [1, 1.2, 1],
        duration: 300,
        easing: "inOutQuad",
      });
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Common":
        return "from-gray-400 to-gray-500";
      case "Rare":
        return "from-orange-400 to-orange-500";
      case "Epic":
        return "from-purple-500 to-purple-600";
      case "Legendary":
        return "from-yellow-400 to-yellow-500";
      case "Champion":
        return "from-pink-500 to-pink-600";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getCardImageUrl = (card) => {
    return `https://royaleapi.github.io/cr-api-assets/cards-150/${card.key}.png`;
  };

  return (
    <div className="w-full">
      <div className="mb-4 text-sm text-gray-400">
        Showing {filteredCards.length} cards
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2"
      >
        {filteredCards.map((card) => {
          const isSelected = selectedCards.some((c) => c.key === card.key);
          return (
            <div
              key={card.key}
              id={`card-${card.key}`}
              className={`card-item relative cursor-pointer transition-all duration-200 hover:z-10 ${
                isSelected ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900" : ""
              }`}
              onClick={() => handleCardClick(card)}
            >
              <div
                className={`relative rounded-lg overflow-hidden bg-gradient-to-br ${getRarityColor(
                  card.rarity
                )} p-0.5`}
              >
                <div className="bg-gray-800 rounded-lg p-1">
                  <img
                    src={getCardImageUrl(card)}
                    alt={card.name}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold rounded-br-lg px-1.5 py-0.5">
                    {card.elixir}
                  </div>
                </div>
              </div>
              <div className="text-center mt-1">
                <p className="text-xs text-gray-300 truncate">{card.name}</p>
              </div>
              {isSelected && (
                <div className="absolute inset-0 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
