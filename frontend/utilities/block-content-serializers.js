const defaultSerializers = {
  marks: {},
  types: {
    block: data => {
      const { node, children } = data;
      const { style } = node;

      if (style === "normal") {
        return <p className="block--normal">{children}</p>;
      }

      return children;
    }
  }
};

export { defaultSerializers };
