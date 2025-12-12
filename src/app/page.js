import DeckBuilder from "@/components/client/DeckBuilder";

export const metadata = {
  title: "Clash Royale Deck Builder | DeckForge",
  description: "Build the best Clash Royale decks from current meta decks. Filter by your favorite cards and find winning deck combinations.",
};

export default function Home() {
  return <DeckBuilder />;
}
