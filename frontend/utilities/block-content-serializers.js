import Image from "../components/image";

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
    },
    image: data => {
      const { node } = data;
      const { align } = node;

      return <Image image={node} />;
    }
  }
};

export { defaultSerializers };
