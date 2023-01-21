import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Hello Franklin,</h3>
      <p>
        Banner pendiente de frase <span>{`${currency}69`}</span>{" "}
        aquí
      </p>
      <a href={more}>Ver más</a>
    </div>
  );
}

export default BannerName;
