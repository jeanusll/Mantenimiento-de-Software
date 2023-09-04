import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { es } from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(utc);
dayjs.locale("es");
dayjs.extend(localeData);
export function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  
  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>
        {dayjs(task.date).utc().format('dddd, DD [de] MMMM [del] YYYY')}        
      </p>
      
    </Card>
  );
}
