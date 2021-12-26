import { useState } from 'react';

export default function Addbtn({ showAdd }) {
  const [changeBtn, setChange] = useState(true);

  return (
    <button
      onClick={() => {
        showAdd();
        setChange(!changeBtn);
      }}
      className={changeBtn ? 'show-add-box' : 'show-add-box red-back'}
    >
      <p>{changeBtn ? '+' : 'x'}</p>
    </button>
  );
}