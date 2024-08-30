import Image from 'next/image';
import Link from 'next/link';

//TODO: ESTE ARCHIVO ESTA FALTA AJUSTAR LOS ESTILOS PARA PODERLO USAR

const ImageLink = ({ src, alt, title, href }) => (
  <Link href={href} className="group">
    <div className="space-y-2">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
    </div>
  </Link>
);

export default function ImageSection() {
  return (
    <section className="w-full py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <ImageLink
            src="/img/noimage.jpg"
            alt="Imagen 1"
            title="Título de la Imagen 1"
            href="/enlace-1"
          />
          <ImageLink
            src="/img/noimage.jpg"
            alt="Imagen 2"
            title="Título de solo la imagen"
            href="/enlace-2"
          />
        </div>
      </div>
    </section>
  );
}
