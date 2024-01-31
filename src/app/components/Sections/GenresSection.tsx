import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function GenresSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Un gen de film este o categorie stilistică sau tematică pentru filme
          bazată pe asemănări fie în elementele narative, abordarea estetică sau
          răspunsul emoțional la film.[2] Bazându-se în mare parte din teoriile
          criticii de gen literar, genurile de film sunt de obicei delimitate de
          „convenții, iconografie, decoruri, narațiuni, personaje și actori”.
          <br />
          <br />
          [3] De asemenea, se pot clasifica filmele după ton, temă/temă,
          dispoziție, format, public țintă sau buget.[4] Aceste caracteristici
          sunt cele mai evidente în filmele de gen, care sunt „lungmetraje
          comerciale [care], prin repetare și variație, spun povești familiare
          cu personaje familiare și situații familiare” într-un anumit gen.[5]
          Genul unui film va influența utilizarea stilurilor și tehnicilor de
          realizare a filmului, cum ar fi utilizarea flashback-urilor și a
          luminii discrete în filmul noir; încadrare strânsă în filmele de
          groază; sau fonturi care arată ca niște bușteni grosolan tăiați pentru
          titlurile filmelor occidentale.[6] În plus, genurile au asociat
          convenții de scriere a filmelor, cum ar fi orchestre de coarde
          luxuriante pentru melodrame romantice sau muzică electronică pentru
          filme științifico-fantastice.[6] Genul afectează, de asemenea, modul
          în care filmele sunt difuzate la televizor, promovate și organizate în
          magazinele de închiriere video.
        </p>
      </div>
    </div>
  );
}
