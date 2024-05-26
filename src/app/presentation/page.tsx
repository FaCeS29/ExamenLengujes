import Image from 'next/image';
export default function presentacion() {
    return (
        <div className="presentacion container">
            <main className="main d-flex">
                
                <div className="saludo col-lg-6">
                    <div className="contenedorSaludo mx-auto">
                        <h1>Welcome!! <span> This is the page of Farca Soluciones by Farlen Céspedes. </span></h1>
                        <p>
                        In this website you can see some areas where Farca Solutions offers services, this by our employee Farlen Cespedes.
                        </p>

                        
                        <div className="iconos">
                            <a href=""></a>
                        </div>


                    </div>
                </div>
                <div className="foto fotoAbout col-lg-6">
    <Image src="/Logo.JPG" width={800} height={800} alt="Logo empresa"/>
        </div> 
                <div className="foto col-lg-6">
                C:\Users\Farlen\Desktop\Lenguajes\Examen\Examen\ExamenLenguajes\.next\cache\images\Empre
                </div>
            </main>

        </div>
    )
}