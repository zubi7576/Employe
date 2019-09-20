import {ADD_EMP} from './index';

export const addEmploye = (employee) =>dispatch =>
{
    const state = 
    {
        type:ADD_EMP,
        payload:employee
    }
    dispatch(state)
}