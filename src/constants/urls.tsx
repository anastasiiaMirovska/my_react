const baseURL = "http://owu.linkpc.net/carsAPI/v2";

const users = "/users";
const auth = "/auth";
const cars = "/cars";

const urls={
    cars:{
        base: cars
    },
    auth:{
        register: users,
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    }
}

export {
    baseURL,
    urls
}

