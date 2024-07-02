import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaDev  } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/saurabh91798"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ksaurabhrao/"},
    {icon: <FaTwitter />, path: "https://x.com/stoicalsaurabh"},
    {icon: <FaDev />, path: "https://dev.to/ugreeen"}
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank"
        rel="noopener noreferrer">
            {item.icon}
        </Link>
    })}
  </div>
  
}

export default Socials