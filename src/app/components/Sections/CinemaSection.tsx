import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function CinemaSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Film Society este un club bazat pe membri, unde oamenii pot viziona
          proiecții de filme care altfel nu ar fi difuzate în cinematografele de
          masă. În Spania, Irlanda și Italia sunt cunoscute ca „cinecluburi”,
          iar în Germania sunt cunoscute drept „cluburi de film”.
          <br />
          <br />
          Aceștia au de obicei un scop educațional, introducând un public nou în
          diferite lucrări audiovizuale printr-un program organizat și pregătit
          de proiecții. Producția editorială întărește munca acestor
          organizații, deoarece produc programe manuale, broșuri, programe, foi
          de informații și chiar eseuri, susținând semnificația expozițiilor
          lor. O trăsătură comună care poate caracteriza o proiecție în
          societatea cinematografică este aceea că acestea încep cu o
          introducere a filmului în fața publicului și se termină cu promovarea
          unei discuții despre film, în care asistenții, organizatorii și,
          uneori, realizatorii înșiși, își schimbă opiniile.
          <br />
          <br />
          Există rețele în multe țări diferite și acestea sunt organizate în
          federații, consilii, colective și rețele locale. Societățile celebre
          de film includ Amos Vogel's Cinema 16, Cinémathèque Française și Film
          Society of Lincoln Center din New York City.
        </p>
      </div>
    </div>
  );
}
