import Link from "next/link";
import { ButtonStyle } from "../styles/Buttons.styles";

export function Navbar() {
  return (
    <nav className="container p-4 flex">
        <Link href="/">
          <a className={ButtonStyle('nav')}>
            Home
          </a>
        </Link>
        <Link href="/view-report">
          <a className={ButtonStyle('nav')}>
            View Saved Report
          </a>
        </Link>
    </nav>
  )
}