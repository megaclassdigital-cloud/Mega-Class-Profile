import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  LinkIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import MecaReveal from "./MecaReveal";

const painPoints = [
  { icon: LinkIcon, title: "Materi tercecer di banyak link", copy: "Siswa kesulitan menemukan file, video, dan modul yang benar." },
  { icon: CreditCardIcon, title: "Pembayaran dicek lewat chat", copy: "Bukti transfer dan status pembayaran dipantau satu per satu." },
  { icon: ClipboardDocumentListIcon, title: "Data siswa masih di spreadsheet", copy: "Catatan kelas dan pembayaran rentan tidak sinkron." },
  { icon: ChatBubbleLeftRightIcon, title: "Akses kelas dikirim manual", copy: "Admin harus mengirim link dan akses untuk setiap siswa." },
  { icon: PresentationChartLineIcon, title: "Progress belajar tidak terlihat", copy: "Owner sulit melihat siswa yang aktif atau mulai tertinggal." },
  { icon: UserGroupIcon, title: "Admin kewalahan follow-up", copy: "Pekerjaan berulang tersebar di banyak tools dan percakapan." },
];

export default function MecaProblem() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Sudah digital, tapi masih terasa manual?</h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 text-slate-600">
            WhatsApp untuk komunikasi, Drive untuk materi, transfer untuk pembayaran, dan spreadsheet untuk data siswa. Semuanya online, tetapi prosesnya masih tercecer.
          </p>
        </MecaReveal>

        <div className="mt-12 grid gap-x-10 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <MecaReveal key={item.title} delay={index * 0.04} className="group border-t border-slate-200 py-6">
                <Icon className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.copy}</p>
              </MecaReveal>
            );
          })}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">
          MECA dirancang sebagai platform bimbel online dan sistem kelas online yang merapikan alur inti tanpa memutus tools yang sudah familiar.
        </p>
      </div>
    </section>
  );
}
