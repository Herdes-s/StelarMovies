import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ListMovie } from "../../components/ListMovie";
import { useMovi } from "../../hooks/useMovi";

export function HomePage() {

  const batman = useMovi("batman")
  const spiderman = useMovi("spiderman")
  const superman = useMovi("superman")
  return (
    <>
      <Header />

      {batman.error && <p>{batman.error}</p>}
      <ListMovie title="Batman" shows={batman.shows} loading={batman.loading} />

      {spiderman.error && <p>{spiderman.error}</p>}
      <ListMovie title="Homen-Aranha" shows={spiderman.shows} loading={spiderman.loading} />

      {superman.error && <p>{superman.error}</p>}
      <ListMovie title="Superman" shows={superman.shows} loading={superman.loading} />

      <Footer />
    </>
  );
}
