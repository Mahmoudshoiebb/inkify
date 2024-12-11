import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <h1>Welcome to Inkify</h1>
      <section>
        <h2>Where you can wear creativity</h2>
        <div className="image-sections">
          <Link to="/collection">
            <img src="/t-shirt.png" alt="Templates" />
            <h3 className="image-title">Templates</h3>
          </Link>
          <Link to="/designur">
            <img src="/color.jpg" alt="Design Your Own" />
            <h3 className="image-title">Design Your Own</h3>
          </Link>
          <Link to="/ourcollection">
            <img src="/collection.png" alt="Our Collection" />
            <h3 className="image-title">Our Collection</h3>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
