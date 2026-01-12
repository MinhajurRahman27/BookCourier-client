import { Github, Linkedin } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer border-t border-gray-200 shadow-lg sm:footer-horizontal   p-10">
      <aside>
        <div className="flex items-center font-semibold  rounded-3xl ">
          {/* <GrBook className="text-3xl md:text-4xl text-primary" /> */}
          <a className="btn-ghost text-[20px] sm:text-2xl"> <span className="text-primary text-shadow-lg">Book</span><span className="text text-shadow-lg">Courier</span></a>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact Details</h6>
        <a className="link link-hover">Chittagong,Bhaddarhut</a>
        <a className="link link-hover">+880 1847901009</a>
        <a className="link link-hover">minhajurrahman2716@gmail.com</a>
        <a className="link link-hover">bookcourier@gmail.com</a>
      </nav>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        <Link to={"/books"} className="link link-hover">
          Books
        </Link>
        <Link to={"/about"} className="link link-hover">
          About
        </Link>
        <Link to={"/privacy"} className="link link-hover">
          Privacy
        </Link>
        <Link to={"/dashboard"} className="link link-hover">
          Dashboard
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/MinhajurRahman27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link link-hover hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/minhajur-rahman27/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link link-hover hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/khondokar_27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link link-hover hover:text-primary transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <FaSquareXTwitter className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
