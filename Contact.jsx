import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    };

    return (
        <div className="contact-page">

            <div className="contact-header">
                <h1>Contact <span>Us</span></h1>
                <p>
                    Have questions or need help? We would love to hear from you.
                </p>
            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <p className="contact-description">
                        If you have any questions about jobs, applications, or our
                        platform, feel free to contact us.
                    </p>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>

                        <div>
                            <h3>Email</h3>
                            <p>jobportal@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <FaPhone />
                        </div>

                        <div>
                            <h3>Phone</h3>
                            <p>+91 9345662833</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <FaLocationDot />
                        </div>

                        <div>
                            <h3>Location</h3>
                            <p>Tamil Nadu, India</p>
                        </div>
                    </div>

                </div>


                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Name</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>

                            <input
                                type="text"
                                placeholder="Enter subject"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>

                            <textarea
                                placeholder="Write your message..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;