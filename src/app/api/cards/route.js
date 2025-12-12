// API route to fetch all Clash Royale cards
// Uses RoyaleAPI proxy for official Clash Royale API

export async function GET() {
  const API_KEY = process.env.CLASH_ROYALE_API_KEY;

  if (!API_KEY) {
    return Response.json(
      { error: "CLASH_ROYALE_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://proxy.royaleapi.dev/v1/cards", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform official API format to match our app's expected format
    const cards = data.items.map((card) => ({
      key: card.name.toLowerCase().replace(/ /g, "-").replace(/\./g, ""),
      name: card.name,
      elixir: card.elixir || 0,
      type: getCardType(card),
      rarity: formatRarity(card.rarity),
      id: card.id,
      maxLevel: card.maxLevel,
      // Use official API icon URLs
      iconUrl: card.iconUrls?.medium || "",
      evolutionIconUrl: card.iconUrls?.evolutionMedium || "",
      // Check if card has evolution (has evolutionMedium URL)
      hasEvolution: !!card.iconUrls?.evolutionMedium,
      is_evolved: false,
    }));

    // Filter out unwanted cards
    const filteredCards = cards.filter(
      (card) =>
        !card.key.startsWith("super-") &&
        !card.key.startsWith("santa-") &&
        !card.key.startsWith("raging-") &&
        card.key !== "party-hut" &&
        card.key !== "party-rocket"
    );

    return Response.json(filteredCards);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// Helper to determine card type from official API
function getCardType(card) {
  if (
    card.name?.includes("Tower") ||
    card.name?.includes("Hut") ||
    card.name?.includes("Cannon") ||
    card.name?.includes("Mortar") ||
    card.name?.includes("Tesla") ||
    card.name?.includes("Furnace") ||
    card.name?.includes("Tombstone") ||
    card.name?.includes("X-Bow") ||
    card.name?.includes("Goblin Cage") ||
    card.name?.includes("Goblin Drill") ||
    card.name?.includes("Elixir Collector")
  ) {
    return "Building";
  }

  const spellNames = [
    "Fireball", "Arrows", "Rage", "Rocket", "Goblin Barrel", "Freeze",
    "Mirror", "Lightning", "Zap", "Poison", "Graveyard", "The Log",
    "Tornado", "Clone", "Earthquake", "Barbarian Barrel", "Giant Snowball",
    "Royal Delivery"
  ];

  if (spellNames.some((spell) => card.name?.includes(spell))) {
    return "Spell";
  }

  return "Troop";
}

// Helper to format rarity from API enum to title case
function formatRarity(rarity) {
  if (!rarity) return "Common";
  // API returns: COMMON, RARE, EPIC, LEGENDARY, CHAMPION
  // Convert to: Common, Rare, Epic, Legendary, Champion
  return rarity.charAt(0).toUpperCase() + rarity.slice(1).toLowerCase();
}
