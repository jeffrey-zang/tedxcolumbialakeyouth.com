export interface SpeakerType {
  [name: string]: {
    name: string;
    title: string;
    description?: JSX.Element;
    image: string;
  }
}