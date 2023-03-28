import { v4 as uuidv4 } from 'uuid';


export const handler = async (event) => {
    const uuid = uuidv4
    return 'uuid=' + uuid;
};