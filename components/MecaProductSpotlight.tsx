import Image from "next/image";
import Link from "next/link";

export default function MecaProductSpotlight() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="meca-products-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-sm font-semibold text-[#0D6EFD]">Produk Mega Class Digital</p>
          <h2 id="meca-products-title" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Produk Digital Unggulan
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#061A35] via-[#08244B] to-[#0D3B73] text-white shadow-[0_24px_70px_rgba(8,36,75,0.22)]">
          <div className="grid items-center gap-10 p-7 md:grid-cols-[0.82fr_1.18fr] md:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold text-[#F2C45B]">Website Pengelolaan Bimbel</p>
              <div className="mt-4 flex items-center gap-3">
                <Image src="/images/meca/meca-mark-transparent-v1.png" alt="" width={816} height={929} unoptimized className="h-14 w-auto" />
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl">MECA</h3>
              </div>
              <p className="mt-4 max-w-lg text-base leading-7 text-blue-100 md:text-lg md:leading-8">
                Kelola kelas, jadwal, siswa, materi, pembayaran, dan hasil belajar bimbel dalam satu website.
              </p>
              <p className="mt-4 text-sm font-medium text-[#F2C45B]">
                Saat ini tersedia dalam bentuk demo.
              </p>
              <Link
                href="/meca"
                className="mt-7 inline-flex whitespace-nowrap rounded-lg bg-[#D8A62A] px-6 py-3 text-sm font-semibold text-[#061A35] transition hover:bg-[#F2C45B] active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C45B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#061A35]"
              >
                Lihat MECA
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-xl">
              <Image
                src="/images/meca/meca-3d-hero.png"
                alt="Visual tiga dimensi produk MECA"
                width={1536}
                height={1024}
                unoptimized
                sizes="(max-width: 768px) 100vw, 58vw"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
