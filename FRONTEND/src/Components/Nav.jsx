import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
    <>
        <div className="fixed top-0 left-0 w-full bg-blue-900 shadow-lg z-50">
            <div className="flex items-center justify-between px-4 md:px-10 h-[65px] text-white">
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                <img src="/image/logo.svg" alt="logo" className="h-10" />
                <h3 className="font-bold text-sm md:text-lg">
                    AT-TIN HOSPITAL
                </h3>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-6 font-bold">
                <a href="#Beranda">Beranda</a>
                <a href="#Layanan">Layanan</a>
                <a href="#Dokter">Dokter</a>
                <a href="#Poliklinik">Poliklinik</a>
                <a href="#Jadwal">Jadwal</a>
                <a href="#Informasi">Informasi</a>
                <a href="#Kontak">Hubungi Kami</a>
                </div>

                {/* Tombol Hamburger */}
                <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
                >
                ☰
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <div className="md:hidden bg-blue-800 text-white flex flex-col items-center gap-4 py-4 font-bold">
                <a href="#Beranda">Beranda</a>
                <a href="#Layanan">Layanan</a>
                <a href="#Dokter">Dokter</a>
                <a href="#Poliklinik">Poliklinik</a>
                <a href="#Jadwal">Jadwal</a>
                <a href="#Informasi">Informasi</a>
                <a href="#Kontak">Hubungi Kami</a>
                </div>
            )}
            </div>
    </>
)
}

export default Nav