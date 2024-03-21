import { addDays, eachDayOfInterval } from "date-fns";

export const datetimeUtils = {
  /**
   *
   * @param {Date} start
   * @param {Date} end
   */
  getDateRange(start, end) {
    return eachDayOfInterval({ start, end });
  },

  /**
   *
   * @param {Date} date
   * @returns
   */
  getLast7Days(date) {
    const startDate = addDays(date, -6);
    return this.getDateRange(startDate, date);
  },
};
