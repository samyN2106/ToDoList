import ReactLogo from "../../assets/react.svg";
import "./../../index.css";

function Header() {
  return (
    <div className="flex items-center justify-between ">

      <div className="flex items-center">
        <img src={ReactLogo} alt="LogoReact" className="w-[50px] h-auto"/>
        <div className="text-left ml-[10px]">
            <h1 className="text-4xl font-semibold mb-[10px]">TaskFlow</h1>
            <p className="text-[#7a808a] font-bold">Eliminez le chaos, suivez le flux.</p>
        </div>
      </div>

      <div>
        <span className="text-[#7a808a] font-bold">v.1.0</span>
      </div>
      
    </div>
  );
}

export default Header;
