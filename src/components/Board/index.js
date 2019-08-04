import React, { useState } from 'react';
import produce from 'immer';
import List from '../List'
import BoardContext from './context'
import { loadLists } from '../services/api'
import { Container } from './styles'


const data = loadLists();
export default function Board(){
    const [lists, setLists] = useState(data);

    function move(fromList, toList, from, to){
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];

            // remove item list
            draft[fromList].cards.splice(from, 1);

            // insert new list
            draft[toList].cards.splice(to, 0, dragged);

        }))
    }
    return(
        <BoardContext.Provider value={{lists, move}}>
            <Container>
                {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)}
            </Container>
        </BoardContext.Provider>
    );
}