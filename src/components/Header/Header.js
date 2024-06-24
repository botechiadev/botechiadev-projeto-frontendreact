import React from "react";
import { ContainerHeader } from "./styled";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <ContainerHeader>
      <div className="headerFlex">
        <h1>
          <Logo />
        </h1>
        <nav>
          <button>PAGE-1</button>
          <button>PAGE-2</button>
          <button>PAGE-3</button>

          <button>
            <FaCircleUser />
          </button>
        </nav>
      </div>
    </ContainerHeader>
  );
}
