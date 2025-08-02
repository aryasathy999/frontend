import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="container bg-light p-2">
            <h1 className="fw-bold">Nick's Beef Jerkey Business</h1>

            <nav className="nav nav-pills bg-danger px-3 mb-2">
                <Link className="nav-link text-white" style={{marginRight: "200px",marginLeft: "50px"}} to="/">Home</Link>
                <Link className="nav-link text-white" style={{marginRight: "200px"}} to="/about">About</Link>
                <Link className="nav-link text-white" style={{marginRight: "200px"}} to="/contact">Contact</Link>
                <Link className="nav-link text-white" style={{ marginLeft: "80px"}} to="/products">Products</Link>
            </nav>

            <div className="row">
                <div className="col-md-3 text-center">
                    <img 
                        src="https://5.imimg.com/data5/LM/NU/MY-36086933/men-sunglasses-500x500.jpg"
                        alt="Man"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-9">
                    <p>Here at Nick's Beef Jerky, we search the planet for the best beef jerky<br />
                       and deliver it to your doorstep. Nobody can beat our prices or our<br />
                       flavors! <span className="text-danger fw-bold">Sign up now</span> to
                       receive more information about our products,<br /> or check out our{" "}</p>
                       <span className="text-danger fw-bold">full list of flavors</span>
                </div>
            </div>

            <h4 className="fw-bold mt-2">Our top Products</h4>
            <ol>
                <li>Teriyaki</li>
                <li>BBQ</li>
                <li>Spicy Pepper</li>
            </ol>

            <h4 className="fw-bold">Ways to order</h4>
            <ul>
                <li>
                    Order online via <span className="text-danger">Paypal</span>
                </li>
                <li>
                    Order via Phone:{" "}
                    <span className="text-danger">859-472-4219</span>
                </li>
            </ul>

            <hr />
            <p className="text-danger fw-bold">
                Let's go to Nick's test page
            </p>
        </div>
    );
}

export default Home;