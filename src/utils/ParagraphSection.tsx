import ComponentSection from "./ComponentSection";
import { Paragraph } from "../components/Paragraph";

function ParagraphSection() {
  return (
    <ComponentSection name="Paragraph">
      <div className="typography-container">
        <div>
          <Paragraph>
            Down to the shore came fair-haired Calypso's guest, Odysseus, where
            he sat in his old place, wearing out his soul with lamentation,
            sighs, and bitter tears. There he would gaze over the barren sea,
            weeping without cease. Seven years had passed, and all the garments
            given by the nymph were fading. Each day he longed more deeply for
            his homeland, for wise Penelope, and for his son whom he had left an
            infant by the hearth. The immortal nymph no longer pleased him,
            though he spent his nights in her arched cavern as he must.
          </Paragraph>
          <Paragraph>
            Through the halls of his palace strode the suitors, insolent men who
            drained his wealth and wooed his wife. They feasted daily on his
            cattle and drank his dark wine, for there was no one to drive them
            from the gates while Odysseus wandered far from home.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

export default ParagraphSection;
