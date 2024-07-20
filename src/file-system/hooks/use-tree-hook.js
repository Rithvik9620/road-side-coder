const useTreeHook = () => {
  const addIntoTree = (tree, folderId, name, isFolder) => {
    if (tree.id === folderId) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        items: [],
        isFolder,
      });

      return tree;
    }

    let items = tree.items.map((exp) => {
      return addIntoTree(exp, folderId, name, isFolder);
    });

    return { ...tree, items };
  };
  return { addIntoTree };
};

export default useTreeHook;
