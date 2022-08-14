import { helpers } from "../../../styles"

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className={`${helpers.background} ${helpers.flexStart}`}>
        <div className={`${helpers.boxWidth}`}>
          hero
        </div>
    </header>
  )
}

export default Header