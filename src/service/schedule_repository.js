import { getDatabase, ref, set } from "firebase/database";

class ScheduleRepository {
  constructor(app) {
    this.firebaseDatabasae = getDatabase(app);
  }

  saveSchedule(userId, card) {
    set(
      ref(
        this.firebaseDatabasae,
        `${userId}/schedules/${schedule.id}`,
        schedule
      )
    );
  }
}
