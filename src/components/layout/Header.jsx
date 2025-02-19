import logoRose from "../../assets/images/logoRose.png"
import Nav from "../ui/Nav"

export default function Header() {
  return (
  <header className="header">
      <img className="header_img" src={logoRose} alt="logo de Kasa" />
      <Nav />
  </header>
  )
}