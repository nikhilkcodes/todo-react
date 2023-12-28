import React, {useState} from "react";

const Home = () => {
	const [showLogin, setShowLogin] = useState(true);

	const toggleForm = () => {
		setShowLogin(!showLogin);
	};

	return (
		<div className="container">
		  {showLogin ? (
			<form className="text-white p-5">
			  <div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
				  Email address
				</label>
				<input
				  type="email"
				  className="form-control"
				  id="exampleInputEmail1"
				  aria-describedby="emailHelp"
				/>
				<div id="emailHelp" className="form-text text-white">
				  We'll never share your email with anyone else.
				</div>
			  </div>
			  <div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
				  Password
				</label>
				<input
				  type="password"
				  className="form-control"
				  id="exampleInputPassword1"
				/>
			  </div>
			  <div className="mb-3 form-check">
			  </div>
			  <a className="text-white p-2" href="#" onClick={toggleForm}>
				Don't have an account? Signup
			  </a>
			  <button type="submit" className="btn btn-primary">
				Login
			  </button>
			</form>
		  ) : (
			<form className="text-white row g-3 p-5">
			  <div className="col-md-6">
				<label htmlFor="inputEmail4" className="form-label">
				  Email
				</label>
				<input type="email" className="form-control" id="inputEmail4" />
			  </div>
			  <div className="col-md-6">
				<label htmlFor="inputPassword4" className="form-label">
				  Password
				</label>
				<input type="password" className="form-control" id="inputPassword4" />
			  </div>
			  <div className="col-md-6">
				<label htmlFor="inputPassword4" className="form-label">
				  Confirm Password
				</label>
				<input
				  type="password"
				  className="form-control"
				  id="inputPassword4"
				/>
			  </div>
			  <div className="col-12">
				<button type="submit" className="btn btn-primary">
				  Sign in
				</button>
			  </div>
			  <a className="text-white" href="#" onClick={toggleForm}>
				Already have an account? Login
			  </a>
			</form>
		  )}
		</div>
	  );
	};


export default Home
