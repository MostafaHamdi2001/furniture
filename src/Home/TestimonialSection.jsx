import React from 'react';

function TestimonialSection() {
    return (
<div>
            {/* <!-- Start Testimonial Section --> */}
		<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="testimonial-slider-wrap">
							<div className="owl-carousel testimonial-slider">

								<div className="testimonial-item">
									<div className="quote-icon">
										<img src="images/quote.svg" alt="Image" className="img-fluid" />
									</div>
									<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum, quibusdam, voluptate, quod voluptas."</p>
									<div className="d-flex align-items-center">
										<img src="images/person-1.jpg" alt="Image" className="img-fluid rounded-circle" />
										<div className="ms-3">
											<h3>John Doe</h3>
											<p>CEO, Founder</p>
										</div>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="quote-icon">
										<img src="images/quote.svg" alt="Image" className="img-fluid" />
									</div>
									<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum, quibusdam, voluptate, quod voluptas."</p>
									<div className="d-flex align-items-center">
										<img src="images/person-2.jpg" alt="Image" className="img-fluid rounded-circle" />
										<div className="ms-3">
											<h3>Jane Smith</h3>
											<p>Marketing Director</p>
										</div>
									</div>
							 </div>

						 </div>
					 </div>
				 </div>
			 </div>
		 </div>
	  </div>
	  {/* <!-- End Testimonial Section --> */}
        </div>
    )
}

export default TestimonialSection;