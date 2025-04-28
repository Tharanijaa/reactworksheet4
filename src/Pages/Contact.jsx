function Contact() {
    return (
        <div className="contact">
        <div className="container">
            <div className="row mb-5 px-5">
                <h1 className="heading text-center pb-5 pt-1">Contact Us</h1>
                <div className="col-md-6">

                    <div class="row">
                        <div className="contact-form">
                            <h2 className="text-center">Get In Touch</h2>
                            <p className="">We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
                        <div class="col mb-3">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your First name" aria-label="First name" />
                        </div>
                        <div class="col mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Last name" aria-label="Last name" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write Something Here"></textarea>
                        </div>
                        <div class="col mb-3 text-center">
                            <button type="submit" class="btn btn-primary w-100">Submit</button>
                        </div>
                        </div>

                    </div>



                </div>

                <div className="col-md-6">


                    <div classNameName="col-md-6">

<iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256206.43899128493!2d79.58633497802286!3d5.620494288945303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe4dd58cc450c3%3A0x94ed257173d6e40!2sKarainagar%20Jetty!5e0!3m2!1sen!2slk!4v1745508338669!5m2!1sen!2slk"
                                width="100%"
                                height="680px"
                                frameborder="0"
                                style={{ border: 0, borderRadius: '23px' }}
                                allowfullscreen=""
                            ></iframe>
</div>

                </div>

            </div>
        </div>
        </div>

    );
}
export default Contact;