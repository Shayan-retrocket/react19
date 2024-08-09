import { useState, useTransition } from "react";

//useTransition can keep lower states for later
//App set states for higher quality ones then go for useTransition
//useTransition make 1 more rerender so it should be used carefully

export default function Transition() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const listLength = 100000;

  const handleChange = (event: any) => {
    setName(event.target.value);
    startTransition(() => {
      const temp: any = [];
      for (let index = 0; index < listLength; index++) {
        temp.push(event.target.value);
      }
      setList(temp);
    });
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      {isPending ? "loading...." : list.map((x) => x)}
    </div>
  );
}
