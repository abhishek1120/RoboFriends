import React from "react";

const card = ({ name, email, id }) => {
  //   const { name, email, id } = props; destructuring
  return (
    <div className="bg-lightest-blue dib tc br3 pa3 ma4 bw2 shadow-5 grow">
      <img
        src={`https://robohash.org/${id}`}
        alt="robots"
        height="300"
        width="300"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default card;
