import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function PerservationSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Film preservation, or film restoration, describes a series of ongoing
          efforts among film historians, archivists, museums, cinematheques, and
          non-profit organizations to rescue decaying film stock and preserve
          the images they contain. In the widest sense, preservation assures
          that a movie will continue to exist in as close to its original form
          as possible.[1] For many years the term "preservation" was synonymous
          with "duplication" of film. The goal of a preservationist was to
          create a durable copy without any significant loss of quality. In more
          modern terms, film preservation includes the concepts of handling,
          duplication, storage, and access. The archivist seeks to protect the
          film and share its content with the public.[2] Film preservation is
          not to be confused with film revisionism,[3] in which long-completed
          films are modified with the insertion of outtakes or new musical
          scores, the addition of sound effects, black-and-white film being
          colorized, older soundtracks converted to Dolby stereo, or minor edits
          and other cosmetic changes being made.[4] By the 1980s, it was
          becoming apparent that the collections of motion picture heritage were
          at risk of becoming lost. Not only was the preservation of nitrate
          film an ongoing problem, but it was then discovered that safety film,
          used as a replacement for the more volatile nitrate stock, was
          beginning to be affected by a unique form of decay known as "vinegar
          syndrome", and color film manufactured, in particular, by Eastman
          Kodak, was found to be at risk of fading. At that time, the best-known
          solution was to duplicate the original film onto a more secure
          medium.[5] A common estimate is that 90 percent of all American silent
          films made before 1920 and 50 percent of American sound films made
          before 1950 are lost films.[6][7] Although institutional practices of
          film preservation date back to the 1930s,[8] the field received an
          official status only in 1980, when UNESCO recognized "moving images"
          as an integral part of the world's cultural heritage.[9]
        </p>
      </div>
    </div>
  );
}
