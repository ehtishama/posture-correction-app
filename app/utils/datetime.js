import { addDays, eachDayOfInterval } from "date-fns";

export const datetimeUtils = {
  /**
   *
   * @param {Date} start
   * @param {Date} end
   * @returns {Date[]}
   */
  getDateRange(start, end) {
    return eachDayOfInterval({ start, end });
  },

  /**
   *
   * @param {Date} date
   * @returns {Date[]}
   */
  getLast7Days(date = new Date()) {
    const startDate = addDays(date, -6);
    return this.getDateRange(startDate, date);
  },
};
