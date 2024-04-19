export interface History {
  lessonTitle: string;
  lessonDesc: string;
  completedDate: string;
  /**
   * These two fields are used for a quick search to find the correspending lesson
   */
  sectionIndex: number;
  lessonIndex: number;
}
