import React from 'react';
import './About.css';



function About() {
  return (
    <div className="titleCard">
      <div className = "box">
      <h2 id="contactme">About Me</h2>
      <h3 id="following">Here is some more about me!</h3>
      <div>
            <h2>Here are some of the Courses that I have completed</h2>
            <ul>
                <li>Data Structures</li>
                <li>Software Development Practices</li>
                <li>User Interface</li>
                <li>Advanced Algorithms</li>
                <li>Advanced Programming Techniques</li>
                <li>Database Management</li>


            </ul>

      </div>

      <div>
            <h2>My Favorite Video Games</h2>
            <p>I would say my favorite Video Game of all time was Destiny 1 followed by Counter Strike Global Offensive</p>
            <p>I absolutely love competitive video games because they push me to think strategically, stay sharp under pressure, and constantly 
                improve my skills. I enjoy the challenge, the fast-paced environment, and the teamwork that 
                many of these games require. It’s a fun way to compete, connect with others, and unwind. Ultimately it is the goal to get slightly better everyday that creates my love for video games</p>
      </div>

      <div>
    <h2>My Favorite Music</h2>
    <p>There are so many people that say that they love every genre of music, and yes I am also one of these people</p>
    <p>I find that music is an art where no matter the genre </p>
      </div>
        
          
        
      </div>
    </div>
  );
}

export default About;
