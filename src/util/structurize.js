const structurize = (data) => {
  const result = {
    author: {
      id: data.id,
    },
    note: {
      title: data.title,
      body: data.body,
    },
    date: data.date,
  };
  return result;
};

module.exports = structurize;
