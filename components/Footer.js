import Link from "next/link";

export default function Footer() {
    return <>
        <div className="footer">
            <div className="container flex flex-sb flex-wrap flex-left">
                <div className="footer_logo" data-aos="fade-right">
                    <h2>TiburónCode</h2>
                    <h4>&copy; 2024 Todos Los Derechos Reservados.</h4>
                    {/* <h3>Coded By <span>@vbmcoder</span></h3> */}
                </div>
                <div className="q_links" data-aos="fade-up">
                    <h3>Enlaces rápidos</h3>
                    <ul>
                        <li><Link href='/'>Inicio</Link></li>
                        <li><Link href='/servicios'>Servicios</Link></li>
                        <li><Link href='/contacto'>Contacto</Link></li>
                    </ul>
                </div>
                <div className="q_links" data-aos="fade-up">
                    <h3>Enlaces Legales</h3>
                    <ul>
                        <li><Link href='/politica-privacidad'>Política de Privacidad</Link></li>
                        <li><Link href='/politica-cookies'>Política de cookies</Link></li>
                        <li><Link href='/terminos-uso'>Términos de uso</Link></li>
                    </ul>
                </div>
                <div className="q_links" data-aos="fade-left">
                    <h3>Social Media</h3>
                    <ul>
                        <li><Link href='https://github.com/ranitaram'>Github</Link></li>
                        <li><Link href='https://x.com/TiburonCode'>Twitter</Link></li>
                        {/* <li><Link href='/'>Instagram</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </>
}