import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function InternationalSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          World cinema is a term in film theory that refers to films made
          outside of the American motion picture industry, particularly those in
          opposition to the aesthetics and values of commercial American
          cinema.[1] The Third Cinema of Latin America and various national
          cinemas are commonly identified as part of world cinema. The term has
          been criticized for Americentrism and for ignoring the diversity of
          different cinematic traditions around the world.[1]
          <br />
          <br />
          World cinema has an unofficial implication of films with "artistic
          value" as opposed to "Hollywood commercialism." Foreign language films
          are often grouped with "art house films" and other independent films
          in DVD stores, cinema listings etc. Unless dubbed into one's native
          language, foreign language films played in English-speaking regions
          usually have English subtitles. Few films of this kind receive more
          than a limited release and many are never played in major cinemas. As
          such the marketing, popularity and gross takings for these films are
          usually markedly less than for typical Hollywood blockbusters. The
          combination of subtitles and minimal exposure adds to the notion that
          "World Cinema" has an inferred artistic prestige or intelligence,
          which may discourage less sophisticated viewers. Additionally,
          differences in cultural style and tone between foreign and domestic
          films affects attendance at cinemas and DVD sales.[2]
        </p>
      </div>
    </div>
  );
}
