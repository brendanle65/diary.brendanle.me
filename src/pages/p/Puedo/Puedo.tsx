// import libraries
import { useContext, useState } from "react";
import { motion, useMotionTemplate, useScroll } from "framer-motion";

// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";
import { useCursorPosition } from "@hooks/useCursorPosition";
import { getCursorAnimateMappings } from "@components/interactives/Cursor/Cursor";
import { cursorStateContext, CursorState } from "@contexts/CursorContext";

// import styles
import styles from "./Puedo.module.scss";

export const metadata: BlogMetadata = {
  title: "Puedo Escribir",
  description: "A cool masking cursor effect that translates text.",
  keywords: ["Brendan Le", "Puedo Escribir", "translation", "web experiment", "Pablo Neruda"],
  author: "Brendan Le",
  published: new Date("October 14, 2024"),
  edited: new Date("October 14, 2024"),
  blurb: "A cool masking cursor effect that translates text.",
  categories: [Category.WEB_EXPRIMENT],
  slug: "puedo-escribir",
};

const maskSize = getCursorAnimateMappings().MASK.animate.width;
const idleSize = 0;

/**
 * A web experiment for masking cursor effect that translates texts.
 *
 * @returns {React.ReactElement} A blog post.
 * @page
 */
export function Puedo() {
  const { setCursorState } = useContext(cursorStateContext);
  const [hideMask, setHideMask] = useState(true);
  const size = !hideMask ? maskSize : idleSize;
  const { x, y } = useCursorPosition({
    width: size,
    height: size,
  });
  const { scrollY } = useScroll();
  const maskPosition = useMotionTemplate`${x}px calc(${y}px)`;
  const marginTop = useMotionTemplate`-${scrollY}px`;

  return (
    <>
      <BlogHelmet
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        author={metadata.author}
      />

      <>
        <BlogLayout
          categories={metadata.categories}
          published={metadata.published}
          edited={metadata.edited}
        >
          <h1>Puedo Escribir</h1>

          <p className={styles.error}>
            Sorry, this experiment requires a larger screen and a working cursor—phones and touchscreens won’t
            work.
          </p>

          <div className={styles.spanish}>
            <p>
              Written by the great Pablo Neruda: <br />(
              <span className={styles.bold}>hover over to see the translation</span>)
            </p>

            <p>Puedo escribir los versos más tristes esta noche.</p>

            {/* prettier-ignore */}
            <p>
              Escribir, por ejemplo: 'La noche está estrellada, <br />
              y tiritan, azules, los astros, a lo lejos.'
            </p>

            <p>El viento de la noche gira en el cielo y canta.</p>

            <p>
              Puedo escribir los versos más tristes esta noche. <br />
              Yo la quise, y a veces ella también me quiso.
            </p>

            <p>
              En las noches como ésta la tuve entre mis brazos. <br />
              La besé tantas veces bajo el cielo infinito.
            </p>

            <p>
              Ella me quiso, a veces yo también la quería. <br />
              Cómo no haber amado sus grandes ojos fijos.
            </p>

            <p>
              Puedo escribir los versos más tristes esta noche. <br />
              Pensar que no la tengo. Sentir que la he perdido.
            </p>

            {/* prettier-ignore */}
            <p>
              Oir la noche inmensa, más inmnesa sin ella. <br/>
              Y el verso cae al alma como al pasto el rocío.
            </p>

            <p>
              Qué importa que mi amor no pudiera guadarla. <br />
              La noche está estrellada y ella no está conmigo.
            </p>

            <p>
              Eso es todo. A lo lejos alguien canta. A lo lejos. <br />
              Mi alma no se contenta con haberla perdido.
            </p>

            <p>
              Como para acercarla mi mirada la busca. <br />
              Mi corazón la busca, y ella no está conmigo.
            </p>

            <p>
              La misma noche que hace blanquear los mismos árboles. <br />
              Nosotros, los de entonces, ya no somos los mismos.
            </p>

            <p>
              Ya no la quiero, es cierto, pero cuánto la quise. <br />
              Mi voz buscaba el viento para tocar su oído.
            </p>

            <p>
              De otro. Será de otro. Como antes de mis besos. <br />
              Su voz, su cuerpo claro. Sus ojos infinitos.
            </p>

            <p>
              Ya no la quiero, es cierto, pero tal vez la quiero. <br />
              Es tan corto el amor, y es tan largo el olvido.
            </p>

            <p>
              Porque en noches como ésta la tuve entre mis brazos, <br />
              mi alma no se contenta con haberla perdido.
            </p>

            {/* prettier-ignore */}
            <p>
              Aunque éste sea el último dolor que ella me causa, <br />
              y éstos sean los últimos versos que yo le escribo.
          </p>
          </div>
        </BlogLayout>

        <motion.div
          style={{ maskPosition }}
          className={styles.mask}
          animate={{
            maskSize: size + "px",
            background: hideMask ? "transparent" : "black",
          }}
          transition={{ background: { duration: 0 } }}
        >
          <motion.div style={{ marginTop }}>
            <BlogLayout
              className={styles.layout}
              categories={metadata.categories}
              published={metadata.published}
              edited={metadata.edited}
            >
              <div
                className={styles.masked}
                onMouseMove={() => {
                  setHideMask(false);
                  setCursorState(CursorState.MASK);
                }}
                onMouseLeave={() => {
                  setHideMask(true);
                  setCursorState(CursorState.IDLE);
                }}
              >
                <h1 className={styles.title}>Tonight I Can Write The Saddest Lines</h1>

                {/* prettier-ignore */}
                <p>
                  See how it changes? That's pretty cool isn't it? <br />
                  (<span className={styles.bold}>unhover</span> over to read it in Spanish.
                </p>

                <p>I can write the saddest poem of all tonight.</p>

                <p>
                  Write, for instance: "The night is full of stars, <br />
                  and the stars, blue, shiver in the distance."
                </p>

                <p>The night wind whirls in the sky and sings.</p>

                {/* prettier-ignore */}
                <p>
                  I can write the saddest poem of all tonight. <br/>
                  I loved her, and sometimes she loved me too. 
                </p>

                {/* prettier-ignore */}
                <p>
                  On nights like this, I held her in my arms. <br/>
                  I kissed her so many times under the infinite sky.
                </p>

                <p>
                  She loved me, sometimes I loved her. <br />
                  How could I not have loved her large, still eyes?
                </p>

                <p>
                  I can write the saddest poem of all tonight. <br />
                  To think I don't have her. To feel that I've lost her.
                </p>

                <p>
                  To hear the immense night, more immense without her. <br />
                  And the poem falls to the soul as dew to grass.
                </p>

                <p>
                  What does it matter that my love couldn't keep her. <br />
                  The night is full of stars and she is not with me.
                </p>

                <p>
                  That's all. Far away, someone sings. Far away. <br />
                  My soul is lost without her.
                </p>

                <p>
                  As if to bring her near, my eyes search for her. <br />
                  My heart searches for her and she is not with me.
                </p>

                <p>
                  The same night that whitens the same trees. <br />
                  We, we who were, we are the same no longer.
                </p>

                <p>
                  I no longer love her, true, but how much I loved her. <br />
                  My voice searched the wind to touch her ear.
                </p>

                <p>
                  Someone else's. She will be someone else's. As she once <br />
                  belonged to my kisses. Her voice, her light body. Her infinite eyes. <br />
                </p>

                <p>
                  I no longer love her, true, but perhaps I love her. <br />
                  Love is so short and oblivion so long.
                </p>

                <p>
                  Because on nights like this I held her in my arms, <br />
                  my soul is lost without her.
                </p>

                <p>
                  Although this may be the last pain she causes me, <br />
                  and this may be the last poem I write for her.
                </p>
              </div>
            </BlogLayout>
          </motion.div>
        </motion.div>
      </>
    </>
  );
}
