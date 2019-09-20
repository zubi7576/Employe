import {ADD_EMP} from  "../Actions";

const state =
{
    empList:[]
}

const addRed = (mState = {...state},action) =>
{
   switch (action.type)
   {
       case ADD_EMP:
           mState.empList.push(action.payload);
           return clone(mState);

           default:
           return clone(mState)
   }
}
export default addRed;

const clone = (obj) =>
{
    return JSON.parse(JSON.stringify(obj))
}