import Header from "../../components/Header"
import SideBar from "../../components/SideBar"

export function MainLayout() {
  return (
    <main>
      <Header />
      <section>
        <SideBar />
      </section>
    </main>
  );
}
