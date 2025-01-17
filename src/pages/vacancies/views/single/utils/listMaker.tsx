const listMaker = (enteredText: string) => {
  const list = enteredText?.split("\n");
  const renderedList = list?.map((item, index) => <li key={index}>{item}</li>);
  return renderedList;
};

export default listMaker;
