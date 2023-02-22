import useFetch from '../useFetch';
import React,{useState,useRef} from 'react'
import { useEffect } from 'react';
import  { Bar } from 'react-chartjs-2'
import { useReactToPrint } from "react-to-print";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Tableau= () => {
  const url=process.env.React_App_URL;
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduser=test['id']
    
  }
  const[openn,setOpenn]=useState(false)
  const [post,setPost]=useState(false)
useEffect(()=>{

    
    if (tableau.length==0){
    
    setOpenn(true)
  setPost(false)
  
    }else{
    setOpenn(false)
    setPost(true)}
  }
  ,[openn,post])
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 


    const { data: tableau = []} = useFetch(url+"accuiel/"+iduser)
    const[retreiveconge,setRetreiveCOnge]=useState([])

    function ImprimerConge(idcongeretriev){
      axios.get(url+"SelectcongebyId/"+idcongeretriev, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        
        },
      }).then( res =>{
        setRetreiveCOnge(res.data) 
      }
        
      ).catch( err =>{

      })
    }
    const { data: historiqueconges = []} = useFetch(url+"HistoriqueDemendesConges/"+iduser)
   

      const data = {
          labels:tableau=="in exception"|| tableau.length==0?"":tableau.map(x=>x.day),
          datasets: [{
        
              label: "Heures de travail par jour",
              data: tableau.map(x=>x.travailchart),
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
                  max:12
                  
              }
          },
          legend:{
              labels:{
                  fontSize:26
              }
          },
          
      }
   
    return ( 
      <div>
      <div className="container-fluid mt-5">
    <div className="row">
      <div className="col">
      <div className="card shadow">
      <div className='row'> 
      
        <div className='col-md-6 '   >
     
       
        <div className="table-responsive"  style={{boxShadow :"  0 0 8px 0px" , marginTop : 40 ,borderRadius:"7px"}}>
        <h4 >Tableau relatif à votre situation au cours des 7 derniers jours </h4>
        <table className="table align-items-center table-flush">
          <thead className="thead-dark">
            <tr>
              
              <th scope="col">Jour</th>
              <th scope="col">Date</th>
              <th scope="col">Pointages</th>
            
            </tr>
          </thead>
          
        
          <tbody >
    
          {post ?
         <> 
             {tableau.map(ta =>
              <tr key={ta.idemploye}>
                <td>{ta.day}</td>
                <td>{ta.date}</td>
                 {ta.pointagemanquant? <td style={{backgroundColor:"#34FEF8"}} className="text-dark">{ta.heuretravail}<br></br><small className="text-dark">{ta.pointages}</small></td> :ta.teletravail?<td style={{backgroundColor:"#3D3F43"}} className="text-light">{ta.heuretravail}<br></br><small className="text-light">{ta.pointages}</small></td> :ta.absent ? <td style={{backgroundColor:"#F45984"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>: ta.conge ? <td className='table-warning'>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>: ta.present ? <td style={{backgroundColor:"#9ACD32"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td> :ta.absencejustifie ?<td style={{backgroundColor:"#F45984"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>:ta.absencenonjustifie ?<td style={{backgroundColor:"#F45984"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td> :ta.authorisation?<td style={{backgroundColor: "#679DE5"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>:ta.ferie?<td style={{backgroundColor:"#BE94F0"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>:ta.mission?<td className='table-default'>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>:ta.repos?<td style={{backgroundColor:"#0089F3"}}>{ta.heuretravail}<br></br><small>{ta.pointages}</small></td>:ta.demijour?  <td style={{backgroundColor:"#F7EAA8"}}>{ta.heuretravail} (hth/2)<br></br><small>{ta.pointages}</small></td>:<td  className="text-dark">Pas de planning<br></br><small className="text-dark"></small></td>}
              </tr>
            )}
            </> 
            :( <>{tableau.length==0 ? <Backdrop  open={openn}>
              <CircularProgress  style={{color:"yellow"}} />
              </Backdrop>:setPost(true)}</>)
              
            }
        
    
   

             
         
          </tbody>


        </table>
      
      </div>
    
        </div>  
       
 <div className='col-md-6'>

 <div className="card-header"  style={{boxShadow :"  0 0 8px 0px" , marginTop : 40 ,borderRadius:"7px"}}>
 <h4>Tableau de votre congés validés </h4>
      <div className='row'>
    
        <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-dark">
      
            <tr>
              <th scope="col" style={{width:"10%"}}>Id</th>
              <th scope="col" style={{width:"20%"}}>début</th>
              <th scope="col" style={{width:"20%"}}>fin</th>
         
              <th scope="col" style={{width:"10%"}}>Solde</th>
              <th scope="col" style={{width:"10%"}}>Motif</th>
              <th scope="col" style={{width:"20%"}}>état</th>
              <th scope="col" style={{width:"10%"}}>Imprimer</th>
            
            </tr>
          </thead>
          <tbody>
    
             
            {historiqueconges.filter(x=>x.date_autorisation==null && x.mission==false).map(hi =>
                    <tr key={hi.idconge}>
                      <td>{hi.idconge}</td>
                      <td>{hi.datedebut}</td>
                      <td>{hi.datefin}</td>
           
                   
                      <td className='table-danger'>{hi.solde}</td>
                      <td>{hi.motif}</td>
                      <td>{hi.validation}</td>
                      <td > <button onClick={()=>{ImprimerConge(hi.idconge)}} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#a${hi.idconge}`} >Imprimer</button></td>
                      <div className="modal fade" id={`a${hi.idconge}`} role="dialog" aria-labelledby={`a${hi.idconge}`} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
             
              <div className="modal-body">
        
     <div className='conatiner-fluid' ref={componentRef}>
     <img src="./TLF-Logo-A.jpg" style={{  width: "180px", height: "160px" }} alt="..." />
     <h1 className='text-center'>Demande de congé</h1>
     <br/>
     <table class="table table-dark">
     <thead class="thead-dark">
    
  </thead>
  <tbody>
  {retreiveconge.map(x=>
  <>
<tr>
<th scope="row"><h2>Id congé </h2></th> 
<td><h2> {x.idconge}</h2></td>
</tr>
    <tr>
    <th scope="row"><h2>Nom d'employé </h2></th> 
<td><h2> {x.user_name}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Prénom d'employé </h2></th> 
<td><h2> {x.last_name}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Matricule </h2></th> 
<td><h2> {x.matricule}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Date début de congé </h2></th> 
<td><h2> {x.datedebut}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Date fin de congé </h2></th> 
<td><h2> {x.datefin}</h2></td>
</tr>

<tr>
<th scope="row"><h2>Heure début de congé </h2></th> 
<td><h2> {x.heure_debut}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Heure fin de congé </h2></th> 
<td><h2> {x.heure_fin}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Motif de congé</h2></th> 
<td><h2> {x.motif}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Solde d'employé</h2></th> 
<td><h2> {x.solde}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Nombre de jours</h2></th> 
<td><h2> {x.nbjours}</h2></td>
</tr>

<tr>
<th scope="row"><h2>Personne intémrimaire</h2></th> 
<td><h2> {x.personneinterimaire}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Commentaire</h2></th> 
<td><h2> {x.commentaire}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Date et heure de reprise</h2></th> 
<td><h2> {x.datetimereprise}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Avis Chef</h2></th> 
<td><h2> {x.validation}</h2></td>
</tr>
<tr>
<th scope="row"><h2>Avis Rh</h2></th> 
<td><h2> {x.validationrh=="null"? 0 : x.validationrh }</h2></td>
</tr>

    </>
  )}
  </tbody>

</table>
  <h2 className='text-right' style={{marginRight:"60px"}}>Signature et caché</h2>

     </div>
     <button onClick={   handlePrint} className="btn btn-primary">Imprimer</button>
     </div></div></div></div>
                    </tr>
                  )}
   

             
         
          </tbody>
        </table>
      
        </div>
      </div>
      </div>
      <div className="card-header" style={{boxShadow :"  0 0 8px 0px" , marginTop : 40 ,borderRadius:"7px"}}>
      <h4>Tableau pour votre autorisations validés </h4>
      <div className='row'>
    
        <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-dark">
      
            <tr>
              <th scope="col" style={{width:"10%"}}>Id</th>
              <th scope="col" style={{width:"20%"}}>date.aut</th>
              <th scope="col" style={{width:"20%"}}>h.debut</th>
              <th scope="col" style={{width:"20%"}}>h.fin</th>
              <th scope="col" style={{width:"10%"}}>Motif</th>
              <th scope="col" style={{width:"20%"}}>état</th>
            
            </tr>
          </thead>
          <tbody>
    
             
            {historiqueconges.filter(x=>x.date_autorisation!==null && x.mission==false).map(hi =>
                    <tr key={hi.id}>
                      
                      <td>{hi.idconge}</td>
                      <td>{hi.date_autorisation}</td>
                      <td>{hi.heure_debut}</td>
                      <td>{hi.heure_fin}</td>
                      <td>{hi.motif}</td>
                      <td>{hi.validation}</td>
                    
                    </tr>
                  )}
   

             
         
          </tbody>
        </table>
     
        </div>
      </div>
      </div>
 </div>

        </div>
<br/>
        <div className='row'>
        <div className='col-md-3'>
         
         <div className="table-responsive table-sm"  style={{boxShadow :"  0 0 8px 0px" ,borderRadius:"7px"}}>
         <table className="table align-items-center table-flush" style={{  boxShadow :"  0 0 8px 0px"
 }}>
         <thead className="thead-dark">
             <tr style={{   
 }}>
               
               <th scope="col">état</th>
               <th scope="col">couleur</th>
             
             </tr>
           </thead>
           <tbody>
     
              
          
                     <tr  >
                       <td>Absent</td>
                       <td style={{backgroundColor:"#F45984"}}></td>
                   
                     </tr>
                     <tr>
                       <td>Présent</td>
                       <td style={{backgroundColor:"#9ACD32"}}></td>
                   
                     </tr>
                   
                   
                     <tr>
                       <td>Congé</td>
                       <td className='table-warning'></td>
                   
                     </tr>
                     <tr>
                       <td>Autorisation</td>
                       <td style={{backgroundColor: "#679DE5"}}></td>
                       </tr>
                       <tr>
                       <td>Jour Ferié</td>
                       <td style={{backgroundColor:"#BE94F0"}}></td>
                       </tr>
                       <tr>
                       <td>Mission</td>
                       <td className='table-default'></td>
                       </tr>
                  <tr>
                   <td>Repos</td>
                   <td style={{backgroundColor:"#0089F3"}}></td>
                  </tr>
                  
                  <tr>
                   <td>Abs demi-journnée</td>
                   <td style={{backgroundColor:"#F7EAA8"}}></td>
                  </tr>
                  
                  <tr>
                   <td>Téletravail</td>
                   <td style={{backgroundColor:"#3D3F43"}}></td>
                  </tr>
                  <tr>
                   <td>Pointage manquant</td>
                   <td  style={{backgroundColor:"#34FEF8"}}></td>
                  </tr>
                 
          
           </tbody>
         </table>
       
       </div>
         </div>
              <div className='col-md-9'>
              <div  className="container"style={{boxShadow :"  0 0 8px 0px" ,borderRadius:"7px"}}>
             
                <Bar 
                data={data}
                height={121}
                options={options}
                
                />
              </div>
              </div>
                    </div>
   
      </div></div></div>
    
      </div>
       </div>
     );
}
 
export default Tableau;