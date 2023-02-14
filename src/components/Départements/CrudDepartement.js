import useFetch from '../useFetch';

import React from 'react';

import AjouterDepartement from './AjouterDépartement';


import Tree from './Tree'

import { useSelector } from 'react-redux';

function CrudDepartement() {
  const url=process.env.React_App_URL;
  const { data: departements } = useFetch(url+"arbo/")
 
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var view_dep_rh=test['view_dep_rh']
    
  }
  return (
    <div>
    <div className="container-fluid mt-5">
  <div className="row">
    <div className="col">
    <div className="card shadow">
    <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Départements </h3>
      </div>
<div className="card-header border-0">
{view_dep_rh==true?"":
            <AjouterDepartement />}
       
         
            <Tree data={departements} />  
           </div></div> </div></div></div></div>)
     }
export default CrudDepartement;