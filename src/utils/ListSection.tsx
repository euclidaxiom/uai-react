import ComponentSection from "./ComponentSection";
import { DashedList, ListItem, NumberedList } from "../components/List";
import { Paragraph } from "../components/Paragraph";

function DashedListSection() {
  return (
    <ComponentSection name="Dashed List">
      <div className="typography-container">
        <div>
          <Paragraph>
            After the fall of Troy, Odysseus faced many trials on his journey
            home, each testing his cunning and resolve as he sought to return to
            his beloved Ithaca:
          </Paragraph>
          <DashedList>
            <ListItem>
              The hero and his crew first encountered the Lotus-Eaters, whose
              sweet fruit threatened to rob them of their memories and desire
              for home
            </ListItem>
            <ListItem>
              In the land of the Cyclops, Odysseus faced the mighty Polyphemus,
              devising a brilliant plan to escape by concealing his men under
              sheep and calling himself "Nobody"
            </ListItem>
            <DashedList>
              <ListItem>
                He blinded the Cyclops with a heated olive stake while the
                monster lay in drunken sleep from the wine they had offered
              </ListItem>
              <ListItem>
                When other Cyclops came to help, Polyphemus cried that "Nobody"
                had hurt him, ensuring their escape
              </ListItem>
            </DashedList>
            <ListItem>
              This victory came at a great cost, as Polyphemus was Poseidon's
              son, earning the sea god's undying wrath
            </ListItem>
          </DashedList>
        </div>
      </div>
    </ComponentSection>
  );
}

function NumberedListSection() {
  return (
    <ComponentSection name="Numbered List">
      <div className="typography-container">
        <div>
          <Paragraph>
            Upon returning to Ithaca in disguise, Odysseus carefully executed
            his plan to reclaim his palace, following these crucial steps:
          </Paragraph>
          <NumberedList>
            <ListItem>
              First he revealed himself to his son Telemachus, ensuring his
              loyal support and preparing their strategy against the suitors
            </ListItem>
            <ListItem>
              Next he endured the suitors' mockery while disguised as a beggar,
              observing their behavior and identifying potential allies
            </ListItem>
            <NumberedList>
              <ListItem>
                He carefully noted which servants remained faithful to Penelope
                and which had betrayed their household to the suitors
              </ListItem>
              <ListItem>
                With Telemachus, he secretly removed all weapons from the great
                hall, leaving only his mighty bow
              </ListItem>
            </NumberedList>
            <ListItem>
              Finally, he revealed himself by stringing the great bow that only
              he could bend, beginning his righteous vengeance
            </ListItem>
          </NumberedList>
        </div>
      </div>
    </ComponentSection>
  );
}

export { DashedListSection, NumberedListSection };
