import { CategoryProps } from '@/constants';

const selectedItemsReducer = (currentState : CategoryProps[], action : { type : string; payload : {id : number}}) => {
    
    const { type, payload } = action;

    switch (type) {
        case "selectedItem": {
            const newSelectedItems = [...currentState];
            for (let i = 0; i < newSelectedItems.length; i++) {
                if (newSelectedItems[i].id === payload.id) {
                    newSelectedItems[i].isSelected = true;
                } else {
                    newSelectedItems[i].isSelected = false;
                }
            }
            return newSelectedItems;
        }

        default: throw Error("Unknown action : " + type)
    }
}

export default selectedItemsReducer;