import nlwUniteIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="nlw logo" />

      <nav className="flex items-center gap-5">
        <a href="" className="font-mediun text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-mediun text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
}
