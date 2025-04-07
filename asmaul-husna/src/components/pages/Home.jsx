import { useNavigate } from "react-router-dom";
import { FaStarAndCrescent } from "react-icons/fa6";
import bgImage from "../../assets/backgroundquran.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative p-6 rounded-lg shadow-md w-[90vw] max-w-xl bg-white/80">
        {/* Judul dan Icon */}
        <div className="flex justify-center items-center gap-4 mt-2 mb-4">
          <FaStarAndCrescent className="text-blue-700 text-3xl" />
          <h1 className="cinzel-decorative-bold text-3xl font-bold text-blue-700">
            Asmaul Husna
          </h1>
        </div>

        {/* Navigasi utama */}
        <ul className="space-y-6 text-xl eb-garamond-regular">
          <li>
            <button
              onClick={() => navigate("/asmaulhusna")}
              className="w-full bg-white border border-blue-200 hover:border-blue-500 text-blue-800 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <span>✧˖</span>
                <strong className="text-lg">Baca 99 Asmaul Husna</strong>
                <span>˖✧</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
