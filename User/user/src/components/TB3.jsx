import React from 'react';
import '../../src/style/tb1.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function TB3() {
  return (
    <>
    <Link to={'/'} className='backhome'>Back to Home</Link>
    <div className="tb1-container">
      <img src="src/assets/project-3.jpg" alt="The Future of Work" />
      <h1>The Future of Work</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto possimus itaque nisi facere 
        debitis nobis exercitationem suscipit? Explicabo eveniet adipisci numquam exercitationem quibusdam nobis esse 
        architecto optio maxime alias! Alias veniam quo exercitationem enim nisi expedita dolore, at iure sit eos 
        suscipit iste eaque eligendi tempora autem sequi odit aut esse nesciunt! Quis explicabo autem architecto rerum, 
        sunt molestiae quam aut illo nesciunt vitae in alias, perferendis non excepturi asperiores saepe cupiditate.
        ...
      </p>
    </div>
    </>
  );
}

export default TB3;
