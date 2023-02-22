import React from 'react';

import useFetch from '../useFetch';




import ScrollContainer from 'react-indiana-drag-scroll'

import { useSelector } from 'react-redux';


import Ajoutercongé from './AjouterCongé';

function CrudcongesEmploye(){
  const url=process.env.React_App_URL;



  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
    
  }
    const { data: conges = [], isloading, error } = useFetch(url+"AffichageDemendesConges/"+iduserinfo)
    return(
    <div>
          <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
          <div className="card shadow">
          <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Demande de congés</h3>
      </div>
      <div className="card-header border-0">
  <Ajoutercongé/>
      </div>
      <div className="table-responsive">
      <ScrollContainer className="scroll-container">
        <table className="table align-items-center table-flush">
        <thead className="thead-light">
    <tr>

     <th style={{width:"10%"}} scope="col">Employé</th>
      <th style={{width:"10%"}} scope="col">début</th>
      <th style={{width:"10%"}} scope="col">fin</th>
      <th style={{width:"10%"}} scope="col">Contact</th>
      <th style={{width:"10%"}} scope="col">Adresse</th>
      <th style={{width:"10%"}} scope="col">état</th>
      <th style={{width:"10%"}} scope="col">Personne intérimaire</th>
      <th style={{width:"10%"}} scope="col">Commentaire</th>
      <th style={{width:"10%"}} scope="col">Nb.jours demandés</th>
      <th style={{width:"10%"}} scope="col">Solde</th>
    {/**  <th scope="col">Action</th> */}
    </tr>
  </thead>
  <tbody>
    {conges.filter(x=> x.mission==false && x.date_autorisation==null).map(conge =>
          <tr key={conge.idconge}>
           <td>{conge.user_name +" "+conge.last_name }</td>
           <td>{conge.datedebut}</td>
           <td>{conge.datefin}</td>
           <td>{conge.contact}</td>
           <td>{conge.adresse}</td>
           <td>{conge.validation}</td>
           <td>{conge.personneinterimaire}</td>
           <td>{conge.commentaire}</td>
           <td>{conge.nbjourscoupes}</td>
           <td>{conge.solde}</td>
        
     
         {/**  <td>
                        
           <a onClick={() => { handleClickOpen(); setcongeIddelete(conge.idconge); }}  ><DeleteIcon className={classes.icon} /></a>

                         
                          </td> */}
            </tr>
          )}
   
     
 
 {/**  <Dialog

BackdropProps={{ invisible: true }}
className={classes.dialog}
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  {"supprimer un contrat"}
</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
    êtes-vous sûr de vouloir supprimer cette demande de congé ?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose}>non</Button>
  <Button onClick={() => { DeleteCongé(congeIddelete) }}>
    oui
  </Button>
</DialogActions>
</Dialog>
 */}
  </tbody>
        </table>
        </ScrollContainer>
      </div>
  
    </div> 

          </div>
        </div>
        </div>
      </div> )
}
export default CrudcongesEmploye;