import Hero from "@components/Hero/Hero";
import Navbar from "@components/Navbar/Navbar";

function Header() {
  return (
    <header className="bg-green-500">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
