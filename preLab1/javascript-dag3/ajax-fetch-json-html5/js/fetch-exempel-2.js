function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
//const url = 'data/data.json';
function getAllElementsFromJson(jsonPath, htmlId){

    var url = jsonPath;
    const ul = document.getElementById(htmlId);

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {

            let todos = data.products;

            return todos.map(function(todo) {
                let li = createNode('li');
                let a = createNode("a");

                a.href = todo.hrefToContent;
                a.innerHTML = "<img src=\"" + todo.productPicture +"\">";
                li.innerHTML = todo.todoTitle + " " + todo.todoDate;
                append(ul, a);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });



}

