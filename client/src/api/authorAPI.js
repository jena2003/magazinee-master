import {$api} from "./index"

export const addAuthor = async(patronymic,city,adress,posteCode,education,specialtyCode,work,position,academicDegree) => {
    try {
        const response = await $api.post('/author',{patronymic,city,adress,posteCode,education,specialtyCode,work,position,academicDegree})
        return response

    }catch (e){
        console.log(e)
    }

}