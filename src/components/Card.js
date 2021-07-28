import React from 'react';
import '../styles/Card.css';
import '../styles/General.css';



const VicProjects = [
  {
  Title : "Financial Planner" ,
  Description : "Financial Planner is an App that aloows you to buy and sell stocks as well as have a balance account.",
  ImageLink : "./assets/images/Financial.gif",
  HLink : "https://limitless-wildwood-19082.herokuapp.com/",
  RepositoryLink : "https://github.com/cbrito1994/Financial-Planner"
  },

  {
  Title : "Tech Blog" ,
  Description : "Tech Blog is an APP that lets you publish posts when logged in as well as comment differents posts from different users",
  ImageLink : "./assets/images/tech.gif",
  HLink : "https://fathomless-chamber-07663.herokuapp.com/",
  RepositoryLink : "https://github.com/vicvallejo/tech-blog"
  },

  {
  Title : "Note Taker" ,
  Description : "This app let you takes notes for a certain date.",
  ImageLink : "./assets/images/note.gif",
  HLink : "https://infinite-sierra-12142.herokuapp.com/",
  RepositoryLink : "https://github.com/vicvallejo/Note"
  },
  {
  Title : "Amusectionary" ,
  Description : "Amusectionary is an app that let you search for a word definition and pronunciation, it also show this word in a song and plays a preview in sporify, finally it shows the lyrycs of the song",
  ImageLink : "./assets/images/Amusectionary.gif",
  HLink : "https://github.com/reginaafc/amusectionary",
  RepositoryLink : "https://reginaafc.github.io/amusectionary/"
  }, 
];


function Card() {
  return (

      <div  class="container">
          {VicProjects.map((result) => (
          <div id="Work" class="row small-up-1 medium-up-1 large-up-1">
            <div  class="column">
             <a href={result.HLink}><img class="thumbnail" src={result.ImageLink}/></a>
             <h5>{result.Title}</h5>
              <p>{result.Description}</p>
              <p><a href={result.HLink}>{result.HLink}</a></p>
              <p><a href={result.RepositoryLink}>{result.RepositoryLink}</a></p>         
            </div>
          </div>
           ))}
        </div>
  
  );
}

export default Card;
