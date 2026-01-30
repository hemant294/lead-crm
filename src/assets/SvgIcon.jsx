import React, { useEffect, useState } from "react";
import "./SvgIcon.css";

const SvgIcon = ({
  name,
  size = 18,
  className = "",
  strokeColor,
  fillColor,
  strokeWidth,
}) => {
  const [svgContent, setSvgContent] = useState(null);

  const applySvgColors = (svgString, strokeColor, fillColor, strokeWidth) => {
    let updatedSvg = svgString;

    if (strokeColor) {
      updatedSvg = updatedSvg.replace(/stroke="[^"]*"/g, `stroke="${strokeColor}"`);
    }

    if (fillColor) {
      updatedSvg = updatedSvg.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
    }

    if (strokeWidth) {
      updatedSvg = updatedSvg.replace(/stroke-width="[^"]*"/g, `stroke-width="${strokeWidth}"`);

      if (!updatedSvg.includes("stroke-width=")) {
        updatedSvg = updatedSvg.replace(
          /<(path|circle|rect|line|polyline|polygon)([^>]*)(stroke=)/g,
          `<$1$2stroke-width="${strokeWidth}" $3`
        );
      }
    }

    return updatedSvg;
  };

  useEffect(() => {
    fetch(`/images/icons/${name}.svg`)
      .then((res) => res.text())
      .then((data) => {
        let finalSvg = applySvgColors(data, strokeColor, fillColor, strokeWidth);

        finalSvg = finalSvg
          .replace(/width="[^"]*"/g, "")
          .replace(/height="[^"]*"/g, "");

        finalSvg = finalSvg.replace(
          /<svg/,
          `<svg style="width: 100%; height: 100%;"`
        );

        setSvgContent(finalSvg);
      })
      .catch((err) => console.error("Error loading SVG:", err));
  }, [name, strokeColor, fillColor, strokeWidth]);

  if (!svgContent) return null;

  return (
    <span
      className={`svg-icon ${className}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SvgIcon;