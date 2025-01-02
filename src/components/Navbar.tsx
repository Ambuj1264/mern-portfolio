"use client";
import Button from "./ui/Button";
import { useMenu } from "./Provider";
import { Download, Menu, User } from "lucide-react";

const Navbar: any = ({}) => {
  const { showMenu, showMenuVisibility } = useMenu();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  const handleClickContact = () => {
    const subject = encodeURIComponent("Contact Request"); // Subject of the email
    const body = encodeURIComponent(
      "Hello,\n\nI would like to get in touch with you."
    ); // Body of the email
    const mailtoLink = `mailto:heyambujsingh@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Opens default email client
  };

  return (
    <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
      <div>{/* Place holder for search bar */}</div>
      <div className="flex items-center gap-5">
        <Button onClick={handleClickContact}>
          Contact Me <User size={18} />
        </Button>

        <Button onClick={downloadResume}>
          Download Resume <Download size={18} />
        </Button>
        <button onClick={() => showMenuVisibility(!showMenu)} type="button">
          <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
