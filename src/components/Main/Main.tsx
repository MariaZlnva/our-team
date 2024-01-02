import { IChildren } from "../../redux/types";

 const Main: React.FC<IChildren> = function({children}) {
  return (
    <main>
      {children}
    </main>
  );
}
export default  Main