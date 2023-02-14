import React, { useState } from 'react'
import useFetch from '../useFetch';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Mouchard from "../Mouchardd/Mouchard"
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';



import { Alert } from '@mui/material';

function Ajoutercongé() {
  const url=process.env.React_App_URL;
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
    
  }
  const { data: users = [] } = useFetch(url+"user/")
    
  const { data: motifs = [] } = useFetch(url+"motif/")
  const [motif_abs, setType] = useState('');
   const[testdemijournne,settestdemijournne]=useState('')
  const [datedebut, setDateDebut] = useState('');
  const [datefin, setdatefin] = useState('');
  const [contact, setContact] = useState('');
  const [adresse, setadress] = useState('');
  const [employes, setEmployes] = useState(iduserinfo);
  const [personneinterimaire,setPersonneinterimaire]=useState('')
  const[joursouvres,setJoursOuvres]=useState('')
  const[datetimereprise,setDateTimeReprise]=useState('')
  const[commentaire,setCommentaire]=useState('')
 
  const [heure_debut, setHeureDebut] = useState('00:00:00.000000');
  const [heure_fin, setHeurefin] = useState('00:00:00.000000');
  const[nbjourretires,setnbjourretires]=useState('')
 const validation ="en_attente";
 
 const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null

const today=new Date()

const[parameters,setParameters]=useState([])
const [justifie,setJustifie]=useState('')
const [difference,setDiff]=useState('')
function SearchpourDemandeConge(d1,d2,nbjoursret,just,nbjourouv){
 
  fetch(url+'SearchpourDemandeConge/'+ iduserinfo+"/"+nbjoursret+"/"+nbjourouv+"/"+just+"/"+d1+"/"+d2).then(res =>{
  

    if (!res.ok){
        throw Error("could not fetch the data for that resource")
    }
    return res.json();
}).then(data =>{
    setParameters(data) ;
setDiff(parameters.difference)
})
.catch(err =>{
 
})
}
const[checkalert,setCheckAlert]=useState(false)
const[alertcalculjours,setCheckAlertcalculjours]=useState(false)
const [alerterror,setAlertError]=useState(false)
const[disabl,setDisable]=useState(false)
  const handlesubmit = (e) => {
    e.preventDefault()
  
 const nbjours=parameters.nbjours
const conge = {nbjours, motif_abs, datedebut, datefin, contact, adresse, employes, validation,datetimereprise,personneinterimaire,commentaire,heure_debut,heure_fin}
    if (personneinterimaire=='' || motif_abs=="" ){
   setCheckAlert(true)
      
    }else if(parameters.length==0) {

setCheckAlertcalculjours(true)
    }
    else{

      setDisable(true)
    fetch(url+"demendeconges/" + iduserinfo +"/"+"congé/"+datedebut+"/"+datefin ,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
        body: JSON.stringify(conge)
      })
      .then((response) =>{
        if(!response.ok) throw new Error(response.status);
      else{     setDisable(false)
         Mouchard("-","encours",employes,iduserinfo,"Demande  de congé de " +datedebut+"au "+datefin)
      
     window.location.reload(false);

    
    }
    }).catch((e) => {
    /**  if ( e.response.status=== 401) {
        logoutfunction(e.response.status)
      } */
      setAlertError(true)
     
      setDisable(false)
    })
      
    
  }}

  return (
    <div>
    
        <div className="row">
        
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ajouterpointage">
                    Demander Un Congé
                  </button>


                  <div className="modal fade" id="ajouterpointage" role="dialog" aria-labelledby="ajouterpointage" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">    Demander Un Congé</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">



                          <form>
                            <div className='row'>
                            
                            <div className='col-md'>
                                    <TextField
                                      id="outlined-select-currency"
                                      select
                                      label="Motif"
                                      value={motif_abs}
                                      onChange={(e) => { setType(e.target.value) }}
                                      helperText="Svp sélectionner une motif"
                                      margin='normal'
                                      fullWidth
                                    >
                                      {motifs.filter(x=>x.motifConge==true || x.motifdemijournne ==true).map((option) => (
                                        <MenuItem key={option.id} value={option.id} onClick={()=>{setJoursOuvres(option.nombrejours_ouvres);settestdemijournne(option.motifdemijournne);setnbjourretires(option.nbjours_retire);setJustifie(option.justifie);{option.motifdemijournne==true?SearchpourDemandeConge(datedebut,datedebut,option.nbjours_retire,option.justifie,option.nombrejours_ouvres):SearchpourDemandeConge(datedebut,datefin,option.nbjours_retire,option.justifie,option.nombrejours_ouvres)}}}>
                                   
                                          {option.motif}
                                       
                                        </MenuItem>
                                      ))}

                                    </TextField>




                                  </div>
                            </div>
                         {/**   {checked ? "" : */}

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">


                                    <input className="form-control" placeholder="Contact" value={contact} name="contact" onChange={(e) => setContact(e.target.value)} type="text" />

                                  </div>

                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">

                                    <input className="form-control" placeholder="Adresse" value={adresse} name="adresse" onChange={(e) => setadress(e.target.value)} type="text" />

                                  </div>


                                </div>
                                
                      



                                </div>
                               
                               
                            
                                
                                
                                <div className='row'>
                                  
                                  {testdemijournne==false?<><div className='col-md-4'>
                                    <div className="form-group">

<label for="datedebut">Date début</label>
                                      <input id="datedebut" className="form-control" placeholder="" min={today.getFullYear()+"-"+(today.getMonth()<10? "0"+today.getMonth():today.getMonth()) +"-20"} value={datedebut} name="date_debut" onChange={(e) => {setDateDebut(e.target.value);SearchpourDemandeConge(e.target.value,datefin,nbjourretires,justifie,joursouvres)}} type="date"  />

                                    </div>

                                  </div>   <div className='col-md-4'>
                                    <div className="form-group">
                                    <label for="datefin">Date fin(inclus)</label>

                                      <input id="datefin" className="form-control" placeholder="" value={datefin}  min={today.getFullYear()+"-"+(today.getMonth()<10? "0"+today.getMonth():today.getMonth()) +"-20"  && datedebut} name="date_fin" onChange={(e) => {setdatefin(e.target.value);SearchpourDemandeConge(datedebut,e.target.value,nbjourretires,justifie,joursouvres)}} type="date" />

                                    </div>

                                  </div></> 
                            :<div className='col-md-4'>
                            <div className="form-group">

<label for="datedebut">Date </label>
                              <input id="datedebut" className="form-control" placeholder="" min={today.getFullYear()+"-"+(today.getMonth()<10? "0"+today.getMonth():today.getMonth() )+"-20"} value={datedebut} name="date_debut" onChange={(e) => {setDateDebut(e.target.value);setdatefin(e.target.value);SearchpourDemandeConge(e.target.value,e.target.value,nbjourretires,justifie,joursouvres)}} type="date" />

                            </div>

                          </div>  }
                          <div className='col-md-4 pt-4'>
                <Autocomplete
   
   options={users}
   getOptionLabel={(option) => option.user_name +"  " +option.last_name || ""}

   renderInput={(params) => (
     <TextField {...params} label="Personne intérimaire" variant="outlined" />
   )}
   onChange={(event, value) =>{if (value && value.id){setPersonneinterimaire(value.id)}}} 
    
 /> 


                           
                           </div>
                                </div>

            

                <div className='row'>
                              
                              <div className="col-md-4">
                              <div className="form-group">
                                <label>nb jours ouvrés</label>
                              <input value={joursouvres} className="form-control"  disabled={true} />
</div>
                                </div>  
                          <div className="col-md-4">

                          {testdemijournne==false?
                              <div className="form-group">
                                <label>différence</label>
                              <input value={parameters.difference} className="form-control" disabled={true} />
</div>

:                            <div className="form-group">
<label>différence</label>
<input value={0.5} className="form-control"  disabled={true} />
</div>}
                                </div> 
                        
                                <div className='col-md-4'>
                              <label>Repos</label>
                            <input value={parameters.repos} className="form-control"  disabled={true} />
                            </div>
                            </div>
                            <div className='row'>
                     
                            <div className='col-md-4'>
                              <label>jours feriés</label>
                            <input value={parameters.jourferies} className="form-control"  disabled={true} />
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>nb jours demandés</label>
                              <input value={parameters.nbjours} className="form-control"  disabled={true}  />
</div>
                                </div>   
                                <div className="col-md-4">
                            <div className="form-group">
                              <label>Solde</label>
<input value={parameters.solde} className="form-control"  disabled={true}  />
</div>
                              </div>
                       <div className="col-md-4">
                            <div className="form-group">
                              <label>Nouveau Solde</label>
<input value={parameters.soldenouveau} className="form-control"  disabled={true} />
</div>
                              </div>
                            </div>
                            <div className='row'>
                            <div className="col-md">
                            <textarea placeholder='commentaire' className="form-control" value={commentaire} onChange={(e) => setCommentaire(e.target.value)} rows="4" ></textarea>
</div>
                            </div>

                       
                          
              <br/>
                         

              


<br/>

                            <div className="form-group"><button className="btn btn-primary" type="submit" onClick={handlesubmit} disabled={disabl? true:false}>Valider</button></div>

                            {checkalert &&
                                      <Alert variant="filled" severity="error">
                                   Personne intémrimaire ou motif  sont vides ! 
                                    </Alert> }
                                    
                                    {alertcalculjours &&
                                      <Alert variant="filled" severity="error">
                                 Il faut attendre le calcul de nombre de jours demandés ! 
                                    </Alert> }
                                    {alerterror &&
                                      <Alert variant="filled" severity="error">
                                Erreur!
                                    </Alert> }
                                   
                          </form>


                        </div>

                        <div className="modal-footer">



                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

  )
}
export default Ajoutercongé;