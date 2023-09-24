export interface ScheduleData {
  type: 'main' | 'speech' | 'ceremony' | 'networking' | 'performance' | "";
  title: string;
  time: string;
  location?: string;
  description?: JSX.Element;
}