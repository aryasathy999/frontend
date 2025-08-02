import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* Navbar */}
            <header style={styles.navbar}>
                <div style={styles.logoContainer}>
                    <img src="/images/logo.jpg" alt="Avocitrus Logo" style={styles.logo} />
                    <span style={styles.slogan}>Quality as tradition!</span>
                </div>
                <nav style={styles.navLinks}>
                    <Link to="/products" style={styles.navLink}>HOME</Link>
                    <Link to="/products" style={styles.navLink}>ABOUT US</Link>
                    <Link to="/products" style={styles.navLink}>PRODUCTS</Link>
                    <Link to="/products" style={styles.navLink}>CONTACT</Link>
                    <Link to="/products" style={styles.navLink}>ENGLISH</Link>
                </nav>
            </header>

            {/* Banner Section */}
            <section style={styles.banner}>
                <div style={styles.bannerText}>
                    <h1 style={styles.h1}>AVOCITRUS</h1>
                    <h2 style={styles.h2}>Quality as Tradition</h2>
                    <p style={styles.paragraph}>
                        The whole Avocitrus team is characterized by a common goal, respect the needs of our
                        customers so that they can make their final consumers happy. Those who value the quality
                        and especially the flavor of the Spanish products.
                    </p>
                    <button style={styles.readMore}>READ MORE</button>
                </div>
                <div style={styles.bannerImage}>
                    <img src="/images/fruit.jpg" alt="Fruit Splash" style={styles.image} />
                </div>
            </section>
        </div>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '15px 30px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: '50px',
        marginRight: '10px'
    },
    slogan: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#b64600',
        fontSize: '16px'
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center'
    },
    navLink: {
        marginLeft: '20px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
    },
    activeLink: {
        color: '#8AC900'
    },
    banner: {
        backgroundColor: '#a7d400',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 80px',
        color: 'white',
        flexWrap: 'wrap'
    },
    bannerText: {
        width: '50%',
        minWidth: '300px'
    },
    h1: {
        fontSize: '42px',
        margin: '0'
    },
    h2: {
        fontFamily: 'cursive',
        backgroundColor: 'white',
        color: 'orange',
        padding: '5px 20px',
        display: 'inline-block',
        borderRadius: '5px',
        margin: '20px 0'
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '25px',
        color: 'white'
    },
    readMore: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '25px',
        backgroundColor: 'white',
        color: '#333',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    bannerImage: {
        textAlign: 'center'
    },
    image: {
        maxWidth: '400px',
        borderRadius: '10px'
    }
};

export default Home;
