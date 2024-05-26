
import Image from 'next/image';
export default function about(){
    return(
        <div className="about container">
            <main className="about d-flex">
            <div className="foto fotoAbout col-lg-5">
    <Image src="/fotoPerfil.jpg" width={600} height={600} alt="Imagen de perfil" />                 
</div>

                <div className="saludo saludoAbout col-lg-7">
                    <h1>Career <span>Profile.</span></h1>
                    
                    <p>
                    Hi, My profile focuses on the area of computer science. Among some of the computer skills I have trained in are: technical support,
                     web development, database and telecommunications networks, among other areas such as data analysis and project management.
                    </p>

                    <a className="btnp btn-about" href="https://www.linkedin.com/in/farlen-cespedes-93040a201/">Contact Me</a>

                </div>
            </main>
        </div>
    )
}


