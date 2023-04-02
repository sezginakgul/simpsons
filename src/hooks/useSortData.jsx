import { useState } from "react";

const useSortData = () => {
  const [sortFlag, setSortFlag] = useState(true);

  const handleSort = (data) => {
    data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortFlag) {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    });

    setSortFlag(!sortFlag);
  };

  return { handleSort, sortFlag };
};

export default useSortData;
