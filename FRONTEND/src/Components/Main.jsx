import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";



const layanan = [
  {
    nama: "Vaksin Internasional",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/Farmasi.jpg",
  },
  {
    nama: "IGD 24 JAM",
    deskripsi: "Layanan darurat nonstop",
    image: "/image/IGD.jpg",
  },
  {
    nama: "RADIOLOGI",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/RADIOLOGI.jpg",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  },
  {
    nama: "LAB",
    deskripsi: "Melayani dengan Senang Hati",
    image: "/image/LAB.png",
  }
]

const dokter = [
  {
    id:1,
    nama:"Zen Ary Prasetyo, dr, Sp.U",
    image: "/image/zen2.jpeg",
    deskripsi: "Spesialist Urulogi",
    hari: "Senin, Rabu",
    jam: "16.00 - 20.00",
    status: "Aktif",
  },
  {
    id:2,
    nama:"Dr. Tundjung",
    image: "/image/Tunjung.jpeg",
    deskripsi: "Spesialist Anak",
    hari: "Senin, Rabu",
    jam: "16.00 - 20.00",
    status: "Aktif",
  },
  {
    id:3,
    nama:"Reidy Bayu Nugroho, dr, Sp.An",
    image: "/image/rendy.jpeg",
    deskripsi: "Spesialist Anestesi",hari: "Senin, Rabu",
    jam: "16.00 - 20.00",
    status: "Aktif",
  },
  {
    id:4,
    nama:"Angky Heri Satriawan, dr. Sp.An",
    image: "/image/angky2.png",
    deskripsi: "Spesialist Anestesi",
    hari: "Senin, Rabu",
    jam: "16.00 - 20.00",
    status: "Aktif",
  }
]

const poliklinik = [
  {
    id: 1,
    nama: "Poli Umum",
    deskripsi: "Pelayanan kesehatan umum",
    icon: "🩺",
    dokter: [
      "dr. Andi Wijaya",
      "dr. Siti Aisyah"
    ],
    jadwal: [
      "Senin - Jumat : 08.00 - 12.00",
      "Sabtu : 08.00 - 10.00"
    ],
  },
  {
    id: 2,
    nama: "Poli Gigi",
    deskripsi: "Perawatan kesehatan gigi",
    icon: "😁",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 3,
    nama: "Poli Anak",
    deskripsi: "Kesehatan anak",
    icon: "👶",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 4,
    nama: "Poli Kandungan",
    deskripsi: "Kesehatan ibu & janin",
    icon: "🤰",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 5,
    nama: "Poli Mata",
    deskripsi: "Pemeriksaan mata",
    icon: "👁️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 6,
    nama: "Poli Jantung",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 7,
    nama: "Poli Dalam",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 8,
    nama: "Poli Orthopedi",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 9,
    nama: "Poli eek",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 10,
    nama: "Poli Bedah",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 10,
    nama: "Poli Bedah Digestif",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
  {
    id: 10,
    nama: "Poli Bedah Saraf",
    deskripsi: "Kesehatan jantung",
    icon: "❤️",
    dokter: [
      "drg. Rina Putri",
      "drg. Budi Santoso"
    ],
    jadwal: [
      "Senin - Kamis : 09.00 - 13.00",
      "Jumat : 09.00 - 11.00"
    ],
  },
];

const Main = () => {

  const [selectedPoli, setSelectedPoli] = useState(null);
  const [showPoli, setShowPoli] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [showLayan, setShowLayan] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm Tailwind = 640px
    };

    handleResize(); // cek awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataTampil = showPoli
    ? poliklinik
    : poliklinik.slice(0, isMobile ? 4 : 9);

  const dataTampilLayan = showLayan
    ? layanan
    : layanan.slice(0, isMobile ? 2 : 6)


  return (
    <>
      {/* Section Home/Beranda */}
      <section className="w-full min-h-screen relative flex items-center bg-[url('/image/AttinDpn.JPG')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-12 py-20">
          
          {/* Kiri */}
          <div className="flex flex-col max-w-xl text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Selamat Datang Di
            </h1>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mt-2">
              AT-TIN HOSPITAL
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus
              placeat, ullam illum porro et iste sequi ut rem.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-blue-900 hover:bg-blue-800 transition rounded-xl text-white font-semibold w-full sm:w-auto">
                Buat Janji
              </button>

              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-xl font-semibold w-full sm:w-auto">
                Lihat Layanan
              </button>
            </div>

            <p className="mt-6 font-semibold text-sm sm:text-base">
              IGD 24 JAM ( +62 821 3591 6988 )
            </p>

            <p className="text-xs sm:text-sm text-gray-200">
              Alamat : Jl. Slamet Riyadi No.14 ...
            </p>
          </div>

          {/* Kanan */}
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-4 text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center lg:text-left">
              Layanan Unggulan
            </h3>

            {[
              "IGD 24 Jam",
              "Rawat Jalan & Rawat Inap",
              "Laboratorium",
              "Radiologi",
              "Vaksin Internasional",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 border border-white/30 rounded-xl hover:bg-blue-900 transition"
              >
                <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                <p className="font-medium text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Layanan */}
      <section className="w-full py-20 bg-gray-50">
        {/* Judul */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900">
            Layanan Kami
          </h1>
          <p className="text-gray-600 mt-2">
            Memberikan pelayanan terbaik untuk Anda
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {dataTampilLayan.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6
                        flex flex-col items-center text-center
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300"
            >
              {/* Gambar */}
              <div className="w-full h-40 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nama */}
              <h3 className="mt-4 text-lg font-bold text-blue-900">
                {item.nama}
              </h3>

              {/* Deskripsi (opsional) */}
              {item.deskripsi && (
                <p className="text-gray-600 text-sm mt-2">
                  {item.deskripsi}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Button Show More */}
        {poliklinik.length > 9 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowLayan(!showLayan)}
              className="px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"              >
                {showLayan ? "Tampilkan Sedikit" : "Lihat Semua Poliklinik"}
            </button>
          </div>
        )}
      </section>


      {/* Section Dokter */}
      <section className="w-full py-20 bg-white">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-900">
            Dokter Kami
          </h2>
          <p className="text-gray-600 mt-2">
            Tim medis profesional dan berpengalaman
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="px-6"
        >
          {dokter.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center">
                
                {/* Foto */}
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nama */}
                <h3 className="font-bold text-lg text-blue-900">
                  {item.nama}
                </h3>

                {/* Deskripsi */}
                <h3 className="font-bold text-lg text-blue-900">
                  {item.deskripsi}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* Section Poliklinik */}
      <section className="w-full py-20 bg-[url('/image/POLI.JPG')] bg-cover bg-center">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-900">
            Poliklinik Kami
          </h2>
          <p className="text-white mt-2 font-semibold">
            Layanan kesehatan sesuai kebutuhan Anda
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
          {dataTampil.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl shadow-md p-4 sm:p-6 text-center hover:shadow-xl transition h-full flex flex-col justify-between"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-2">
                {item.nama}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm flex-grow">
                {item.deskripsi}
              </p>

              <button
                onClick={() => setSelectedPoli(item)}
                className="mt-4 px-3 py-2 sm:px-4 bg-blue-900 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-800 transition"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
        {/* Button Show More */}
        {poliklinik.length > 9 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowPoli(!showPoli)}
              className="px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              {showPoli ? "Tampilkan Sedikit" : "Lihat Semua Poliklinik"}
            </button>
          </div>
        )}
      </section>

      {/* Section Jadwal Dokter */}
      <section className="w-full py-20 bg-gray-50 px-[30px]">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-900">
            Jadwal Praktek Dokter
          </h2>
          <p className="text-gray-600 mt-2">
            Informasi jadwal pelayanan dokter
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Nama Dokter</th>
                <th className="py-3 px-4 text-left">Spesialis</th>
                <th className="py-3 px-4 text-left">Hari</th>
                <th className="py-3 px-4 text-left">Jam</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {dokter.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4 font-semibold">
                    {item.nama}
                  </td>

                  <td className="py-3 px-4">
                    {item.deskripsi}
                  </td>

                  <td className="py-3 px-4">
                    {item.hari}
                  </td>

                  <td className="py-3 px-4">
                    {item.jam}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          item.status === "Aktif"
                            ? "bg-green-100 text-blue-900"
                            : "bg-red-100 text-blue-900"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section Jadwal Informasi */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Judul */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-blue-900">
              Informasi & Promo Layanan
            </h2>
            <p className="text-gray-500 mt-3">
              Update terbaru layanan dan promo rumah sakit
            </p>
          </div>

          {/* Grid Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 px-3 sm:px-6">

            {/* Promo */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img
                src="/image/promo.jpg"
                alt="Promo Kesehatan"
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />

              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-lg font-semibold text-blue-900">
                  🎉 Promo
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 flex-grow">
                  Diskon hingga 20% pemeriksaan kesehatan.
                </p>

                <a
                  href="https://wa.me/6285712205373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-900 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-slate-400 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Vaksin */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img
                src="/image/vaksin.jpg"
                alt="Layanan Vaksin"
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />

              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-lg font-semibold text-blue-900">
                  💉 Vaksin
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 flex-grow">
                  Vaksin anak & dewasa tersedia.
                </p>

                <a
                  href="https://wa.me/6285712205373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-900 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-slate-400 transition"
                >
                  Daftar
                </a>
              </div>
            </div>

            {/* MCU */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img
                src="/image/mcu.jpg"
                alt="Medical Check Up"
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />

              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-lg font-semibold text-blue-900">
                  🩺 MCU
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 flex-grow">
                  Paket MCU lengkap tersedia.
                </p>

                <a
                  href="https://wa.me/6285712205373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-900 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-slate-400 transition"
                >
                  Info
                </a>
              </div>
            </div>

            {/* Layanan */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img
                src="/image/layanan.jpg"
                alt="Layanan Lainnya"
                className="w-full h-24 sm:h-32 md:h-40 object-cover"
              />

              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-lg font-semibold text-blue-900">
                  📋 Lainnya
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 flex-grow">
                  Rawat inap & lab tersedia.
                </p>

                <a
                  href="https://wa.me/6285712205373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-900 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-slate-400 transition"
                >
                  Konsultasi
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
      

      {selectedPoli && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={() => setSelectedPoli(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-red-500 text-lg sm:text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-2">
                {selectedPoli.icon}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
                {selectedPoli.nama}
              </h2>

              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                {selectedPoli.deskripsi}
              </p>
            </div>

            {/* Dokter */}
            <div className="mb-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                👨‍⚕️ Dokter
              </h3>

              <ul className="list-disc list-inside text-gray-600 text-sm">
                {selectedPoli.dokter.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Jadwal */}
            <div className="mb-5 sm:mb-6">
              <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                🕒 Jadwal Praktek
              </h3>

              <ul className="text-gray-600 text-sm space-y-1">
                {selectedPoli.jadwal.map((j, i) => (
                  <li key={i}>{j}</li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="w-full py-2.5 sm:py-3 bg-blue-900 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-800 transition">
              Buat Janji Sekarang
            </button>

          </div>
        </div>
      )}
    </>
  )
}

export default Main