const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg">
            Mega Class Digital berfokus pada solusi digital yang membantu bisnis berkembang.
          </p>
          <p className="text-sm opacity-75">
            Kami percaya website bukan hanya tampilan, tetapi alat untuk membantu Anda mendapatkan pelanggan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Mega Class Digital</h3>
            <p className="text-sm leading-relaxed">
              Jasa pembuatan website profesional untuk bisnis modern.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>Landing Page</li>
              <li>Company Profile</li>
              <li>Website Katalog</li>
              <li>Toko Online</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@megaclassdigital.com</li>
              <li>0812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Mega Class Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;