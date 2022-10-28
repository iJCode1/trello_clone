import Image from "next/image"

function Header() {
  return (
    <header>
      <p className="logo">
        <Image src="/logo.png" alt="leonidasesteban.com" width="40" height="40"/>
        <a href="https://LeonidasEsteban.com" className="uppercase text-logo hover:underline" target="_blank" rel="noreferrer">LeonidasEsteban.com</a>
      </p>
    </header>
  )
}

export default Header