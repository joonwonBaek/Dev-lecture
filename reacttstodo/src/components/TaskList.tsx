import styled from "@emotion/styled";
import Task from "./Task";
import { useTasks } from "../contexts/TaskProvider";

const TaskList = (props: any) => {
  const { tasks } = useTasks();

  return (
    <UnorderedList {...props}>
      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
        />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  margin-top: 16px;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;

export default TaskList;
