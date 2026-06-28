import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ListMovie } from "../../components/ListMovie";

export function HomePage() {
  return (
    <>
      <Header />
      <ListMovie serieName={"Batman"} />
      <ListMovie serieName={"Spiderman"} />
      <ListMovie serieName={"Superman"} />
      <ListMovie serieName={"Flash"} />
      <ListMovie serieName={"Pokemon"} />
      <ListMovie serieName={"Dracula"} />
      <Footer />
    </>
  );
}
