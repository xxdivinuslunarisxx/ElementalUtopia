import type { Metadata } from "next";

/* =====================================================================
   MENU PRICES: edit here.
   Write each price as text, e.g. "£3.20".
   Leave a price as "" to show "Price TBC" on the site.
   ===================================================================== */
const MENU: { hot: MenuItem[]; iced: MenuItem[] } = {
  hot: [
    { name: "Espresso", price: "" },
    { name: "Flat White", price: "" },
    { name: "Latte", price: "" },
    { name: "Cappuccino", price: "" },
    { name: "Americano", price: "" },
  ],
  iced: [
    { name: "Iced Latte", price: "" },
    { name: "Iced Americano", price: "" },
  ],
};

type MenuItem = { name: string; price: string };

const allPriced = [...MENU.hot, ...MENU.iced].every(
  (drink) => drink.price.trim() !== ""
);

function displayPrice(price: string) {
  return price.trim() || "Price TBC";
}

export const metadata: Metadata = {
  title: "Coffee Menu",

  description:
    "Explore the specialty coffee menu served at Elemental Utopia pop-ups, including espresso, milk drinks and seasonal offerings.",

  alternates: {
    canonical: "https://elementalutopia.com/menu",
  },
};

const prepNotes = [
  {
    title: "Espresso",
    body: "A concentrated shot of coffee brewed under pressure."
  },
  {
    title: "Flat White",
    body: "Espresso with steamed milk and thin foam, using less milk than a latte."
  },
  {
    title: "Latte",
    body: "Espresso with steamed milk and light foam."
  },
  {
    title: "Cappuccino",
    body: "Espresso with steamed milk and thick foam on top."
  },
  {
    title: "Americano",
    body: "Hot water topped with espresso."
  }
];

export default function MenuPage() {
  return (
    <div className="pageStack">
      <section className="pageHero">
        <div>
          <h1>Menu</h1>
          <p>
            Coffee drinks made with specialty espresso.
            {!allPriced &&
              " Prices are currently unset while the launch menu is being finalised."}
          </p>
        </div>
      </section>

      <section className="menuColumns" aria-label="Coffee drinks">
        <div className="menuPanel">
          <h2>Hot</h2>
          <ul className="priceList">
            {MENU.hot.map((drink) => (
              <li key={drink.name}>
                <span>{drink.name}</span>
                <span>{displayPrice(drink.price)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menuPanel">
          <h2>Iced</h2>
          <ul className="priceList">
            {MENU.iced.map((drink) => (
              <li key={drink.name}>
                <span>{drink.name}</span>
                <span>{displayPrice(drink.price)}</span>
              </li>
            ))}
          </ul>
          <p className="smallNote">Iced drinks available when ice supply permits.</p>
        </div>
        <div className="menuPanel">
          <h2>Milk Options</h2>
          <ul className="plainList">
            <li>Oat</li>
            <li>Semi-skimmed</li>
          </ul>
          <p className="smallNote">
            All milk-based drinks contain dairy. Oat milk is available, but due
            to shared equipment we cannot guarantee oat milk drinks are
            completely dairy-free.
          </p>
        </div>
      </section>

      <section className="contentBand">
        <div className="sectionHeader">
          <h2>Drink Preparation</h2>
          <p>
            Espresso is the heart of every drink, so the coffee is dialled in
            throughout the day for balance, sweetness, and clarity.
          </p>
        </div>
        <div className="definitionList">
          {prepNotes.map((note) => (
            <article key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
