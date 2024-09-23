import { FaAngular } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import Link from "next/link";
import React from 'react';
import { useState, useEffect, useRef } from "react";


export default function landingPage () {
  const [downloadLink, setDownloadLink] = useState(null);
  const hiddenLink = useRef(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const response = await fetch('/ebooks/ebook.pdf');
      const blob = await response.blob();
      setDownloadLink(URL.createObjectURL(blob));
    };
    fetchPdf();
  }, []);

  const handleClick = () => {
    hiddenLink.current.click();
  };

    return (
      <>
         <section className="header_data_section">
        <div className="container flex flex-sb w-100">
          <div className="leftheader_info" data-aos="fade-right">
            <h1>Crea tu página web perfecta: <span>Diseño web personalizado y moderno</span><br /></h1>
            <h3><span>Transforma tu presencia online con un sitio web que destaque y genere resultados.</span></h3>
            {/* <h3>Specialized in TypeScript and NextJs</h3> */}
            

          </div>
          <div className="rightheader_img" data-aos="zoom-in">
            {/* <div className="image_bg_top"></div>
            <div className="image_bg_top2"></div> */}
            <img src="/img/logo-shark.png" alt="coder" />
          </div>
        </div>
      </section>
              {/* seccion - que ofrecemos */}
      <section>
      <div className="container flex flex-sb flex-left flex-wrap">
          <div className="leftblog_sec">
            <h2>¿Estás buscando crear una página web que represente tu marca y atraiga a más clientes? En TiburónCode, te ofrecemos soluciones de diseño web personalizado y desarrollo web a medida para impulsar tu negocio.</h2>
           
          </div>
          <div className="rightblog_info">
            <div className="topics_sec">
              <h2>¿Qué ofrecemos?</h2>
           
            </div>
            <div className="blogimg">
              <img src="/img/servicios-web.png" alt="servicios" />
            </div>
            
            <div className="leftblog_sec">
              <h2>Diseño web intuitivo y moderno: Creamos diseños web únicos y responsivos que se adaptan a cualquier dispositivo, garantizando una excelente experiencia de usuario (UX).</h2>
           
            </div>
            
          </div>
          <div className="rightblog_info">
            <div className="topics_sec">
              <h2>Servicios</h2>
              <div className="topics_list">
                
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                    <FaAngular />
                    </div>
                    <h3>Desarrollo web a medida</h3>
                  </div>
             
                  <div className="leftblog_sec">
              <h2>Construimos sitios web personalizados y optimizados para que tu negocio destaque en línea.</h2>
                 </div>
                 
                 <div className="topics">
                    <div className="flex flex-center topics_svg">
                    <PiToolboxFill />
                    </div>
                    <h3>Consultoría web</h3>
                  </div>
                  <div className="leftblog_sec">
              <h2>Te asesoramos en todas las etapas de tu proyecto, desde la concepción hasta el lanzamiento de tu página web profesional.</h2>
                 </div>

                 <div className="topics">
                    <div className="flex flex-center topics_svg">
                    <PiToolboxFill />
                    </div>
                    <h3>Mantenimiento</h3>
                  </div>
                  <div className="leftblog_sec">
              <h2>Nos encargamos de mantener tu sitio web actualizado y seguro para que siempre esté en óptimas condiciones.</h2>
                 </div>


              </div>
            </div>
        
         
          </div>
        </div>
     
      </section>
      {/* seccion servicios */}

      <section>
      <div className="container flex flex-sb flex-left flex-wrap">
          <div className="leftblog_sec">
            <h2>¿Cansado de un sitio web que no te genera resultados? ¡Es hora de dar un salto cuántico! En TiburónCode, hemos ayudado a cientos de negocios a aumentar sus ventas</h2>
           
          </div>
          <div className="rightblog_info">
            <div className="topics_sec">
              <h2>¿Por qué elegirnos?</h2>
           
            </div>
            <div className="blogimg">
              <img src="/img/adaptable.png" alt="servicios" />
            </div>
            
            <div className="leftblog_sec">
              <h2>Diseño web a medida: Cada proyecto es único, por eso te ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas.</h2>
           
            </div>
            
          </div>
          <div className="rightblog_info">
            <div className="topics_sec">
              <h2>Desarrollo web</h2>
              <div className="topics_list">
                
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                    <FaComputer />
                    </div>
                    <h3>Enfoque en resultados</h3>
                  </div>
             
                  <div className="leftblog_sec">
              <h2>Nuestro objetivo es crear sitios web que generen resultados tangibles para tu negocio.</h2>
                 </div>
                 
                 <div className="topics">
                    <div className="flex flex-center topics_svg">
                    <PiToolboxFill />
                    </div>
                    <h3>Experiencia comprobada</h3>
                  </div>
                  <div className="leftblog_sec">
              <h2>Con años de experiencia en el sector, hemos ayudado a numerosas pequeñas empresas y corporaciones a crear una presencia online sólida.</h2>
                 </div>
                 

                 
              </div>
            </div>
        
         
          </div>
        </div>
     
      </section>
      {/* seccion de llamada a la accion */}
      <section className="header_data_section">
        <div className="container flex flex-sb w-100">
          <div className="leftheader_info" data-aos="fade-right">
            <h1>¿Listo para dar el siguiente <span>paso?</span><br /></h1>
            <h3><span>Solicita una consulta gratuita y descubre cómo podemos ayudarte a crear el sitio web de tus sueños.</span></h3>
            {/* <h3>Specialized in TypeScript and NextJs</h3> */}
            <div className="flex gap-2 ">
              
              <Link href='/contacto'><button>Contactanos: Click Aqui</button></Link>
              <Link href='https://wa.me/523114000046?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios!'><button >Whatsapp</button></Link>
              {/* <a href={downloadLink} download="ebook.pdf" ref={hiddenLink} style={{ display: 'none' }} /> */}
              
            </div>

          </div>
          <div className="rightheader_img" data-aos="zoom-in">
            {/* <div className="image_bg_top"></div>
            <div className="image_bg_top2"></div> */}
            <img src="/img/responsive.png" alt="coder" />
          </div>
        </div>
      </section>
      {/* Preguntas frecuentes */}
      <section className="header_data_section">
        <div className="container flex flex-sb w-100">
          <div className="leftheader_info" data-aos="fade-right">
            <h1>Preguntas frecuentes:<span></span><br /></h1>
            <h1>¿Cuánto cuesta crear una página web personalizada?<span></span><br /></h1>
            <h3><span>El costo de crear una página web personalizada puede variar significativamente dependiendo de varios factores, como:
            Número de páginas: A mayor cantidad de páginas, mayor será el tiempo de desarrollo y, por ende, el costo.
            </span></h3>
           <h3><span>Nivel de personalización: Un diseño completamente personalizado requerirá más horas de trabajo y, en consecuencia, un presupuesto mayor.
            Creación de contenido: Si necesitas que desarrollemos el contenido (textos, imágenes, logos), esto se sumará al costo total del proyecto.
            Funcionalidades adicionales: Características como tiendas en línea, formularios de contacto complejos o integraciones con otras plataformas pueden incrementar el presupuesto.</span></h3>
            <h1>Si deseas conocer en detalle los factores que influyen en el costo de un sitio web, te recomendamos descargar nuestro ebook <span>gratuito, sobre la creación de tiendas en línea y sitios web para negocios.</span><br /></h1>
            <div className="flex gap-2 ">
              
              {/* <Link href='/about'><button>Sobre nosotros</button></Link> */}
              <Link href='/'><button className="download-button" onClick={handleClick}>Descarga gratis: EBOOK</button></Link>
              <a href={downloadLink} download="ebook.pdf" ref={hiddenLink} style={{ display: 'none' }} />
              
            </div>

          </div>
          
        </div>
      </section>
      </>
     
      
      
    )
}