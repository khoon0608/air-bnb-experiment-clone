/** @format */

import navbarImg from "../img/photo-grid.png";

function Navbar() {
  return (
    <section className='navbar'>
      <img src={navbarImg} alt='navbar-img' />
      <div className='navbar--text'>
        <span className='navbar--text--title'>Online Experiences</span>
        <span className='navbar--text--article'>
          Join unique interactives activities led by <br /> one-of-a-kind
          hosts-all without leaving <br /> home.
        </span>
      </div>
    </section>
  );
}

export default Navbar;
