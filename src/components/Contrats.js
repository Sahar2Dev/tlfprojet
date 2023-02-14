import useFetch from "./useFetch";
import React from "react";

import ScrollContainer from "react-indiana-drag-scroll";
import $ from "jquery"

import frdatatable from '../frdatatable.json'
import { useSelector } from "react-redux";
const Contratss = () => {
  const url=process.env.React_App_URL;

  $(document).ready(function () {
   
    $('#contttadmin').DataTable({
      language:frdatatable,
      "dom": 'Blfrtip',
      buttons: [
        {extend:'excel',
      className:'btn btn-buttondatatable'},
      {extend:'copy',
      className:'btn btn-buttondatatable'},
      {extend:'pdf',
      orientation: 'landscape',
      pageSize: 'LEGAL',
      className:'btn btn-buttondatatable'},
      {extend:'csv',
      className:'btn btn-buttondatatable'},
      {extend:'print',
      className:'btn btn-buttondatatable'},      
      

       
      ]
      ,"bDestroy": true
     } )
  
});

$(document).ready(function () {
   
  $('#contttrh').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'copy', 'excel', 'pdf', 'csv','print'
    ]
    ,"bDestroy": true
   } )

});
const userinfo =useSelector(state => state.userinfo);
    const test=userinfo[0]
    if(Object.keys(userinfo).length !=0){ 
      var viewlistcontrats_admin=test['viewlistcontrats_admin']
      var iddep=test['iddep']
      var viewlistcontrats_rh=test['viewlistcontrats_rh']
    }
  const { data: Contrats = [] } = useFetch(url+"Testuserofdepartements/?id="+iddep)
  const { data: ContratsAdmin = [] } = useFetch(url+"user")
  
    return ( 
        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
          <div className="card shadow">
          <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Contrats</h3>
      </div>
        <div className="table-responsive">


     
      
        {viewlistcontrats_admin==true? 

 <>
      <ScrollContainer>
      <div className="table-responsive">
      {ContratsAdmin.length==0?"":      <table className="display" id="contttadmin">
          <thead className="thead-light">
            <tr>
              
              <th scope="col">Email</th>
              <th scope="col">Date début de contrat</th>
              <th scope="col">Date fin de contrat</th>
              <th scope="col">Date De Recrutement</th>
              <th scope="col">Rappel 1</th>
              <th scope="col">Rappel 2</th>
           
            
            </tr>
          </thead>
          <tbody>
    
             
            {ContratsAdmin.map(contrat =>
                    <tr key={contrat.id}>
                      <td >{contrat.email}</td>
                      <td>
                   {contrat.démarrageContrat}
                      </td> 
                      <td>
                   {contrat.datefin}
                      </td> 
                      <td>
                   {contrat.datedemarrage}
                      </td> 
                      <td>
                   {contrat.rappel1}
                      </td> 
                      <td>
                   {contrat.rappel2}
                      </td> 
              
                    </tr>
                  )}
    

             
         
          </tbody>
        </table>}
      </div>
      </ScrollContainer>
      </>
      
      :



      viewlistcontrats_rh==true?   
     <>
     <ScrollContainer>
      <div className="table-responsive">
      {Contrats.length==0 ?"":      <table className="display" id="contttrh">
          <thead className="thead-light">
            <tr>
              
              <th scope="col">Email</th>
              <th scope="col">Date début de contrat</th>
              <th scope="col">Date fin de contrat</th>
              <th scope="col">Date de démarrage</th>
              <th scope="col">Rappel 1</th>
              <th scope="col">Rappel 2</th>
           
            
            </tr>
          </thead>
          <tbody>
    
             
            {Contrats.map(contrat =>
                    <tr key={contrat.id}>
                      <td >{contrat.email}</td>
                      <td>
                   {contrat.démarrageContrat}
                      </td> 
                      <td>
                   {contrat.datefin}
                      </td> 
                      <td>
                   {contrat.datedemarrage}
                      </td> 
                      <td>
                   {contrat.rappel1}
                      </td> 
                      <td>
                   {contrat.rappel2}
                      </td> 
              
                    </tr>
                  )}
    

             
         
          </tbody>
        </table>}
      </div>
      </ScrollContainer>
     
     </>
    :""}
    
   
        </div>
        
        </div> 
        </div></div></div>
     );
}
 
export default Contratss;