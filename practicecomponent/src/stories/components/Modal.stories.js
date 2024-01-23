import { useState } from "react";
import Modal from "../../components/base/Modal/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Hi!
        <button onClick={() => setVisible(false)}>X</button>
      </Modal>
    </div>
  );
};
