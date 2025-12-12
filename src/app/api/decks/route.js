// Meta decks - Popular competitive decks in Clash Royale
// These represent top meta decks used in competitive play
const metaDecks =[
  {
    id: 1,
    name: "EvoMortar 2.9 Cycle",
    cards: ["skeleton-barrel", "mortar", "knight", "fireball", "dart-goblin", "minions", "skeletons", "barbarian-barrel"],
    avgElixir: 2.9,
    archetype: "Cycle"
  },
  {
    id: 2,
    name: "EvoMusk Loon 2.9 Cycle",
    cards: ["musketeer", "giant-snowball", "balloon", "miner", "ice-golem", "skeletons", "barbarian-barrel", "bomb-tower"],
    avgElixir: 2.9,
    archetype: "Cycle"
  },
  {
    id: 3,
    name: "EGiant Bowler Evo ID Nado",
    cards: ["inferno-dragon", "goblin-cage", "electro-giant", "bowler", "lightning", "tornado", "skeletons", "barbarian-barrel"],
    avgElixir: 4.0,
    archetype: "Beatdown"
  },
  {
    id: 4,
    name: "EvoRHogs GobHut IWiz EvoGhost",
    cards: ["royal-hogs", "royal-ghost", "lightning", "ice-wizard", "goblin-hut", "skeletons", "electro-spirit", "barbarian-barrel"],
    avgElixir: 3.1,
    archetype: "Bait"
  },
  {
    id: 5,
    name: "Hog Evo Exec EvoValk Nado",
    cards: ["executioner", "valkyrie", "hog-rider", "rocket", "goblins", "tornado", "ice-spirit", "the-log"],
    avgElixir: 3.4,
    archetype: "Cycle"
  },
  {
    id: 6,
    name: "GK Pekka Evo Ram MW",
    cards: ["battle-ram", "royal-ghost", "golden-knight", "pekka", "mother-witch", "minions", "arrows", "zap"],
    avgElixir: 3.8,
    archetype: "Bridgespam"
  },
  {
    id: 7,
    name: "Giant Sparky Evo Wiz Nado",
    cards: ["wizard", "zap", "giant", "sparky", "mini-pekka", "minions", "tornado", "heal-spirit"],
    avgElixir: 3.6,
    archetype: "Beatdown"
  },
  {
    id: 8,
    name: "Golem GK Evo Exec EvoGhost",
    cards: ["royal-ghost", "executioner", "golden-knight", "golem", "mini-pekka", "vines", "minions", "zappies"],
    avgElixir: 4.3,
    archetype: "Beatdown"
  },
  {
    id: 9,
    name: "LavaLoon Evo BBD MegaM",
    cards: ["baby-dragon", "valkyrie", "lava-hound", "balloon", "fireball", "mega-minion", "vines", "guards"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  },
  {
    id: 10,
    name: "SK Bait 2.5 Cycle",
    cards: ["skeleton-barrel", "skeleton-army", "skeleton-king", "suspicious-bush", "dart-goblin", "vines", "fire-spirit", "ice-spirit"],
    avgElixir: 2.5,
    archetype: "Bait"
  },
  {
    id: 11,
    name: "LavaLoon Evo BBD MegaM (Tombstone)",
    cards: ["baby-dragon", "valkyrie", "lava-hound", "balloon", "fireball", "mega-minion", "vines", "tombstone"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  },
  {
    id: 12,
    name: "X-Bow 3.0 Cycle",
    cards: ["archers", "tesla", "x-bow", "knight", "fireball", "skeletons", "electro-spirit", "the-log"],
    avgElixir: 3.0,
    archetype: "Siege"
  },
  {
    id: 13,
    name: "GobDrill EvoCannon 2.6 Cycle",
    cards: ["giant-snowball", "cannon", "goblin-drill", "rocket", "berserker", "bomber", "fire-spirit", "skeletons"],
    avgElixir: 2.6,
    archetype: "Cycle"
  },
  {
    id: 14,
    name: "EvoRG Monk FishBoy Evo Hunter",
    cards: ["royal-giant", "hunter", "monk", "fisherman", "fireball", "skeletons", "electro-spirit", "the-log"],
    avgElixir: 3.3,
    archetype: "Beatdown"
  },
  {
    id: 15,
    name: "LH BBD Spirit Empress",
    cards: ["skeleton-army", "valkyrie", "lava-hound", "spirit-empress", "baby-dragon", "fireball", "vines", "tombstone"],
    avgElixir: 4.3,
    archetype: "Beatdown"
  },
  {
    id: 16,
    name: "GK GY Bowler Evo Exec",
    cards: ["executioner", "inferno-dragon", "golden-knight", "graveyard", "bowler", "zappies", "tornado", "freeze"],
    avgElixir: 4.3,
    archetype: "Control"
  },
  {
    id: 17,
    name: "EvoRHogs 3M Hunter EvoGhost",
    cards: ["royal-hogs", "royal-ghost", "three-musketeers", "hunter", "fireball", "ice-golem", "barbarian-barrel", "heal-spirit"],
    avgElixir: 3.8,
    archetype: "Split Lane"
  },
  {
    id: 18,
    name: "Giant EvoLJ MegaM Rage",
    cards: ["lumberjack", "zap", "giant", "prince", "fireball", "mega-minion", "bomber", "rage"],
    avgElixir: 3.4,
    archetype: "Beatdown"
  },
  {
    id: 19,
    name: "EvoRG FishBoy Hunter 3.0 Cycle (BarbBarrel)",
    cards: ["royal-giant", "royal-ghost", "hunter", "fisherman", "fireball", "skeletons", "electro-spirit", "barbarian-barrel"],
    avgElixir: 3.0,
    archetype: "Cycle"
  },
  {
    id: 20,
    name: "Boss Bandit RamRider Evo Exec",
    cards: ["executioner", "giant-snowball", "boss-bandit", "ram-rider", "mini-pekka", "vines", "bomber", "barbarian-barrel"],
    avgElixir: 3.6,
    archetype: "Bridgespam"
  },
  {
    id: 21,
    name: "Hog MM EvoCannon 2.6 Cycle (Electro Spirit)",
    cards: ["firecracker", "cannon", "mighty-miner", "hog-rider", "earthquake", "skeletons", "electro-spirit", "barbarian-barrel"],
    avgElixir: 2.6,
    archetype: "Cycle"
  },
  {
    id: 22,
    name: "EGiant GK Evo BBD Bowler",
    cards: ["baby-dragon", "goblin-cage", "golden-knight", "electro-giant", "bowler", "lightning", "tornado", "barbarian-barrel"],
    avgElixir: 4.4,
    archetype: "Beatdown"
  },
  {
    id: 23,
    name: "Loon Double Dragon Bowler Freeze",
    cards: ["inferno-dragon", "knight", "balloon", "baby-dragon", "bowler", "tornado", "freeze", "barbarian-barrel"],
    avgElixir: 3.8,
    archetype: "Control"
  },
  {
    id: 24,
    name: "EGolem Monk Double Dragon Nado",
    cards: ["electro-dragon", "baby-dragon", "monk", "elixir-golem", "dark-prince", "battle-healer", "tornado", "barbarian-barrel"],
    avgElixir: 3.8,
    archetype: "Beatdown"
  },
  {
    id: 25,
    name: "EvoRG FishBoy Hunter 3.0 Cycle (Log)",
    cards: ["royal-giant", "royal-ghost", "hunter", "fisherman", "fireball", "skeletons", "electro-spirit", "the-log"],
    avgElixir: 3.0,
    archetype: "Cycle"
  },
  {
    id: 26,
    name: "GK 3M Evo Ram MW",
    cards: ["battle-ram", "royal-ghost", "golden-knight", "three-musketeers", "mother-witch", "ice-golem", "barbarian-barrel", "heal-spirit"],
    avgElixir: 3.6,
    archetype: "Split Lane"
  },
  {
    id: 27,
    name: "SK GobHut Bait 2.9 Cycle",
    cards: ["skeleton-barrel", "skeleton-army", "skeleton-king", "suspicious-bush", "dart-goblin", "vines", "goblin-hut", "fire-spirit"],
    avgElixir: 2.9,
    archetype: "Bait"
  },
  {
    id: 28,
    name: "EGolem SK Evo Exec NW",
    cards: ["skeleton-army", "executioner", "skeleton-king", "elixir-golem", "void", "night-witch", "goblin-curse", "rage"],
    avgElixir: 3.3,
    archetype: "Beatdown"
  },
  {
    id: 29,
    name: "Evo WB Berserker Valk 2.4 Cycle",
    cards: ["wall-breakers", "goblin-barrel", "valkyrie", "berserker", "dart-goblin", "fire-spirit", "ice-spirit", "cannon"],
    avgElixir: 2.4,
    archetype: "Cycle"
  },
  {
    id: 30,
    name: "Loon Miner Evo Exec EvoValk",
    cards: ["executioner", "valkyrie", "balloon", "miner", "vines", "guards", "tornado", "cannon"],
    avgElixir: 3.6,
    archetype: "Control"
  },
  {
    id: 31,
    name: "Log Bait 2.9 Cycle",
    cards: ["goblin-barrel", "dart-goblin", "knight", "princess", "goblin-gang", "ice-spirit", "the-log", "inferno-tower"],
    avgElixir: 2.9,
    archetype: "Bait"
  },
  {
    id: 32,
    name: "Hog EvoCannon 2.6 Cycle",
    cards: ["cannon", "skeletons", "hog-rider", "musketeer", "fireball", "ice-golem", "ice-spirit", "the-log"],
    avgElixir: 2.6,
    archetype: "Cycle"
  },
  {
    id: 33,
    name: "Giant Sparky Horde Evo",
    cards: ["bats", "zap", "giant", "sparky", "mini-pekka", "minion-horde", "skeleton-army", "arrows"],
    avgElixir: 3.8,
    archetype: "Beatdown"
  },
  {
    id: 34,
    name: "EvoRHogs GK 3M Hunter",
    cards: ["royal-hogs", "royal-ghost", "golden-knight", "three-musketeers", "hunter", "ice-golem", "barbarian-barrel", "heal-spirit"],
    avgElixir: 3.8,
    archetype: "Split Lane"
  },
  {
    id: 35,
    name: "Golem GK Evo BBD Evo Exec",
    cards: ["executioner", "baby-dragon", "golden-knight", "golem", "mini-pekka", "vines", "zappies", "tornado"],
    avgElixir: 4.4,
    archetype: "Beatdown"
  },
  {
    id: 36,
    name: "Golem Evo BBD EvoValk Vines",
    cards: ["baby-dragon", "valkyrie", "golem", "mini-pekka", "battle-healer", "vines", "zappies", "elixir-collector"],
    avgElixir: 4.6,
    archetype: "Beatdown"
  },
  {
    id: 37,
    name: "MM EvoCannon 2.8 Cycle",
    cards: ["cannon", "skeletons", "mighty-miner", "rocket", "princess", "goblins", "ice-spirit", "the-log"],
    avgElixir: 2.8,
    archetype: "Cycle"
  },
  {
    id: 38,
    name: "SK WB Bait 2.5 Cycle",
    cards: ["skeleton-barrel", "skeleton-army", "skeleton-king", "wall-breakers", "dart-goblin", "vines", "fire-spirit", "ice-spirit"],
    avgElixir: 2.5,
    archetype: "Bait"
  },
  {
    id: 39,
    name: "Golem GK Evo BBD EvoGhost",
    cards: ["royal-ghost", "baby-dragon", "golden-knight", "golem", "mini-pekka", "vines", "minions", "zappies"],
    avgElixir: 4.1,
    archetype: "Beatdown"
  },
  {
    id: 40,
    name: "Boss Bandit Hog Evo Exec Ghost",
    cards: ["executioner", "giant-snowball", "boss-bandit", "hog-rider", "lightning", "royal-ghost", "guards", "barbarian-barrel"],
    avgElixir: 3.9,
    archetype: "Cycle"
  },
  {
    id: 41,
    name: "Golem 3M Horde SD",
    cards: ["skeleton-army", "barbarians", "golem", "three-musketeers", "minion-horde", "skeleton-dragons", "vines", "elixir-collector"],
    avgElixir: 5.4,
    archetype: "Beatdown"
  },
  {
    id: 42,
    name: "Hog MM EvoCannon 2.6 Cycle (Ice Spirit)",
    cards: ["firecracker", "cannon", "mighty-miner", "hog-rider", "earthquake", "skeletons", "ice-spirit", "barbarian-barrel"],
    avgElixir: 2.6,
    archetype: "Cycle"
  },
  {
    id: 43,
    name: "Giant GY Bowler EvoWitch",
    cards: ["witch", "giant-snowball", "graveyard", "giant", "mini-pekka", "bowler", "minions", "arrows"],
    avgElixir: 4.0,
    archetype: "Beatdown"
  },
  {
    id: 44,
    name: "GK 3M EBarbs EvoGhost",
    cards: ["royal-ghost", "zap", "golden-knight", "three-musketeers", "elite-barbarians", "bandit", "heal-spirit", "elixir-collector"],
    avgElixir: 4.3,
    archetype: "Split Lane"
  }
]

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
