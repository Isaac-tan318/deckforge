"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function DeckDisplay({ decks, cards, isLoading, onUseDeck }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && decks.length > 0 && !isLoading) {
      animate(containerRef.current.querySelectorAll(".deck-card"), {
        translateY: [30, 0],
        opacity: [0, 1],
        delay: stagger(100),
        duration: 500,
        easing: "outQuart",
      });
    }
  }, [decks, isLoading]);

  const getCardImageUrl = (cardKey, isEvoSlot = false) => {
    // Find card data to get official API icon URL
    const cardData = getCardData(cardKey);
    
    // If in evo slot and card has evolution, use evo image
    if (isEvoSlot && cardData?.hasEvolution && cardData?.evolutionIconUrl) {
      return cardData.evolutionIconUrl;
    }
    
    return cardData?.iconUrl || null;
  };

  const canEvolve = (cardKey) => {
    const cardData = getCardData(cardKey);
    return cardData?.hasEvolution && !!cardData?.evolutionIconUrl;
  };

  const getCardData = (cardKey) => {
    return cards.find((c) => c.key === cardKey);
  };

  const getArchetypeColor = (archetype) => {
    switch (archetype) {
      case "Cycle":
        return "bg-cyan-500";
      case "Beatdown":
        return "bg-red-500";
      case "Siege":
        return "bg-yellow-500";
      case "Bait":
        return "bg-green-500";
      case "Control":
        return "bg-blue-500";
      case "Bridge Spam":
        return "bg-purple-500";
      case "Chip":
        return "bg-orange-500";
      case "Split Lane":
        return "bg-pink-500";
      case "Aggro":
        return "bg-rose-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRarityGlow = (rarity) => {
    switch (rarity) {
      case "Common":
        return "shadow-gray-400/30";
      case "Rare":
        return "shadow-orange-400/30";
      case "Epic":
        return "shadow-purple-500/30";
      case "Legendary":
        return "shadow-yellow-400/30";
      case "Champion":
        return "shadow-pink-500/30";
      default:
        return "shadow-gray-400/30";
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-400">Finding meta decks...</p>
      </div>
    );
  }

  if (decks.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-800/30 rounded-xl border border-gray-700">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-400 mb-2">No Decks Found</h3>
        <p className="text-gray-500">Try selecting different cards or remove some filters</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Meta Decks
        </h2>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
          {decks.length} deck{decks.length !== 1 ? "s" : ""} found
        </span>
      </div>

      {decks.map((deck, index) => (
        <div
          key={deck.id}
          className="deck-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-600">#{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{deck.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full text-white ${getArchetypeColor(deck.archetype)}`}>
                    {deck.archetype}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-2.83 2H6a1 1 0 100 2h2.17A3.001 3.001 0 0011 10a3 3 0 002.83-2H14a1 1 0 100-2h-.17A3.001 3.001 0 0011 4z" clipRule="evenodd" />
                    </svg>
                    {deck.avgElixir} avg
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-0">
              <button
                onClick={() => onUseDeck && onUseDeck(deck)}
                className="px-3 py-2 rounded-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 8l-6 6M8 20l6-6" />
                  </svg>
                  Use
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {deck.cards.map((cardKey, cardIndex) => {
              const cardData = getCardData(cardKey);
              const isEvoSlot = cardIndex < 2;
              const isEvo = isEvoSlot && canEvolve(cardKey);
              
              return (
                <div
                  key={cardKey}
                  className={`relative rounded-lg p-1 transition-transform hover:scale-110 hover:z-10 shadow-lg ${
                    isEvo 
                      ? "bg-gradient-to-br from-purple-500 to-violet-700 ring-2 ring-purple-400" 
                      : "bg-gray-700"
                  } ${cardData ? getRarityGlow(cardData.rarity) : ""}`}
                >
                  {/* Evo badge */}
                  {isEvoSlot && (
                    <div className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full z-20 ${
                      isEvo ? "bg-purple-500 text-white" : "bg-gray-600 text-gray-300"
                    }`}>
                      EVO
                    </div>
                  )}
                  <img
                    src={getCardImageUrl(cardKey, isEvoSlot)}
                    alt={cardData?.name || cardKey}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  {cardData && cardData.elixir > 0 && (
                    <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold rounded-br-lg px-1">
                      {cardData.elixir}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
