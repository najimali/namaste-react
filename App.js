const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child",
        key: 1,
    },
        [
            React.createElement("h1", {
                id: "heading1",
                key: 1,
            }, "Hello world from nested h1 tag"),
            React.createElement("h2", {
                id: "heading2",
                key: 2,
            }, "Hello world from nested h2 tag")
        ],
    ),
    React.createElement("div", {
        id: "child2",
        key: 2,
    },
        [
            React.createElement("h1", {
                id: "heading1",
                key: 1,
            }, "Hello world from nested h1 tag"),
            React.createElement("h2", {
                id: "heading2",
                key: 2,
            }, "Hello world from nested h2 tag")
        ],
    )]
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);