import  Axios from"axios";

export default {
    search: () => {
        return Axios.get("https://randomuser.me/api/?results=20&nat=us");
    },
};