import dynamic from "next/dynamic";
const NavbarElement = dynamic(() => import("./computer/NavbarElement"));
const MobileNavbar = dynamic(() => import("./handheld/MobileNavbar"));

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-end bg:static bg:p-2">
      {/* Navbar */}
      <NavbarElement />
      {/*Navbar on phones*/}
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
