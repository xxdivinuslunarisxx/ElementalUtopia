import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Elemental Utopia coffee menu with hot drinks, iced drinks, milk options, and allergen information."
};

const hotDrinks = ["Espresso", "Flat White", "Latte", "Cappuccino", "Americano"];
const icedDrinks = ["Iced Latte", "Iced Americano"];
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
      <section className="pageHero splitHero">
        <div>
          <h1>Menu</h1>
          <p>
            Coffee drinks made with specialty espresso. Prices are currently
            unset while the launch menu is being finalised.
          </p>
        </div>
        
      </section>

      <section className="menuColumns" aria-label="Coffee drinks">
        <div className="menuPanel">
          <h2>Hot</h2>
          <ul className="priceList">
            {hotDrinks.map((drink) => (
              <li key={drink}>
                <span>{drink}</span>
                <span>Price TBC</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menuPanel">
          <h2>Iced</h2>
          <ul className="priceList">
            {icedDrinks.map((drink) => (
              <li key={drink}>
                <span>{drink}</span>
                <span>Price TBC</span>
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
