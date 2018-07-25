function jsxScratch(tag, args, ...children) {
  return {
    tag,
    args: Array.isArray(args) || args,
    children: children && children.length ? [].concat(children) : null
  };
}

function render(node) {
  if (typeof node === "string" || node instanceof String)
    return document.createTextNode(node);

  const element = document.createElement(node.tag);

  Object.entries(args || {}).forEach(arg =>
    element.setAttribute(arg[0], arg[1])
  );

  (nodeChildren || []).forEach(child => element.appendChild(render(child)));

  return element;
}
