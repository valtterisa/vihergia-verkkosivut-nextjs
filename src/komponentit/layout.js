import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Cookies from "./Cookies"

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <Cookies />
        <main>{children}</main>
        <Footer />
      </>
    )
}