import Link from "next/link"


export default function navegacion(){
    return(
        <div className="navegacion d-flex bg-dark">

            

            <div className="menu col-lg-10">
                <nav>
                    <a href="#presentacion">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#callaction">Contact</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </nav>
            </div>

        </div>
    )
}