import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebookF, FaBlog } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Wizard-Fingers" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/art-beckett-3b19b7209/",
  },
  { icon: <FaFacebookF />, path: "https://www.facebook.com/arthur.b.beckett/" },
  // { icon: <FaBlog />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
