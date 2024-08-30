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
                {/* <div className="q_links" data-aos="fade-up">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href='/'>Advertise with us</Link></li>
                        <li><Link href='/'>About Us</Link></li>
                        <li><Link href='/'>Contact Us</Link></li>
                    </ul>
                </div> */}
                <div className="q_links" data-aos="fade-up">
                    <h3>Enlaces Legales</h3>
                    <ul>
                        <li><Link href='/politica-privacidad'>Política de Privacidad.</Link></li>
                        <li><Link href='/politica-cookies'>POLÍTICA DE COOKIES</Link></li>
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