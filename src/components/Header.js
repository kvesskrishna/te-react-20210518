import logo from './../images/783px-Test-Logo.svg.png'
import './Header.css'
const Logo = () => {
    return (<img style={{ height: '40px' }} src={logo} />)
}

const Header = () => {
    const heading = 'My Header';
    return (
        <div className='header'>
            <h1>{heading}<Logo></Logo></h1>
        </div>
    )
}

export const Header2 = () => {
    const heading = 'My Header2';
    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}
export default Header;