import Header from "../../components/Header";
import { Hero } from "../../components/Hero";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero serieName={"Batman"} />
      <Hero serieName={"Spiderman"} />
      <Hero serieName={"Superman"} />
    </>
  );
}
