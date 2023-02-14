
import React, { useEffect, useState ,useMemo} from 'react'
import useFetch from '../useFetch';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';
import $ from "jquery"
import  { Bar } from 'react-chartjs-2'
import frdatatable from '../../frdatatable.json'

import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);



const Indicateurs = () => {
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iddep=test['iddep']
   var admin=test['admin']
   var DRH=test['DRH']
  
    
  }
  
  const url=process.env.React_App_URL;
  const { data: dataa } = useFetch(url+"arbo/"+iddep)
  const { data: dataadmin, isloading: aae, error: fv } = useFetch(url+"arbo/")
 

  
  return (
  <div>
         
          <div>

{ iddep!=undefined? <Indi data={[dataa]} /> :admin==true || DRH==true?<Indi data={dataadmin}/>:""}
    </div></div>
  );
}


const Indi = ({ data = [] }) => {

  return (
    <div className="row">
      
      {data.map(tree =>
        <div className='col-md-6'>
          <div style={{width:"70%",height:"70%"}}>
        <Tree node={tree} id={tree.id} />
        </div>
        </div>
      )}
      </div>

  );
}


const Tree = ({ node, id }) => {
  const url=process.env.React_App_URL;
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null

  const [active, setActive] = useState(false)
  const [charts, setCharts] = useState([])
 
  
  useEffect(() => {

    if( id!=undefined){  fetch(url+`ChartAbsenceList/` + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
        Authorization: token,

      }
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {

            setCharts(json)

          });
        }
      }).catch((error) => {
  
      });}

    

  }, [id])
 
  const data = {
    labels: charts.map(x => x.name),
    datasets: [{
      label: charts.map(x => x.nombre),
      data: charts.map(x => x.nombre),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
  }



  return (

    <div className="container">
<h3>Indicateur de date {new Date().toLocaleString() + ''}</h3>

  
    
    
 



            
              <div className="">
              <Pie
                data={data}
                height={50}
                width={50}
                options={options}
              /> <a>

              </a>
           




       
         


              <h4 class="card-title">{node.nom}</h4>
              <button class="btn btn-danger" onClick={() => setActive(true)} data-toggle="modal" data-target={`#a${node.id}`}>Plus de détails  </button>
              <hr />



         
            </div>
    

     {/**     {node.children &&  Object.keys(node.children).length==0? 

       <> <Listpointages iddep={node.id}/>
       <LesretardsParSemaine iddep={node.id}/>
       
       
       </>  : ""
              }  */}



        <div className="modal fade" id={`a${node.id}`} role="dialog" aria-labelledby={`a${node.id}`} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
           
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <>
             
                {active === true && <Indi data={node.children} /> 
                
                
                }</>

              </div></div></div>
        </div>
   



    </div>

  );
}
const LesretardsParSemaine=(iddep)=>{
  const url=process.env.React_App_URL;
  const { data: retards } = useFetch(url+"LesretardsParSemaine/"+iddep.iddep)
  
  const data = {
    labels:retards.map(x=>x.day),
    datasets: [{
        label:"retard en minutes",
     // label:retards.map(x=>x.nomprenom),
        data: retards.map(x=>x.retard),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      
    }]
}
var options= {
    scales: {
        y: {
            beginAtZero: true,
           
            
        },
    },
    legend:{
        labels:{
            fontSize:26
        }
    },
    
}
  return(

    <>
          <Bar 
                data={data}
                height={121}
                options={options}
                
                />
    </>
  )
}
const Listpointages = (iddep)=>{
  const url=process.env.React_App_URL;
  const { data: pointagesParDepartement } = useFetch(url+"ListPointageByDepartement/"+iddep.iddep)
  $(document).ready(function () {
    $('#pointages').DataTable({
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
     } )})
  return(
<>
{pointagesParDepartement.length==0?  "":
       <table id="pointages" className='display'>
         <thead className="thead-light">
           <tr>

             <th scope="col">Employé</th>
             <th scope="col">pointages</th>
         
           

           </tr>
         </thead>
         <tbody>

         {pointagesParDepartement.map(x=>
         <tr key={x.id}>
  <td>{x.user_name} {x.last_name}</td>
  <td>{x.date}</td></tr>
 )}






         </tbody>
       </table>
}
 </>
   
   )};
export default Indicateurs;