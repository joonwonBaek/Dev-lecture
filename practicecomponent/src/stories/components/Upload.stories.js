import Upload from "../../components/Upload/Upload";

export default {
  title: "Components/Upload",
  component: Upload,
};

export const Default = () => {
  return (
    <Upload>
      <button>Upload</button>
    </Upload>
  );
};

export const AccessFile = () => {
  return (
    <Upload>{(file) => <button>{file ? file.name : "Upload"}</button>}</Upload>
  );
};

export const Droppable = () => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 300,
            border: "4px dashed #aaa",
            borderColor: dragging ? "black" : "#aaa",
          }}
        >
          {file ? file.name : "Click or Drag File to Upload"}
        </div>
      )}
    </Upload>
  );
};
