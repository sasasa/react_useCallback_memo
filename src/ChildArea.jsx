import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

export const ChildArea = memo((props) => {
  const { isOpen, onClickClose } = props;
  console.log("ChildArea");
  const data = [...Array(300).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {isOpen ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
