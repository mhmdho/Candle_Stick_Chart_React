import Image from 'next/image'


const style = {
  footerStyle: `flex h-24 w-full items-center justify-center border-t`,
  copyright: "flex items-center justify-center gap-2"
}

const Footer = () => {
    return (
      <footer className={style.footerStyle}>
        <a
          className={style.copyright}
          href="https://www.TradingHills.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.png" alt="TradingHills Logo" width={118} height={33} />
        </a>
      </footer>
    )
}
        
export default Footer
