import SelectedItem from "./SelectedItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import type { IChannel } from "@/types/IChannel";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedChannels } from "@/stores/selectedChannels";
import toast from 'react-hot-toast';

export default function SelectedList() {
    const dispatch = useDispatch();
    const selectedChannels: IChannel[] = useSelector(
        (state: any) => state.selectedChannels.selectedChannels
    );

    function onDragEnd(result: any) {
        if (!result.destination) return;

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        const newSelectedChannels = [...selectedChannels];
        newSelectedChannels.splice(
            destinationIndex,
            0,
            newSelectedChannels.splice(sourceIndex, 1)[0]
        );

        dispatch(setSelectedChannels(newSelectedChannels));
        toast.success(`${selectedChannels[sourceIndex].title} ⚡ ${selectedChannels[destinationIndex].title}`)
    }

    return (
        <div className="mt-4">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-1">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="grid gap-y-2"
                        >
                            {selectedChannels.map(
                                (channel: IChannel, index: number) => (
                                    <Draggable
                                        key={channel.id}
                                        draggableId={`draggable-${channel.id}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <SelectedItem
                                                provided={provided}
                                                channel={channel}
                                            />
                                        )}
                                    </Draggable>
                                )
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
