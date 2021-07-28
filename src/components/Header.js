import React from 'react';
import '../styles/General.css';
import '../styles/Header.css';


function Header() {
  return (
        <div  id="Abaout" class="row column">
          <img id="perfoto" class="thumbnail" src="./assets/images/foto.jpg" />
          <h5>Victor Vallejo</h5>
          <p>My Name is Victor Vallejo I live in Mexico City and I am an accountant, a webdeveloper and a lecturer in Tec de Monterrey, I am married and have a son, I like working out, playing golf, traveling, going to concerts (when there is no pandemic around) and love watching series.               In this WebPage you will find some apps I have deceloped in the past.
          </p>
          <p>I am currently in a webdevelpment bootcamp at tec de monterrey, I am learning HTML, CSS and Java Script. I have a masters degree in information systems and knowledge management but it was more focus in design and management information systems not in coding.
          </p>
        </div>
    );
}

export default Header;
