import {Link} from 'react-router-dom';

function About(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="fw-bold">Thoms Frank</h1>
                    <p className="text-muted">Just another WordPress site</p>

                    <h2 className="mt-5 mb-3">About Me</h2>
                    <p>
                        My name is Thomas and my main hobby is doing circus tricks. I’ll
                        usually start each day by firing myself out of a cannon, then follow
                        that up with a healthy breakfast consisting of one 15th-century
                        Ottoman scimitar and one broadsword (I’m not picky on these).
                    </p>
                    <div className="d-flex align-items-start mb-3">
                        <p className="me-3">
                          After that, it’s onto six hours of riding a dirt bike inside a
                          spherical metal cage, after which I’ll usually puke for about an
                          hour. On Wednesdays, though, I replace this routine with two hours
                          of curling and waxing my moustache and three hours of lifting
                          cartoonishly large barbells.  
                        </p>
                        <div className="text-center">
                            <img 
                                src="https://media.istockphoto.com/id/1127793619/photo/young-handsome-man-over-isolated-background-looking-away-to-side-with-smile-on-face-natural.jpg?s=612x612&w=is&k=20&c=JsYX7D-RGFp9xy152QcUJdJcNe1CsCx0W3Apzb_c_YQ="
                                alt="Thomas"
                                className="img-fluid rounded"
                            />
                            <div className="mt-2 text-muted">
                                My beard is the source of my power
                            </div>
                        </div>
                    </div>
                    <p>
                        I’m available for birthday parties and funerals, and I offer a 30%
                        discount if you buy both in a package deal.
                    </p>
                    <p className="text-muted">Edit</p>
                </div>

                <div className="col-md-4">
                    <div className="mb-4 mt-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                        />
                    </div>

                    <div className="border-top pt-3">
                        <h6 className="fw-bold mt-4">RECENT COMMENTS</h6>
                    </div>
                    <div className="border-top pt-3">
                        <h3 className="fw-bold mt-4">ARCHIEVES</h3>
                    </div>
                    <div className="border-top pt-3">
                        <h6 className="fw-bold mt-4">CATEGORIES</h6>
                        <p className="text-muted mt-4">NO CATEGORIES</p>
                    </div>
                    <div className="border-top pt-3">
                        <h6 className="fw-bold mt-5">META</h6>
                        <ul>
                            <li><Link to="/" className='no-underline'>Site Admin</Link></li>
                            <li><Link to="/" className='no-underline'>Log out</Link></li>
                            <li><Link to="/" className='no-underline'>Entries RSS</Link></li>
                            <li><Link to="/" className='no-underline'>Comments RSS</Link></li>
                            <li><Link to="/" className='no-underline'>WordPress.org</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;