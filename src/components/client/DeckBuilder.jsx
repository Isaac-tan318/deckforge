"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { animate, stagger } from "animejs";
import CardGrid from "@/components/client/CardGrid";
import DeckDisplay from "@/components/client/DeckDisplay";
import MainDeck from "@/components/client/MainDeck";

export default function DeckBuilder() {
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [generatedDeck, setGeneratedDeck] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [isLoadingDecks, setIsLoadingDecks] = useState(false);
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const headerRef = useRef(null);
  const titleRef = useRef(null);

  // Animate header on mount
  useEffect(() => {
    if (titleRef.current) {
      animate(titleRef.current, {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "outExpo",
      });
    }
  }, []);

  // Fetch all cards on mount
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/cards");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      } finally {
        setIsLoadingCards(false);
      }
    };

    fetchCards();
  }, []);

  // Fetch decks when selected cards change
  const fetchDecks = useCallback(async () => {
    setIsLoadingDecks(true);
    try {
      const cardKeys = selectedCards.map((c) => c.key).join(",");
      const url = cardKeys ? `/api/decks?cards=${cardKeys}` : "/api/decks";
      const response = await fetch(url);
      const data = await response.json();
      setDecks(data.decks);
    } catch (error) {
      console.error("Failed to fetch decks:", error);
    } finally {
      setIsLoadingDecks(false);
    }
  }, [selectedCards]);

  useEffect(() => {
    fetchDecks();
  }, [fetchDecks]);

  const handleCardSelect = (card) => {
    if (selectedCards.some((c) => c.key === card.key)) {
      // Remove card if already selected
      setSelectedCards((prev) => prev.filter((c) => c.key !== card.key));
    } else if (selectedCards.length < 8) {
      // Add card if not at max
      setSelectedCards((prev) => [...prev, card]);
    } else {
      // Shake animation when trying to add more than 8
      animate(".main-deck-container", {
        translateX: [0, -10, 10, -10, 10, 0],
        duration: 400,
        easing: "inOutSine",
      });
    }
  };

  const handleRemoveCard = (cardKey) => {
    setSelectedCards((prev) => prev.filter((c) => c.key !== cardKey));
  };

  const handleClearDeck = () => {
    animate(".main-deck-card", {
      scale: [1, 0],
      opacity: [1, 0],
      delay: stagger(50),
      duration: 200,
      easing: "inQuad",
      onComplete: () => {
        setSelectedCards([]);
        setGeneratedDeck(null);
      },
    });
  };

  const handleCreateDeck = async () => {
    if (decks.length === 0) return;
    
    setIsCreatingDeck(true);
    
    // Pick the best matching deck (first one since they're sorted by match)
    const bestDeck = decks[0];
    
    // Set the generated deck - convert card keys to card objects
    const deckCards = bestDeck.cards.map(key => cards.find(c => c.key === key)).filter(Boolean);
    setSelectedCards(deckCards);
    setGeneratedDeck(bestDeck);
    setIsCreatingDeck(false);
  };

  const filterCardsByType = (type) => {
    if (type === "all") return cards;
    return cards.filter((card) => card.type.toLowerCase() === type.toLowerCase());
  };

  const cardTypes = ["all", "Troop", "Spell", "Building"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header ref={headerRef} className="text-center mb-8">
          <div ref={titleRef}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 pb-1">
                Deck Forge
            </h1>
            <p className="text-gray-400 text-lg">
              Select cards as filters and create the best meta deck
            </p>
          </div>
        </header>

        {/* Main Deck Display */}
        <MainDeck
          deck={selectedCards}
          cards={cards}
          onRemoveCard={handleRemoveCard}
          onClearDeck={handleClearDeck}
          onCreateDeck={handleCreateDeck}
          isLoading={isCreatingDeck}
        />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left panel - Card Selection */}
          <div className="space-y-4">
            {/* Search and Filter */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search cards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Type Filter Tabs */}
                <div className="flex gap-1 bg-gray-700 rounded-lg p-1">
                  {cardTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveTab(type)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeTab === type
                          ? "bg-blue-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-600"
                      }`}
                    >
                      {type === "all" ? "All" : type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Grid */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 max-h-[600px] overflow-y-auto custom-scrollbar">
              {isLoadingCards ? (
                <div className="flex items-center justify-center py-16">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                </div>
              ) : (
                <CardGrid
                  cards={filterCardsByType(activeTab)}
                  selectedCards={selectedCards}
                  onCardSelect={handleCardSelect}
                  searchTerm={searchTerm}
                />
              )}
            </div>
          </div>

          {/* Right panel - Deck Display */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 max-h-[900px] overflow-y-auto custom-scrollbar">
            <DeckDisplay decks={decks} cards={cards} isLoading={isLoadingDecks} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>
            Card data from{" "}
            <a
              href="https://royaleapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              RoyaleAPI
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
