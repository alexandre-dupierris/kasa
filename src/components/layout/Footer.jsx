import logoBlanc from "../../assets/images/logoBlanc.png"

export default function Footer() {
    return (
    <footer className="footer">
        <img className="footer_img" src={logoBlanc} alt="logo de Kasa" />
        <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}