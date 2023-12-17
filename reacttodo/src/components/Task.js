import styled from "styled-components";
import Toggle from "./Toggle";
import { useTasks } from "../contexts/TaskProvider";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: #white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: #ff6b6b;
  cursor: pointer;
`;
const Task = ({ id, content, complete, ...props }) => {
  const { updateTask, removeTask } = useTasks();
  return (
    <ListItem {...props}>
      <Toggle on={complete} onChange={() => updateTask(id, !complete)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>X</RemoveButton>
    </ListItem>
  );
};

export default Task;
