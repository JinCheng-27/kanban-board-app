import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';
import AddColumn from './AddColumn';

const Container = styled.div`
    display: flex;
`;

function Board(props) {
    const initialData = { tasks: {}, columns: {}, columnOrder: [] };
    const [board, setBoard] = useState(initialData);

    async function fetchBoard() {
        const response = await fetch('http://localhost:8000/board');
        const data = await response.json();
        return data.board;
    }

    useEffect(() => {
        fetchBoard().then(data => setBoard(data));
    }, []);

    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (type === 'column') {
            /* Draggable column */
            const newColumnOrder = Array.from(board.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            setBoard({
                ...board,
                columnOrder: newColumnOrder
            });

            return;
        }

        if (type === 'task') {
            /* Draggable task within a single column */
            const start = board.columns[source.droppableId];
            const finish = board.columns[destination.droppableId];

            if (start === finish) {
                const newTaskId = Array.from(start.taskIds);
                newTaskId.splice(source.index, 1);
                newTaskId.splice(destination.index, 0, draggableId);

                const newColumn = {
                    ...start,
                    taskIds: newTaskId
                }

                setBoard({
                ...board,
                    columns: {
                    ...board.columns,
                        [newColumn.id]: newColumn
                    }
                });

                return;
            }

            /* Draggable task between columns */
            const startTaskId = Array.from(start.taskIds);
            startTaskId.splice(source.index, 1);

            const newStartColumn = {
                ...start,
                taskIds: startTaskId
            }

            const finishTaskId = Array.from(finish.taskIds);
            finishTaskId.splice(destination.index, 0, draggableId);

            const newFinishColumn = {
                ...finish,
                taskIds: finishTaskId
            }

            setBoard({
                ...board,
                columns: {
                    ...board.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn
                }
            })
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <AddColumn board={board} setBoard={setBoard} />
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
                {provided => (
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            board.columnOrder.map((columnId, index) => {
                                const column = board.columns[columnId];
                                const tasks = column.taskIds.map(taskIds => board.tasks[taskIds]);
                                return < Column key={column.id} column={column} tasks={tasks} index={index} board={board} setBoard={setBoard}/>;
                            })
                        }
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>

    )
}

export default Board;