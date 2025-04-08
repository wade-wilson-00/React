// Rendering lists

function List () {
    
    const fruits = [{name:"apple", calories: 92},
                    {name:"orange", calories: 98},
                    {name:"strawberry",calories: 120}];

    fruits.sort();

    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>)

    return(<ul>{listItems}</ul>);
}

export default List