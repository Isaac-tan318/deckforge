// API route to fetch all Clash Royale cards
export async function GET() {
  try {
    const response = await fetch(
      "https://royaleapi.github.io/cr-api-data/json/cards.json",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cards");
    }

    const cards = await response.json();

    // Filter out evolved cards and super versions, keep only base cards
    const filteredCards = cards.filter(
      (card) =>
        !card.is_evolved &&
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
