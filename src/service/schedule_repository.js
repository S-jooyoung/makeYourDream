import { getDatabase, ref, set } from "firebase/database";

class ScheduleRepository {
  constructor(app) {
    this.firebaseDatabasae = getDatabase(app);
  }

  saveSchedule(userId, schedule) {
    set(
      ref(
        this.firebaseDatabasae,
        `${userId}/schedules/${schedule.id}`,
        schedule
      )
    );
  }
}
