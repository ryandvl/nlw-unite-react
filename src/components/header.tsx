import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
// JSX -> JavaScript XML
// TSX -> TypeScript XML

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-200">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
}
