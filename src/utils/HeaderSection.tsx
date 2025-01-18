import ComponentSection from "./ComponentSection";
import { Paragraph } from "../components/Paragraph";
import { Header } from "../components/Header";

function Header1Section() {
  return (
    <ComponentSection name="Header 1">
      <div className="typography-container">
        <div>
          <Header level="1">Tell me, O Muse, of the man of many devices</Header>
          <Paragraph>
            The story begins with Odysseus far from home, held captive on
            Calypso's isle. The gods gather to discuss his fate, for he has been
            away from Ithaca for twenty years.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

function Header2Section() {
  return (
    <ComponentSection name="Header 2">
      <div className="typography-container">
        <div>
          <Header level="2">
            Through the wine-dark seas he sailed with his companions
          </Header>
          <Paragraph>
            After leaving Troy, the hero faces many challenges at sea. His fleet
            encounters the Cyclops, and his judgment is tested by the gods
            themselves.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

function Header3Section() {
  return (
    <ComponentSection name="Header 3">
      <div className="typography-container">
        <div>
          <Header level="3">
            Noble Penelope weaves by day and unravels by night
          </Header>
          <Paragraph>
            Back in Ithaca, his wife maintains the household while fending off
            suitors. She cleverly delays them with the promise of choosing one
            when her weaving is complete.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

function Header4Section() {
  return (
    <ComponentSection name="Header 4">
      <div className="typography-container">
        <div>
          <Header level="4">
            From the land of the Lotus-eaters to the shores of Circe's isle
          </Header>
          <Paragraph>
            Upon his return, disguised as a beggar, he observes his home. The
            great bow that only he can string becomes the tool of his
            revelation.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

function Header5Section() {
  return (
    <ComponentSection name="Header 5">
      <div className="typography-container">
        <div>
          <Header level="5">
            Between the whirlpool of Charybdis and the six-headed monster Scylla
          </Header>
          <Paragraph>
            Throughout his journey, the gray-eyed goddess watches over the hero,
            offering guidance and protection as he faces the trials before him.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

function Header6Section() {
  return (
    <ComponentSection name="Header 6">
      <div className="typography-container">
        <div>
          <Header level="6">
            Standing at last in his own halls, disguised as a beggar, he surveys
            the chaos
          </Header>
          <Paragraph>
            At last, after all trials and tribulations, the hero returns to his
            rocky homeland, where wisdom and courage will determine his fate.
          </Paragraph>
        </div>
      </div>
    </ComponentSection>
  );
}

export {
  Header1Section,
  Header2Section,
  Header3Section,
  Header4Section,
  Header5Section,
  Header6Section,
};
