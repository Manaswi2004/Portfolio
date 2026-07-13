import {
 FaGithub,
 FaLinkedin,
 FaInstagram,
} from "react-icons/fa";

export default function SocialLinks() {

 return (

<div className="flex gap-6 mt-10">

<a
href="https://github.com/Manaswi2004"
target="_blank"
className="
hover:text-indigo-400
transition-all
duration-300
hover:-translate-y-1
"
>

<FaGithub/>
</a>
<a
href="https://www.linkedin.com/in/manaswi-suraskar-bb131b28a/"
target="_blank"
>

<FaLinkedin/>
</a>
<a
href="https://www.instagram.com/manaswi_10suraskar?igsh=MWNrbTByMmRoazRqNw=="
className="text-2xl hover:text-indigo-400 duration-300"
>

<FaInstagram/>

</a>

</div>

 );
}