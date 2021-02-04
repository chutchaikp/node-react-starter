import React from "react";

export const IconSvg = ({ src, width, height }) => {
	return (<img src={`/img/svg/${src}`} alt={src} width={width} height={height} />);
};
