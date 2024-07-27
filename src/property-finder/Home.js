import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const listings = [
    {
      image: 'images/house1.jpg',
      alt: 'Modern House with Pool',
      title: 'Modern Family Home',
      description: 'Spacious 4 bedroom, 2 bathroom house with a pool and large backyard. Perfect for families!',
      price: '$750,000',
    },
    {
      image: 'images/apartment2.jpg',
      alt: 'Luxury Downtown Apartment',
      title: 'Luxury Downtown Apartment',
      description: 'Stunning 2 bedroom, 2 bathroom apartment with breathtaking city views.',
      price: '$3,500/month',
    },
    {
      image: 'images/beachfront3.jpg',
      alt: 'Oceanfront Property',
      title: 'Oceanfront Property',
      description: 'Build your dream home on this beachfront lot with incredible ocean views.',
      price: 'Starting at $250,000',
    },
  ];

  return (
    <div className="home">
      <header>
        <h1>Find Your Dream Property</h1>
        <p>Whether you're buying, selling, or renting, we're here to help.</p>
      </header>

      <main>
        <section className="search-bar">
          <h2>Search Properties</h2>
        </section>

        <section className="featured-listings">
          <h2>Featured Listings</h2>
          {listings.map((listing) => (
            <article key={listing.title} className="listing">
              <Link to ="#">
                <img src={listing.image} alt={listing.alt} />
              </Link >
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <span className="price">{listing.price}</span>
            </article>
          ))}
        </section>

        <section className="call-to-action">
          <h2>Ready to Find Your Dream Property?</h2>
          <Link to ="#">Browse All Listings</Link >
          <Link to ="#">Contact Us</Link >
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Home;
