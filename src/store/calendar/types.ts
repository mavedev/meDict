export const CALENDAR_CHANGE_DATE = 'CALENDAR_CHANGE_DATE';

export interface DateState {
  date: Date
}

interface CalendarChangeDateAction {
  type: typeof CALENDAR_CHANGE_DATE,
  payload: Date
}

export type CalendarActionType = CalendarChangeDateAction;
