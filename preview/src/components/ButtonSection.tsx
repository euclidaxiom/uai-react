import ComponentSection from "./ComponentSection";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonTrailingIcon,
} from "@uai-ui-react/button";

function ButtonSection() {
  return (
    <ComponentSection name="Button">
      <Button size="32">
        <ButtonIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonIcon>
      </Button>
      <Button size="32">
        <ButtonText>Label</ButtonText>
      </Button>
      <Button size="32">
        <ButtonIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonIcon>
        <ButtonText>Label</ButtonText>
      </Button>
      <Button size="32">
        <ButtonIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonIcon>
        <ButtonTrailingIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonTrailingIcon>
      </Button>
      <Button size="32">
        <ButtonText>Label</ButtonText>
        <ButtonTrailingIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonTrailingIcon>
      </Button>
      <Button size="32">
        <ButtonIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonIcon>
        <ButtonText>Label</ButtonText>
        <ButtonTrailingIcon>
          <span className="material-symbols-sharp">select</span>
        </ButtonTrailingIcon>
      </Button>
    </ComponentSection>
  );
}

export default ButtonSection;
