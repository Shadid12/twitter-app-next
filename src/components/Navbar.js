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
        <Link href="/reports">
          <a className={ButtonStyle('nav')}>
            Reports
          </a>
        </Link>
    </nav>
  )
}