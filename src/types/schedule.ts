export interface ScheduleData {
  type: 'main' | 'speech' | 'ceremony' | 'networking' | 'performance' | "";
  time: string;
  speaker?: string;
  title?: string;
  description?: JSX.Element;
  location?: string;
}