import { makeAutoObservable } from 'mobx';

class UserStore {
    socketID;

    setSocketID = (id) => {
        this.socketID = id;
    };
};

const userStore = makeAutoObservable(new UserStore());
 export default userStore;