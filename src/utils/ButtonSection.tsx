import ComponentSection from "./ComponentSection";
import {
  Button,
  LabelIcon,
  LabelText,
  TrailingIcon,
} from "../components/Button";

function ButtonSection() {
  return (
    <ComponentSection name="Button">
      <Button size="32">
        <LabelIcon>select</LabelIcon>
      </Button>
      <Button size="32">
        <LabelText>Label</LabelText>
      </Button>
      <Button size="32">
        <LabelIcon>select</LabelIcon>
        <LabelText>Label</LabelText>
      </Button>
      <Button size="32">
        <LabelIcon>select</LabelIcon>
        <TrailingIcon>select</TrailingIcon>
      </Button>
      <Button size="32">
        <LabelText>Label</LabelText>
        <TrailingIcon>select</TrailingIcon>
      </Button>
      <Button size="32">
        <LabelIcon>select</LabelIcon>
        <LabelText>Label</LabelText>
        <TrailingIcon>select</TrailingIcon>
      </Button>
    </ComponentSection>
  );
}

export default ButtonSection;
