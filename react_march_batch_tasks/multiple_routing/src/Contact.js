function Contact(){
    return(
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="card p-4 shadow-lg" style={{width: "100%", maxWidth: "400px", borderRadius: "15px"}}>
                <h3 className="text-center mb-4 fw-bold">Contact</h3>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control border-0 border-bottom rounded-0" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control border-0 border-bottom rounded-0" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control border-0 border-bottom rounded-0" placeholder="Message" rows="3" />
                    </div>
                    <div className="mb-3">
                        <button type="reset" className="btn btn-outline-secondary btn-sm">Reset</button>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary rounded-pill" style={{backgroundColor: "#00aaff", border: "none"}}>Submit</button>
                    </div>
                </form>
                <p className="text-center mt-3">
                    <a href="#" className="text-primary text-decoration-none">Back to Home page</a>
                </p>
            </div>
        </div>
    );
}

export default Contact;