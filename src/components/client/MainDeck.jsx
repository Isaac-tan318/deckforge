"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function MainDeck({ deck, cards, onRemoveCard, onClearDeck, onCreateDeck, isLoading }) {
  const deckRef = useRef(null);
  const emptySlots = 8 - (deck?.length || 0);
  const prevDeckLength = useRef(0);

  useEffect(() => {
    if (deckRef.current && deck && deck.length > 0) {
      const cards = deckRef.current.querySelectorAll(".main-deck-card");
      
      // If deck size jumped significantly (e.g., Create Deck), animate all cards
      if (deck.length - prevDeckLength.current > 1) {
        animate(cards, {
          scale: [0, 1],
          rotateY: [90, 0],
          opacity: [0, 1],
          delay: stagger(80),
          duration: 500,
          easing: "outBack",
        });
      } else if (deck.length > prevDeckLength.current) {
        // Only animate the newly added card
        const lastCard = cards[cards.length - 1];
        if (lastCard) {
          animate(lastCard, {
            scale: [0, 1],
            rotateY: [90, 0],
            opacity: [0, 1],
            duration: 400,
            easing: "outBack",
          });
        }
      }
      prevDeckLength.current = deck.length;
    } else {
      prevDeckLength.current = 0;
    }
  }, [deck?.length]);

  const getCardImageUrl = (card, isEvoSlot = false) => {
    const cardData = getCardData(card);
    
    // If in evo slot and card has evolution, use evo image
    if (isEvoSlot && cardData?.hasEvolution && cardData?.evolutionIconUrl) {
      return cardData.evolutionIconUrl;
    }
    
    // Use official API icon URL
    return cardData?.iconUrl || "";
  };

  const canEvolve = (card) => {
    const cardData = getCardData(card);
    return cardData?.hasEvolution && !!cardData?.evolutionIconUrl;
  };

  const getCardData = (card) => {
    if (typeof card === 'object') return card;
    return cards.find((c) => c.key === card);
  };

  const getCardKey = (card) => {
    return typeof card === 'string' ? card : card.key;
  };

  const getRarityGradient = (rarity) => {
    switch (rarity) {
      case "Common":
        return "from-gray-500 to-gray-600";
      case "Rare":
        return "from-orange-400 to-orange-600";
      case "Epic":
        return "from-purple-500 to-purple-700";
      case "Legendary":
        return "from-yellow-400 to-amber-500";
      case "Champion":
        return "from-pink-500 to-rose-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const totalElixir = deck?.reduce((sum, card) => {
    const cardData = getCardData(card);
    return sum + (cardData?.elixir || 0);
  }, 0) || 0;

  const avgElixir = deck?.length > 0 ? (totalElixir / deck.length).toFixed(1) : "0.0";

  const handleCardClick = (card) => {
    const key = getCardKey(card);
    onRemoveCard(key);
  };

  return (
    <div className="main-deck-container bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Your Deck</h2>
            <p className="text-gray-400 text-sm">
              {deck && deck.length > 0 
                ? `${deck.length}/8 cards • ${avgElixir} avg elixir`
                : "Click cards below to build your deck"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {deck && deck.length > 0 && (
            <button
              onClick={onClearDeck}
              className="px-4 py-2 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear
              </span>
            </button>
          )}

          <button
            onClick={onCreateDeck}
            disabled={isLoading}
            className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/25"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Create Deck
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Deck Grid */}
      <div ref={deckRef} className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        {deck && deck.map((card, index) => {
          const cardData = getCardData(card);
          const cardKey = getCardKey(card);
          const isEvoSlot = index < 2;
          const isEvo = isEvoSlot && canEvolve(card);
          
          return (
            <div
              key={`${cardKey}-${index}`}
              onClick={() => handleCardClick(card)}
              className={`main-deck-card relative aspect-[3/4] bg-gradient-to-br ${
                isEvo 
                  ? "from-purple-500 to-violet-700" 
                  : (cardData ? getRarityGradient(cardData.rarity) : "from-gray-600 to-gray-700")
              } rounded-xl p-1 shadow-lg transform transition-transform hover:scale-110 hover:z-10 cursor-pointer group ${
                isEvo ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-gray-900" : ""
              }`}
            >
              {/* Evo badge */}
              {isEvoSlot && (
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full z-20 ${
                  isEvo ? "bg-purple-500 text-white" : "bg-gray-600 text-gray-300"
                }`}>
                  EVO
                </div>
              )}
              <div className="bg-gray-800 rounded-lg w-full h-full flex items-center justify-center overflow-hidden relative">
                <img
                  src={getCardImageUrl(card, isEvoSlot)}
                  alt={cardData?.name || cardKey}
                  className="w-full h-full object-contain p-1"
                />
                {/* Remove overlay on hover */}
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/30 transition-colors rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              {cardData && (
                <div className="absolute -top-1 -left-1 bg-blue-600 text-white text-xs font-bold rounded-lg px-1.5 py-0.5 shadow-md">
                  {cardData.elixir}
                </div>
              )}
            </div>
          );
        })}
        
        {/* Empty slots */}
        {Array.from({ length: emptySlots }).map((_, index) => {
          const actualIndex = (deck?.length || 0) + index;
          const isEvoSlot = actualIndex < 2;
          
          return (
            <div
              key={`empty-${index}`}
              className={`aspect-[3/4] bg-gray-800/50 rounded-xl border-2 flex items-center justify-center relative ${
                isEvoSlot ? "border-purple-500/50" : "border-gray-600"
              }`}
            >
              {isEvoSlot && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gray-600 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  EVO
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hint text */}
      {(!deck || deck.length === 0) && (
        <p className="text-center text-gray-400 text-sm mt-4">
          💡 Click on cards below to add them to your deck. Meta decks containing your cards will be shown.
        </p>
      )}
    </div>
  );
}
