import { ok } from "assert";
import Container from "../Container";

const navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
            py-4
            border-b-[1px]"
      >
        <Container>
            anything
        </Container>
      </div>
    </div>
  );
};

export default navbar;
