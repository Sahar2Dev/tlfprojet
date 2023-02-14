import React from 'react';
import { useState } from 'react';

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";
import logoutfunction from '../authentification/logoutfunction';
 function AjouterMotif(){
    const [motif, setMotifName] = useState('');
 const[nombrejours_ouvres,setnombrejours_ouvres]=useState(null)
 const[motifConge,setmotifConge]=useState(false)
 const[motifmission,setmotifMission]=useState(false)
const[motifteletravail,setMotifTeletravail]=useState(false)
const[motifdemijournne,setmotifdemijournne]=useState(false)
const [justifie,setJustifie]=useState(false)

const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null

const url=process.env.React_App_URL;
const handleChangeJustifie=()=>{
  setJustifie(!justifie)
}
const handleChangeTeletravail=()=>{
  setMotifTeletravail(!motifteletravail)
}
const handleChangemotifdemijournne=()=>{
  setmotifdemijournne(!motifdemijournne)
}
 const handleChangeMotifMission = () => {
  setmotifMission(!motifmission)
 };
 const handleChangeMotifCongé = () => {
  setmotifConge(!motifConge)
 };


    const handlesubmit = (e) =>{
      
      e.preventDefault()
      if (motifdemijournne==true){
     const nbjours_retire=0.5;
      const motiff = {motif,nombrejours_ouvres,motifConge, motifmission,motifteletravail,nbjours_retire,motifdemijournne,justifie}
    
      fetch(url+"motif/" , 
      {
        method : "POST" , 
        headers : {
         "Content-Type" : "application/json" ,
         Authorization: token,
        },
        body : JSON.stringify(motiff)
      }).then(() =>{
      
     window.location.reload(false);
      
  
    }).catch((e)=>{
    
     
    })
    }
  else{
    const nbjours_retire=1;
    const motiff = {motif,nombrejours_ouvres,motifConge, motifmission,motifteletravail,nbjours_retire,motifdemijournne,justifie }
  
    fetch(url+"motif/" , 
    {
      method : "POST" , 
      headers : {
       "Content-Type" : "application/json" ,
       Authorization: token,
      },
      body : JSON.stringify(motiff)
    }).then(() =>{
    
    window.location.reload(false);
    

  }).catch((e)=>{

  })
  }
  
  }
return (
    <div>

    <div className="row">

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ajoutermotif">
Ajouter une motif
</button>


<div className="modal fade" id="ajoutermotif"  role="dialog" aria-labelledby="#ajoutermotif" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
<div className="modal-content">
<div className="modal-header">
  <h5 className="modal-title" id="exampleModalLabel">Ajouter une motif</h5>
  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div className="modal-body">
<form>
<input className="form-control" placeholder="nom de motif" value={motif} name="motif"  onChange={(e) => setMotifName(e.target.value)} type="text"/>
<div className='row'>
  <div className='col-md-4'>
<FormControlLabel control={<Checkbox/>} label='congé' value={motifConge} onChange={handleChangeMotifCongé} />
</div>

<div className='col-md-4'>
<FormControlLabel control={<Checkbox/>} label='mission' value={motifmission} onChange={handleChangeMotifMission} />
</div>
<div className='col-md-4'>
<FormControlLabel control={<Checkbox/>} label='téletravail' value={motifteletravail} onChange={handleChangeTeletravail} />

</div>
</div>
<div className='row pl-3'>

<div className='col-md-4'>
<FormControlLabel control={<Checkbox/>} label='demi journnée' value={motifdemijournne} onChange={handleChangemotifdemijournne} />
</div>

</div>
{ motifConge==true ?<><div className="form-group">
<label for="ouvres">Nombre de jours ouvrés</label>
  <input className="form-control" id="ouvres" placeholder="Nombre de jours ouvrés" type="number" step="1" value={nombrejours_ouvres} onChange={(e)=>{setnombrejours_ouvres(e.target.value)}} />
</div>

</>
:""}
{motifConge==true|| motifdemijournne==true?<FormControlLabel control={<Checkbox/>} label='Justifié' value={justifie} onChange={handleChangeJustifie} />:""
}

<div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
  <button className="btn btn-primary" type="submit" onClick={handlesubmit} >Valider</button>
</div>

</form>
</div>

</div>
</div>
</div>
</div>
</div>

)
 }
 export default AjouterMotif;