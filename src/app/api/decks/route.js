// Meta decks - Popular competitive decks in Clash Royale
// These represent top meta decks used in competitive play
const metaDecks = [
  {
    id: 1,
    name: "Hog 2.6 Cycle",
    cards: ["hog-rider", "musketeer", "ice-spirit", "skeletons", "cannon", "fireball", "the-log", "ice-golem"],
    avgElixir: 2.6,
    archetype: "Cycle"
  },
  {
    id: 2,
    name: "Log Bait",
    cards: ["goblin-barrel", "princess", "goblin-gang", "ice-spirit", "inferno-tower", "rocket", "the-log", "knight"],
    avgElixir: 3.0,
    archetype: "Bait"
  },
  {
    id: 3,
    name: "Golem Beatdown",
    cards: ["golem", "night-witch", "lumberjack", "mega-minion", "baby-dragon", "tornado", "lightning", "barbarian-barrel"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  },
  {
    id: 4,
    name: "Pekka Bridge Spam",
    cards: ["pekka", "bandit", "battle-ram", "electro-wizard", "minions", "poison", "zap", "royal-ghost"],
    avgElixir: 3.6,
    archetype: "Bridge Spam"
  },
  {
    id: 5,
    name: "X-Bow Cycle",
    cards: ["x-bow", "tesla", "archers", "ice-spirit", "skeletons", "fireball", "the-log", "ice-golem"],
    avgElixir: 2.9,
    archetype: "Siege"
  },
  {
    id: 6,
    name: "Lava Hound",
    cards: ["lava-hound", "balloon", "mega-minion", "minions", "tombstone", "fireball", "zap", "miner"],
    avgElixir: 3.9,
    archetype: "Beatdown"
  },
  {
    id: 7,
    name: "Royal Giant",
    cards: ["royal-giant", "fisherman", "hunter", "electro-wizard", "mega-minion", "lightning", "barbarian-barrel", "fireball"],
    avgElixir: 4.0,
    archetype: "Control"
  },
  {
    id: 8,
    name: "Miner Wall Breakers",
    cards: ["miner", "wall-breakers", "magic-archer", "valkyrie", "bats", "bomb-tower", "fireball", "the-log"],
    avgElixir: 3.0,
    archetype: "Chip"
  },
  {
    id: 9,
    name: "Graveyard Freeze",
    cards: ["graveyard", "freeze", "baby-dragon", "tornado", "knight", "archers", "poison", "barbarian-barrel"],
    avgElixir: 3.4,
    archetype: "Control"
  },
  {
    id: 10,
    name: "Giant Double Prince",
    cards: ["giant", "prince", "dark-prince", "mega-minion", "electro-wizard", "fireball", "zap", "miner"],
    avgElixir: 3.9,
    archetype: "Beatdown"
  },
  {
    id: 11,
    name: "Mortar Cycle",
    cards: ["mortar", "miner", "bats", "goblin-gang", "spear-goblins", "knight", "rocket", "the-log"],
    avgElixir: 2.9,
    archetype: "Siege"
  },
  {
    id: 12,
    name: "Three Musketeers",
    cards: ["three-musketeers", "battle-ram", "elixir-collector", "minion-horde", "barbarians", "heal-spirit", "giant", "fireball"],
    avgElixir: 4.3,
    archetype: "Split Lane"
  },
  {
    id: 13,
    name: "Mega Knight Ram",
    cards: ["mega-knight", "ram-rider", "bandit", "electro-wizard", "minions", "poison", "zap", "inferno-dragon"],
    avgElixir: 3.9,
    archetype: "Bridge Spam"
  },
  {
    id: 14,
    name: "Sparky Goblin Giant",
    cards: ["sparky", "goblin-giant", "minion-horde", "goblin-gang", "rage", "zap", "dark-prince", "electro-wizard"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  },
  {
    id: 15,
    name: "Royal Hogs Fireball Bait",
    cards: ["royal-hogs", "firecracker", "goblin-cage", "earthquake", "royal-delivery", "barbarian-barrel", "hunter", "heal-spirit"],
    avgElixir: 3.1,
    archetype: "Bait"
  },
  {
    id: 16,
    name: "Elixir Golem Battle Healer",
    cards: ["elixir-golem", "battle-healer", "night-witch", "electro-dragon", "dark-prince", "tornado", "barbarian-barrel", "rage"],
    avgElixir: 3.5,
    archetype: "Beatdown"
  },
  {
    id: 17,
    name: "Balloon Freeze",
    cards: ["balloon", "freeze", "lumberjack", "musketeer", "knight", "bats", "arrows", "inferno-tower"],
    avgElixir: 3.5,
    archetype: "Aggro"
  },
  {
    id: 18,
    name: "E-Giant Beatdown",
    cards: ["electro-giant", "dark-prince", "mega-minion", "electro-spirit", "tornado", "lightning", "barbarian-barrel", "goblin-cage"],
    avgElixir: 3.8,
    archetype: "Beatdown"
  },
  {
    id: 19,
    name: "Bowler Graveyard",
    cards: ["graveyard", "bowler", "baby-dragon", "tornado", "ice-wizard", "poison", "barbarian-barrel", "freeze"],
    avgElixir: 3.8,
    archetype: "Control"
  },
  {
    id: 20,
    name: "Phoenix Hog",
    cards: ["hog-rider", "phoenix", "ice-golem", "ice-spirit", "cannon", "earthquake", "the-log", "musketeer"],
    avgElixir: 2.9,
    archetype: "Cycle"
  },
  {
    id: 21,
    name: "Skeleton King Graveyard",
    cards: ["skeleton-king", "graveyard", "tornado", "baby-dragon", "barbarian-barrel", "poison", "tombstone", "archers"],
    avgElixir: 3.4,
    archetype: "Control"
  },
  {
    id: 22,
    name: "Golden Knight Hog",
    cards: ["golden-knight", "hog-rider", "musketeer", "ice-spirit", "skeletons", "cannon", "earthquake", "the-log"],
    avgElixir: 2.9,
    archetype: "Cycle"
  },
  {
    id: 23,
    name: "Archer Queen X-Bow",
    cards: ["archer-queen", "x-bow", "tesla", "skeletons", "ice-spirit", "fireball", "the-log", "archers"],
    avgElixir: 3.1,
    archetype: "Siege"
  },
  {
    id: 24,
    name: "Monk Pekka",
    cards: ["monk", "pekka", "bandit", "royal-ghost", "battle-ram", "minions", "poison", "zap"],
    avgElixir: 3.9,
    archetype: "Bridge Spam"
  },
  {
    id: 25,
    name: "Mighty Miner Control",
    cards: ["mighty-miner", "cannon-cart", "phoenix", "bats", "skeleton-barrel", "earthquake", "arrows", "miner"],
    avgElixir: 3.1,
    archetype: "Control"
  },
  {
    id: 26,
    name: "Giant Skeleton Clone",
    cards: ["giant-skeleton", "clone", "witch", "baby-dragon", "skeleton-army", "arrows", "tornado", "night-witch"],
    avgElixir: 3.8,
    archetype: "Beatdown"
  },
  {
    id: 27,
    name: "Ram Rider Control",
    cards: ["ram-rider", "hunter", "bats", "skeletons", "ice-golem", "poison", "the-log", "inferno-tower"],
    avgElixir: 3.3,
    archetype: "Control"
  },
  {
    id: 28,
    name: "Double Dragon",
    cards: ["baby-dragon", "inferno-dragon", "golem", "lumberjack", "mega-minion", "tornado", "barbarian-barrel", "lightning"],
    avgElixir: 4.3,
    archetype: "Beatdown"
  },
  {
    id: 29,
    name: "Ice Bow",
    cards: ["x-bow", "ice-wizard", "tornado", "tesla", "skeletons", "ice-spirit", "rocket", "the-log"],
    avgElixir: 3.1,
    archetype: "Siege"
  },
  {
    id: 30,
    name: "Mother Witch Beatdown",
    cards: ["mother-witch", "golem", "dark-prince", "mega-minion", "tornado", "lightning", "barbarian-barrel", "electro-dragon"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filterCards = searchParams.get("cards");

    let filteredDecks = [...metaDecks];

    // If filter cards are provided, filter decks that contain ALL those cards
    if (filterCards) {
      const cardFilters = filterCards.split(",").map((c) => c.trim().toLowerCase());
      
      filteredDecks = metaDecks.filter((deck) => {
        return cardFilters.every((filterCard) =>
          deck.cards.some((deckCard) => deckCard.toLowerCase() === filterCard)
        );
      });
    }

    // Sort by average elixir cost (efficiency)
    filteredDecks.sort((a, b) => a.avgElixir - b.avgElixir);

    return Response.json({
      decks: filteredDecks,
      totalDecks: filteredDecks.length,
      filters: filterCards ? filterCards.split(",") : []
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
