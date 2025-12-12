import { X } from "lucide-react";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer border-t-2 border-gray-200 my-40 sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <div className="flex items-end font-semibold">
          <GrBook className="text-5xl text-orange-500" />
          <a className="btn-ghost text-3xl">BookCourier</a>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact Details</h6>
        <a className="link link-hover">Chittagong,Bhaddarhut</a>
        <a className="link link-hover">+880 1234-567890</a>
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
        <Link to={"/dashboard"} className="link link-hover">
          Dashboard
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a className="link link-hover">
          <FaSquareXTwitter className="text-3xl" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
