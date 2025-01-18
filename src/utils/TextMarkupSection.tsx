import ComponentSection from "./ComponentSection";
import { Paragraph } from "../components/Paragraph";

function TextMarkupSection() {
  return (
    <ComponentSection name="Text Markup">
      <div className="typography-container">
        <div>
          <Paragraph>
            The <dfn title="Ancient Greek term for homecoming">nostos</dfn> of
            the hero began with{" "}
            <i lang="el" translate="no">
              ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον
            </i>
            . Yet still the mighty Odysseus yearned for his homeland, while
            Athena watched over his journey, guiding his path toward Ithaca.
          </Paragraph>
          <Paragraph>
            <strong>Then grey-eyed Athena spoke to the council</strong>: Upon
            the waves did brave{" "}
            <a href="" target="_blank">
              Odysseus wander
            </a>{" "}
            far from his beloved shores.
          </Paragraph>
          <span className="asterism"></span>
          <Paragraph>
            Through Circe's isle and past the Sirens' songs he sailed, his crew
            bound tight against the mast while he <em>alone</em> could hear
            their deadly melody. His wisdom proved greater than their
            enchantments, though the price was dear.{" "}
            <q>
              O Father Zeus, if ever in word or deed I served thee well in the
              halls of heaven, hear my prayer: grant that Odysseus may come
              home, and come soon.
            </q>{" "}
            So prayed the goddess to her father above.
          </Paragraph>
          <aside>
            <Paragraph>
              In the halls of Ithaca, faithful Penelope kept her vigil, weaving
              by day the shroud she promised would precede her choice of suitor,
              yet each night she would undo her work. For three years she
              deceived them thus, her heart ever true to her absent lord.
            </Paragraph>
          </aside>
          <Paragraph>
            <q>
              Tell me, O Muse, of that ingenious hero who travelled far and wide
              after he had sacked the famous town of Troy.{" "}
              <mark>
                Many cities did he visit, and many were the nations with whose
                manners and customs he was acquainted.
              </mark>
            </q>
            <br />— <cite>Homer, The Odyssey</cite>
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

export { TextMarkupSection };
