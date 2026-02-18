
const Nav = () => {

    return (
    <>
        <div className="flex items-center gap-4 p-3 px-[50px] shadow-lg fixed top-0 left-0 w-full bg-blue-900 z-10 h-[65px]">
            <div>
                <img src="/image/logo.svg" alt="" />
            </div>
            <div className="font-bold text-white text w-[300px]">
                <h3>AT-TIN HOSPITAL</h3>
            </div>
            <div className="flex gap-[25px] w-full justify-end font-bold text-white px-[112px]">
                <a href="#Beranda">Beranda</a>
                <h3>Layanan</h3>
                <h3>Dokter</h3>
                <h3>Poliklinik</h3>
                <h3>Jadwal</h3>
                <h3>Informasi</h3>
                <h3>Hubungi Kami</h3>
            </div>
        </div>
    </>
)
}

export default Nav