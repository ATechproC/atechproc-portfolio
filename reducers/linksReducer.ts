import { LinksProps } from '@/constants';

const linksReducer = (currentState: LinksProps[], action: { type : string, payload : {id : number, type : string}}) => {

    const { type, payload } = action;

    switch (type) {
        case "linkClicked":
            {
                const newLinksState = [...currentState];
                for (let i = 0; i < newLinksState.length; i++) {
                    if (newLinksState[i].id === payload.id) {
                        newLinksState[i].isClicked = true;
                    } else {
                        newLinksState[i].isClicked = false;
                    }
                }
                return newLinksState;
            }

        case "linkHovered": {
            const newLinksHovered = [...currentState];
            for (let i = 0; i < newLinksHovered.length; i++) {
                if (payload.type === "enter") {
                    if (newLinksHovered[i].id === payload.id) {
                        newLinksHovered[i].isHovered = true;
                    } else {
                        newLinksHovered[i].isHovered = false;
                    }
                } else {
                    newLinksHovered[i].isHovered = false;
                }
            }
            return newLinksHovered;
        }

        default : throw Error("unknown action : " + type)
    }
}

export default linksReducer