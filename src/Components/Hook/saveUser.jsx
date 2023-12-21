// import axiosPublic from "./useAxiosPublic";

import axiosPublic from "./axiosPublic";


export const saveUser = async user =>{

    const currentUser ={
        email: user.email,
        role: 'guest',
    }

    const {data} = await axiosPublic.put(`/users/${user.email}`,currentUser)

    return data;

}