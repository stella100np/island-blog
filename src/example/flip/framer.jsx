import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selectItem, setSelectItem] = useState("foo");
  const [itemList, _] = useState([
    { label: "foo" },
    { label: "bar" },
    { label: "poi" },
  ]);

  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.label} onClick={() => setSelectItem(item.label)}>
          {selectItem === item.label ? (
            <motion.div layoutId="underline" className="selected-bg" />
          ) : null}
          <div className="item">{item.label}</div>
        </li>
      ))}
    </ul>
  );
}
