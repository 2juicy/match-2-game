export default function initializeDeck() {
  let id = 0;
  const cards = [
    "Aoi",
    "Celeste",
    "Chihiro",
    "Junko",
    "Kyoko",
    "Maizono",
    "Makoto",
    "Toko"
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);
  return cards;
}
