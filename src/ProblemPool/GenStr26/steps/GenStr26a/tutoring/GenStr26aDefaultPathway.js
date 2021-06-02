var hints = [{id: "GenStr26a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr26a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12n-3=12-3"], dependencies: ["GenStr26a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr26a-h3", type: "hint", dependencies: ["GenStr26a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr26a-h4", type: "hint", dependencies: ["GenStr26a-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr26a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3=-3"], dependencies: ["GenStr26a-h4"], title: "Subtraction", text: "Subtract 12n from each side.", variabilization: {}}, {id: "GenStr26a-h6", type: "hint", dependencies: ["GenStr26a-h5"], title: "Classification", text: "Because $$-3=-3$$ is a true statement, the equation is an identity.", variabilization: {}}, ]; export {hints};