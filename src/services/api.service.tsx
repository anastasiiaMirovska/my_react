import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retrieveLocalStorageData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});


axiosInstance.interceptors.request.use(request=>{

    if (localStorage.getItem("tokenPair")&&(request.url !=="/auth" && request.url!=="/auth/refresh")){

        const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>("tokenPair");
        request.headers.set("Authorization", "Bearer " + iTokenObtainPair.access);
    }

    return request;
})


const authService = {
    authentication: async (authData:IAuthDataModel): Promise<boolean> =>{
        let response;
        try{
            response = await axiosInstance.post<ITokenObtainPair>("/auth", authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))
        }
        catch (e){
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh);
    },

    refresh: async(refreshToken:string)=>{
        const response = await axiosInstance.post<ITokenObtainPair>("/auth/refresh", {refresh:refreshToken});
        localStorage.setItem("tokenPair", JSON.stringify(response.data));
    }
}

const carService={
    getCars: async():Promise<ICarPaginatedModel | null>=>{
        try{
            const response = await axiosInstance.get<ICarPaginatedModel>("/cars");
            return response.data;
        }
        catch (e){
            let axiosError = e as AxiosError;
            console.log(axiosError);
            if(axiosError?.response?.status===401){
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>("tokenPair").refresh;
                await authService.refresh(refreshToken);
                return await carService.getCars();
            }
        }
        return null;
    }
}

export{
    authService,
    carService
}

