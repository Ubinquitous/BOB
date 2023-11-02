/* eslint-disable */
import React, { Dispatch, SetStateAction, useState } from "react";
import reactCSS from "reactcss";
import { ColorResult, SketchPicker } from "react-color";

interface ColorPickerProps {
  ColorBox: any;
  displayColorPicker: boolean;
  setDisplayColorPicker: Dispatch<SetStateAction<boolean>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  ColorBox,
  displayColorPicker,
  setDisplayColorPicker,
}) => {
  // eslint-disable-next-line
  const [color, setColor] = useState<any>({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (currentColor: ColorResult) => {
    setColor(currentColor);
    ColorBox({ color: currentColor.hex, alpha: currentColor.rgb.a });
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "45px",
        height: "45px",
        borderRadius: "10px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: "0px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      {displayColorPicker && (
        <div style={styles.popover as any}>
          <div style={styles.cover as any} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
