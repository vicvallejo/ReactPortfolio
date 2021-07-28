import React from 'react';
import '../styles/General.css';
import '../styles/Navbar.css';



function Navbar() {
  return (
    <div class="off-canvas-content" data-off-canvas-content>
    <div class="title-bar hide-for-large">
      <div class="title-bar-left">
        <button class="menu-icon" type="button" data-open="my-info"></button>
        <span class="title-bar-title">Victor Vallejo</span>
      </div>
    </div>
    <div class="callout primary">
      <div class="row column">
        <nav  class="container">
         <ul id="lista_up">
                  <li>
                      <a href="#About">Abaout Me</a>
                  </li>
                   <li>
                      <a href="#Work">Portfolio</a>
                  </li>
                                          <li>
                      <a href="#Contact">Contact Me</a>
                  </li>
               </ul>
              </nav>
        </div>
    </div>
    </div>


  );
}

export default Navbar;
