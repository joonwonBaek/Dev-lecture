import Menu from "@components/domain/Menu/Menu";

const DefaultTemplate = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;
