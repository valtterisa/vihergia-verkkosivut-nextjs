import Navbar from "./Navbar"
import Footer from "./Footer"
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