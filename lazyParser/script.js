const schema = {
    id: "root",
    name: "Root",
    children: [
      { $ref: "#/definitions/child1" },
      { $ref: "#/definitions/child2" }
    ],
    definitions: {
      child1: {
        id: "child1",
        name: "Child 1",
        children: [{ $ref: "#/definitions/child2" }]
      },
      child2: {
        id: "child2",
        name: "Child 2",
        children: [{ $ref: "#/definitions/child1" }]
      }
    }
  };
  
  function resolvePointer(obj, pointer) {
    const parts = pointer.replace(/^#\//, "").split("/");
    return parts.reduce((acc, key) => acc && acc[key], obj);
  }
  
  function lazyDeref(node, root, visited = new Set(), depth = 0, maxDepth = 2) {
    if (!node || typeof node !== "object") return node;
    if (depth > maxDepth) return node;
  
    if (node.$ref) {
      const refPath = node.$ref;
      if (visited.has(refPath)) {
        return { circular: true, $ref: refPath };
      }
  
      visited.add(refPath);
      const target = resolvePointer(root, refPath);
      return lazyDeref(target, root, new Set(visited), depth + 1, maxDepth);
    }
  
    if (Array.isArray(node)) {
      return node.map(child => lazyDeref(child, root, new Set(visited), depth + 1, maxDepth));
    }
  
    const result = {};
    for (const key in node) {
      result[key] = lazyDeref(node[key], root, new Set(visited), depth + 1, maxDepth);
    }
    return result;
  }
  
  function createTreeNode(node, root, parentPath = "#") {
    const li = document.createElement("li");
    const label = document.createElement("span");
  
    if (node.circular) {
      label.textContent = `↻ Circular Ref: ${node.$ref}`;
      label.classList.add("circular");
      li.appendChild(label);
      return li;
    }
  
    label.textContent = node.name || node.id || "Node";
    li.appendChild(label);
  
    if (node.children && node.children.length > 0) {
      label.addEventListener("click", (e) => {
        e.stopPropagation();
        if (li.querySelector("ul")) {
          li.querySelector("ul").remove(); // Collapse
          return;
        }
  
        const ul = document.createElement("ul");
        node.children.forEach(child => {
          const deref = lazyDeref(child, root);
          const childNode = createTreeNode(deref, root);
          ul.appendChild(childNode);
        });
        li.appendChild(ul);
      });
    }
  
    return li;
  }
  
  function renderTree(schema) {
    const rootNode = createTreeNode(schema, schema);
    const ul = document.createElement("ul");
    ul.appendChild(rootNode);
    document.getElementById("tree").appendChild(ul);
  }
  
  renderTree(schema);
  