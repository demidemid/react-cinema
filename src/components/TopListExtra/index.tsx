import React, { ReactNode } from "react";

interface ITopListExtraProps {
  name: string;
  children: ReactNode
}

const TopListExtra = ({ name, children }: ITopListExtraProps) => (
  <section className="films-list--extra">
    <h2 className="films-list__title">{name}</h2>

    <ul className="films-list__container">{children}</ul>
  </section>
);

export default TopListExtra;
