export interface IDate {
  year: string,
  month: string,
  day: string,
};

export interface ITaskDetails {
    title: string;
    startTime: string;
    endTime: string;
    date: IDate;
    id: string;
    completed: boolean;
  }