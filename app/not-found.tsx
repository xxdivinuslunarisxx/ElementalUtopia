import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pageHero notFound">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button buttonPrimary" href="/">
        Back Home
      </Link>
    </section>
  );
}
