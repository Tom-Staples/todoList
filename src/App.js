import React, { useState } from 'react';
import Header from './Components/Header/Header';
import AddItem from './Components/AddItem/AddItem';
import ToDos from './Components/ToDos/ToDos';



const App = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    const handleClick = e => {
        const id = e.target.parentNode.previousSibling.id;
        const newItems = items.filter((item, index) => 
        (id / 1) !== index);
        setItems(newItems);    
    }

    const handleFilter = (filter) => {
        const filterLower = filter.toLowerCase();
        setFilter(filterLower);
        }

    const handleSubmit = item => {
        setItems(prevState => {
            return(
                [...prevState, item]
            );
        });
    }
    return (
        <div>
            <Header handleFilter={handleFilter}/>
            <AddItem handleSubmit={handleSubmit}/>
            <ToDos items={items} filter={filter} handleClick={handleClick}/> 
        </div>
    );
}

export default App;