import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function BusinessSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Industria filmului sau industria cinematografică cuprinde instituțiile
          tehnologice și comerciale ale producției de film, adică companii de
          producție de film, studiouri de film, cinematografie, animație,
          producție de filme, scenarii, pre-producție, post-producție,
          festivaluri de film, distribuție și actori.
          <br />
          <br />
          Deși cheltuielile implicate de realizarea filmelor au determinat
          aproape imediat producția de film să se concentreze sub auspiciile
          companiilor de producție permanente, progresele în echipamentele de
          filmare accesibile, precum și o extindere a oportunităților de a
          achiziționa capital de investiții din afara industriei cinematografice
          în sine, au permis filmului independent. producția să evolueze. În
          2019, box office-ul global valora 42,2 miliarde de dolari. Dacă includ
          veniturile din box office și din divertismentul la domiciliu,
          industria filmului global valora 136 de miliarde de dolari în 2018.
          <br />
          <br />
          Hollywood este cea mai veche industrie cinematografică națională din
          lume și cea mai mare din punct de vedere al veniturilor brute de box
          office. Cinematograful indian este cea mai mare industrie
          cinematografică națională în ceea ce privește numărul de filme
          produse, cu 2.446 de lungmetraje produse anual începând cu 2019.
        </p>
      </div>
    </div>
  );
}
