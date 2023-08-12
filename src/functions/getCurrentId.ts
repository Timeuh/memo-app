const getCurrentId = () => {
  const currentId = localStorage.getItem('currentId');
  if (currentId === null){
    return 0;
  }

  let nextId = parseInt(currentId);
  nextId ++;
  localStorage.setItem('currentId', JSON.stringify(nextId));
  return nextId;
};

export default getCurrentId;