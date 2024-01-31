import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function ImpactSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Streamingul media este multimedia pentru redare folosind un player
          media offline sau online. Din punct de vedere tehnic, fluxul este
          livrat și consumat în mod continuu de către un client, cu stocare
          intermediară mică sau deloc în elementele de rețea. Streamingul se
          referă la metoda de livrare a conținutului, mai degrabă decât la
          conținutul în sine. Distingerea metodelor de livrare de mass-media se
          aplică în mod specific rețelelor de telecomunicații, deoarece
          majoritatea sistemelor tradiționale de livrare media sunt fie în mod
          inerent în flux (de exemplu, radio, televiziune), fie în mod inerent
          non-streaming (de exemplu, cărți, casete video, CD-uri audio).
          <br />
          <br />
          Există provocări cu conținutul în flux pe internet. De exemplu,
          utilizatorii a căror conexiune la Internet nu are o lățime de bandă
          suficientă pot experimenta pauze, întârzieri sau tamponare slabă a
          conținutului, iar utilizatorii care nu au sisteme hardware sau
          software compatibile pot fi în imposibilitatea de a transmite în flux
          anumit conținut. Cu ajutorul stocării în buffer a conținutului cu doar
          câteva secunde înainte de redare, calitatea poate fi mult
          îmbunătățită. Livestreaming-ul este livrarea în timp real a
          conținutului în timpul producției, la fel cum televiziunea în direct
          transmite conținut prin canalele de televiziune. Transmisia live
          necesită o formă de sursă media (de exemplu, o cameră video, o
          interfață audio, un software de captură de ecran), un codificator
          pentru a digitiza conținutul, un editor media și o rețea de livrare a
          conținutului pentru a distribui și livra conținutul.
          <br />
          <br />
          Streaming-ul este o alternativă la descărcarea fișierelor, un proces
          în care utilizatorul final obține întregul fișier pentru conținut
          înainte de a-l viziona sau asculta. Prin streaming, un utilizator
          final își poate folosi playerul media pentru a începe redarea
          conținutului video digital sau audio digital înainte ca întregul
          fișier să fie transmis. Termenul „streaming media” se poate aplica
          altor media decât video și audio, cum ar fi subtitrările în direct,
          caseta de tip ticker și textul în timp real, care sunt toate
          considerate „text în flux”. Streamingul este cel mai răspândit în
          serviciile de televiziune video la cerere și streaming. Alte servicii
          transmit în flux muzică sau jocuri video.
        </p>
      </div>
    </div>
  );
}
