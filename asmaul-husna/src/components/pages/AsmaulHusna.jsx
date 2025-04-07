import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import bgImage from "../../assets/backgroundquran.png";

function AsmaulHusna() {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.myquran.com/v2/husna/semua")
      .then((res) => res.json())
      .then((data) => setAsmaulHusna(data.data))
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative">
        {/* Container Utama */}
        <div className="p-6 rounded-lg shadow-md max-w-6xl w-full h-[80vh] flex flex-col bg-white/80">
          {/* Tombol Home */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-3 left-3 p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition shadow-md"
            title="Kembali ke Beranda"
          >
            <IoMdHome className="text-xl text-blue-600" />
          </button>
          {/* Judul Tetap */}
          <h1 className="text-2xl cinzel-decorative-bold font-bold text-center mb-3 text-blue-700">
            99 Asmaul Husna
          </h1>

          {/* List dengan Scroll */}
          <div className="overflow-y-auto flex-grow">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {asmaulHusna.map((item, index) => (
                <li
                  key={item.id}
                  className="relative bg-blue-50 border border-blue-300 p-4 rounded-lg text-center shadow-sm"
                >
                  {/* Nomor urut di pojok kanan atas */}
                  <span className="absolute top-2 right-3 text-sm text-blue-600 font-semibold">
                    {index + 1}
                  </span>

                  <p className="text-3xl font-bold text-blue-800">
                    {item.arab}
                  </p>
                  <p className="text-xl italic text-blue-700 m-2">
                    {item.latin}
                  </p>
                  <p className="text-blue-600 eb-garamond-regular">
                    {item.indo}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsmaulHusna;
