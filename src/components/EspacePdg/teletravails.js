
import React, { useState } from 'react'
import useFetch from '../useFetch';

import { makeStyles } from '@mui/styles';


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@mui/material/Button';

import Mouchard from '../Mouchardd/Mouchard';

import ScrollContainer from 'react-indiana-drag-scroll';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import $ from "jquery";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import frdatatable from '../../frdatatable.json'
function Teletravails(){
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
   var DRH=test['DRH']
   var rolename=test['rolename']
   var iddep=test['iddep']
   var emaildrh=test['emaildrh']
  
    
  }
  const url=process.env.React_App_URL;
  $(document).ready(function () {
    $('#teteltravtable').DataTable({
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
      ,"bDestroy": true,
      order:[[2,'asc'],[3,'asc']]
    })

  });
  const [openvalid, setopenvalid] = useState(false);
  const[idcongev,setIdcongev]=useState('')

 const[iduserrv,setIdUserrv]=useState('')
 const[datedebutv,setDatedebutv]=useState('')
 const[datefinv,setDatefinv]=useState('')
 const[validationnv,setValidationv]=useState('')
 const[validationrhhv,setValidationRHv]=useState('')
const[idchefv,setIdchefv]=useState('')
const[idrhv,setIdrhv]=useState('')
const[emailemployev,setEmailemployev]=useState('')
const[emailchefv,setEmailchefv]=useState('')
const[user_namev,setUserNameV]=useState('')
const[last_namev,setLastNameV]=useState('')
  const handleClickOpenvalid = (id,iduser,datedebut,datefin,validationn,validationrhh,chefid,rhid,emailemp,emailche,user_name,last_name) => {
    setopenvalid(true);
    setIdcongev(id)
    setIdUserrv(iduser)
    setDatedebutv(datedebut)
    setDatefinv(datefin)
    setValidationv(validationn)
    setValidationRHv(validationrhh)
    setIdchefv(chefid)
    setIdrhv(rhid)
    setEmailchefv(emailche)
    setEmailemployev(emailemp)
    setUserNameV(user_name)
  setLastNameV(last_name)
  };
  const handleClosevalid = () => {
    setopenvalid(false);

  };

  ///Refus
  
  const [openrefus, setopenrefus] = useState(false);
 const[idcongerefus,setIdcongeRefus]=useState('')

 const[iduserr,setIdUserr]=useState('')
 const[datedebut,setDatedebut]=useState('')
 const[datefin,setDatefin]=useState('')
 const[validationn,setValidation]=useState('')
 const[validationrhh,setValidationRH]=useState('')
const[idchef,setIdchef]=useState('')
const[idrh,setIdrh]=useState('')
const[emailemploye,setEmailemploye]=useState('')
const[emailchef,setEmailchef]=useState('')
const[user_namef,setUserNameF]=useState('')
const[last_namef,setLastNameF]=useState('')
  const handleClickOpenrefus = (id,iduser,datedebut,datefin,validationn,validationrhh,chefid,rhid,emailemp,emailche,user_namef,last_namef) => {
    setopenrefus(true);
    setIdcongeRefus(id)
    setIdUserr(iduser)
    setDatedebut(datedebut)
    setDatefin(datefin)
    setValidation(validationn)
    setValidationRH(validationrhh)
    setIdchef(chefid)
    setIdrh(rhid)
    setEmailchef(emailche)
    setEmailemploye(emailemp)
    setUserNameF(user_namef)
    setLastNameF(last_namef)
  };
  const handleCloserefus = () => {
    setopenrefus(false);
  };


  //
  const [opensupprimer, setopensupprimer] = useState(false);
 const[idcongesupp,setIdcongeSupp]=useState('')
  const handleClickOpensupprimer = (ids) => {
    setopensupprimer(true);
setIdcongeSupp(ids)
  };
  const handleClosesupprimer = () => {
    setopensupprimer(false);
  };
  const ValiderConge =async (id,iduser,datedebut,datefin,validation,validationrh) => {
  

     
    
    
      fetch(url+'RetrieveUpdateConge/' + id+"/"+validation+"/"+validationrh, {
          method: 'get',
          headers: {
          
            Authorization:token
        },
       
      }).then(() => {
       Mouchard("encours","confirmé",iduser,iduserinfo,"Validation de télétravail de "+datedebut+"au"+datefin)
    
    
      window.location.reload(false)
    
    
      }
    
      )
    }
    const onClick = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_name,last_name) => {
       
      if(DRH==true){

        if (validationrhh!="validé par rh"){
        // sendMail(emaildrh,"IPS Time:  Avis Favorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est validé avec un avis favorable !")

          sendMail(emailemploye,"IPS Time: Avis favorable pour la demande du téletravail du "+datedebut+" au "+datefin," Bonjour "+user_name+"&nbsp;"+"  La demande de téletravail du  "+datedebut+" au "+datefin+"   a été validé avec un avis favorable officiel !")
          sendMail(emailchef,"IPS Time: Avis favorable par drh pour la demande du téletravail du "+datedebut+" au "+datefin," Bonjour "+user_name+"&nbsp;"+"  La demande de téletravail du  "+datedebut+" au "+datefin+"   a été validé avec un avis favorable officiel !")
 
          const validationrh="validé par rh"
          if (validationn==''){
            const validation='en cours'
            return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

          }
          else{
            const validation=validationn
            return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

          }}else{
            alert('Le télétravail est déja validé')
          }
      }
    

      
      
      else{
        alert('L employé de ce télétravail a un chef/RH')
      }
  {/**  else    if (idchef==iduserinfo){

        if (validationn!="validé par chef"){
          sendMail(emailchef,"IPS Time:  Avis Favorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est validé avec un avis favorable !")

          sendMail(emailemploye,"IPS Time:  Avis favorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été validé par un avis favorable , L'avis de rh est importante pour la confirmation définitive!")

      const validation="validé par chef"
    

  if (validationrhh==''){
    const validationrh='en cours'
    return    ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

  }
  else{
    const validationrh=validationrhh
    return    ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

  }
          }else{
           
            alert('Le télétravail est déja validé')
          }  }
          else if(idrh==iduserinfo){

        if (validationrhh!="validé par rh"){
       
          sendMail(emailemploye,"IPS Time:  Avis favorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été validé par un avis favorable ")
          const validationrh="validé par rh"
        if (validationn==''){
          const validation='en cours'
          return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }
        else{
          const validation=validationn
          return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }}else{
          alert('Le télétravail est déja validé')
        }
      } */}
    
    };

    const onClickRefuser = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_name,last_name) => {

  
      if(DRH==true){
        if (validationrhh!="refusé par rh"){
        //sendMail(emaildrh,"IPS Time:  Avis défavorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")

          sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable officiel !")
          sendMail(emailchef,"IPS Time:  Avis défavorable par drh pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable officiel !")

          const validationrh="refusé par rh"


          if (validationn==''){
            const validation='en cours'
            return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

          }
          else{
            const validation=validationn
            return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

          }
        
        }else{
          alert('le télétravail est déja refusé')
        }
      }


  else{
    alert('L employé de ce téletravail a un chef/RH')
  }
  {/**else  if (idchef==iduserinfo){

    if (validationn!="refusé par chef"){
    
    sendMail(emailchef,"IPS Time:  Avis défavorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")

    sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable , L'avis de rh est importante pour la confirmation définitive!")
    const validation="refusé par chef"

if (validationrhh==''){
  const validationrh='en cours'
  return    RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)

}
else{
  const validationrh=validationrhh
  return    RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)

}}else{
  alert('le télétravail est déja refusé')
}
    }
    else if(idrh==iduserinfo){

      if (validationrhh!="refusé  par rh"){
        sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable définitive!")
        const validationrh="refusé  par rh"

      if (validationn==''){
        const validation='en cours'
        return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

      }
      else{
        const validation=validationn
        return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

      }
    
    }else{
      alert('le télétravail est déja refusé')
    }

  }  */}
};
const onClickAnnuler = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_name,last_name) => {

  
  if(DRH==true){
    if (validationrhh="validé par rh"){
    //sendMail(emaildrh,"IPS Time:  Avis défavorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")

      sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable officiel !")
      sendMail(emailchef,"IPS Time:  Avis défavorable par drh pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable officiel !")

      const validationrh="annulé par rh"


      if (validationn==''){
        const validation='en cours'
        return  AnnulerConge(id,iduserr,datedebut,datefin,validation,validationrh)   

      }
      else{
        const validation=validationn
        return  AnnulerConge(id,iduserr,datedebut,datefin,validation,validationrh)   

      }
    
    }else{
      alert('le télétravail est déja refusé')
    }
  }


else{
alert('L employé de ce téletravail a un chef/RH')
}
{/**else  if (idchef==iduserinfo){

if (validationn!="refusé par chef"){

sendMail(emailchef,"IPS Time:  Avis défavorable pour la demande de téletravail "+user_name + "   " ,"Bonjour, La demande de téletravail du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")

sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable , L'avis de rh est importante pour la confirmation définitive!")
const validation="refusé par chef"

if (validationrhh==''){
const validationrh='en cours'
return    RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)

}
else{
const validationrh=validationrhh
return    RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)

}}else{
alert('le télétravail est déja refusé')
}
}
else if(idrh==iduserinfo){

  if (validationrhh!="refusé  par rh"){
    sendMail(emailemploye,"IPS Time:  Avis défavorable pour la demande de téletravail","Bonjour , Votre demande de téletravail du "+datedebut+" au "+datefin+" a été refusé par un avis défavorable définitive!")
    const validationrh="refusé  par rh"

  if (validationn==''){
    const validation='en cours'
    return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

  }
  else{
    const validation=validationn
    return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

  }

}else{
  alert('le télétravail est déja refusé')
}

}  */}
};

const AnnulerConge = (id,iduser,datedebut,datefin,validation,validationrh) => {

  let List = { validation,validationrh }


  fetch(url+'RefusConge/' + id, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization:token
      },
      body: JSON.stringify(List)
  }).then(() => {
    Mouchard("encours","refusé",iduser,iduserinfo,"Refus de télétravail de " +datedebut+"au "+datefin)


 window.location.reload(false)

  }).catch((e) => {

   /** if ( e.response.status=== 401) {
        logoutfunction(e.response.status)
      } */
})
}
const onClickSupprimer = (idsu) => {
     
    
  return  SupprimerConge(idsu)
};

  
  const { data: Conges = [] } = useFetch(url+"TeletravailList_bychefRH/"+iduserinfo+"/"+iddep)
  
  const[id,setIdConge]=useState(null)
  const[idconge,setidConge]=useState(null)


  const[congeIddelete,setcongeIddelete]=useState(null)
  const [open, setOpen] = useState(false);
  const useStyle = makeStyles({
    icon: {
      marginRight: 10,
      marginLeft: 10,








      visibility:'visible'


    },
    hidesubmit: {
          visibility:'hidden'
  }
  });
  
  const classes = useStyle()
  const[iduser,setIdUser]=useState('')
  const[ddebut,setddebut]=useState('')
  const[dfin,setdfin]=useState('')
  const SupprimerConge = (id) => {

    fetch(url+'SupressionConge/' + id, {
        method: 'DELETE',
        headers: {

            'Content-Type': 'application/json',
            Authorization:token
        },
    }).then(() => {
        setOpen(false);
        Mouchard("encours","supprimé",iduser,iduserinfo,"Suppression de télétravail de "+ddebut+"au "+dfin)
        window.location.reload(false);
    }
    ).catch((e) => {

     /** if ( e.response.status=== 401) {
          logoutfunction(e.response.status)
        } */
  })


}

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


const RefuserConge = (id,iduser,datedebut,datefin,validation,validationrh) => {

    let List = { validation,validationrh }
  
  
    fetch(url+'RefusConge/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization:token
        },
        body: JSON.stringify(List)
    }).then(() => {
      Mouchard("encours","refusé",iduser,iduserinfo,"Refus de télétravail de " +datedebut+"au "+datefin)


   window.location.reload(false)
  
    }).catch((e) => {

     /** if ( e.response.status=== 401) {
          logoutfunction(e.response.status)
        } */
  })
  }
  const sendMail= (email,objet,message) =>{
  
   
    fetch(url+"SendMail/"+email+"/"+objet+"/"+message , 
    {
      method : "POST" , 
      headers : {
       "Content-Type" : "application/json" ,
      
      },
     
    }).then(() =>{
     

  }).catch((e) => {

 /**   if ( e.response.status=== 401) {
        logoutfunction(e.response.status)
      } */
})
  } 
  
return (
  <div>

<div className="container-fluid mt-5">
<div className="row">
  <div className="col">
  <div className="card shadow">
  <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Liste de téletravails</h3>
      </div>

      <ScrollContainer className="scroll-container">
      {Conges.length==0?<Backdrop  open={true}>
  <CircularProgress  style={{top : '50%'}} color="black" />
  </Backdrop> :
<div className="table-responsive">


<table id="teteltravtable"  className="display">

<thead>
  <tr>
    <th>Id </th>
    <th>Employé</th>



   {/** <th>RH</th> */}
    <th>Avis RH</th>
 
    <th>d.début</th>
    <th>d.fin</th>


    <th>Motif</th>

    <th>Commentaire</th>
    <th className='text-center'>Action</th>

  </tr>
</thead>
<tbody>
{Conges.map(c =>
 
<tr>
      <td>{c.id}</td>
      <td>{c.user_name}</td>
   


     {/** <td>{c.nomrh}</td> */}
      <td>{c.validationrh}</td>

      <td>{c.datedebut}</td>
      <td>{c.datefin}</td>

      <td>{c.motif}</td>

      <td>{c.commentaire}</td>
      <td>
        <tr>

        {c.validationrh=="validé par rh"  ?
<td>
<a  className="btn-sm btn-success "  disabled={true} >

Valider

</a>
&nbsp;
 <a  className="btn-sm btn-info " onClick={() => { handleClickOpenrefus(c.idconge, c.iduser, c.datedebut, c.datefin, c.validation, c.validationrh, c.chef_id, c.rh_id, c.emailemploye, c.email_chef, c.user_name, c.last_name) }} >

 Annuler
 
 </a>
 <Dialog

BackdropProps={{ invisible: true }}
className={classes.dialog}
open={openrefus}
onClose={handleCloserefus}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  {"Annuler un congé"}
</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
    êtes-vous sûr de vouloir annuler ce congé ?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleCloserefus}>non</Button>
  <Button onClick={() => { onClickAnnuler(idcongerefus, iduserr, datedebut, datefin, validationn, validationrhh, idchef, idrh, emailemploye, emailchef, user_namef, last_namef) }}>
    oui
  </Button>
</DialogActions>
</Dialog>
 

 </td>
:
c.validationrh=="annulé par rh" ?
<td>
<a  className="btn-sm btn-success "  disabled={true} >

Valider

</a>
</td>
:
c.validationrh=="refusé par rh" ?
<td>
<a className="btn-sm btn-danger " >

Refuser
       </a>
       </td>
:
<>
<td>
   <a  className="btn-sm btn-success "  onClick={() => { handleClickOpenvalid(c.idconge, c.iduser, c.datedebut, c.datefin, c.validation, c.validationrh, c.chef_id, c.rh_id, c.emailemploye, c.email_chef, c.user_name, c.last_name) }}>

Valider

</a>

<Dialog

BackdropProps={{ invisible: true }}
className={classes.dialog}
open={openvalid}
onClose={handleClosevalid}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
{"Valider un congé"}
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
êtes-vous sûr de vouloir valider ce congé ?
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleClosevalid}>non</Button>

<Button  onClick={() => { onClick(idcongev, iduserrv, datedebutv, datefinv, validationnv, validationrhhv, idchefv, idrhv, emailemployev, emailchefv) }}>
oui
</Button>

</DialogActions>
</Dialog>
   
</td>
<td>
         {
       <a className="btn-sm btn-danger " onClick={() => { handleClickOpenrefus(c.idconge, c.iduser, c.datedebut, c.datefin, c.validation, c.validationrh, c.chef_id, c.rh_id, c.emailemploye, c.email_chef, c.user_name, c.last_name) }}>

Refuser
       </a>}
   

   <Dialog

     BackdropProps={{ invisible: true }}
     className={classes.dialog}
     open={openrefus}
     onClose={handleCloserefus}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
   >
     <DialogTitle id="alert-dialog-title">
       {"Refuser un congé"}
     </DialogTitle>
     <DialogContent>
       <DialogContentText id="alert-dialog-description">
         êtes-vous sûr de vouloir refuser ce congé ?
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button onClick={handleCloserefus}>non</Button>
       <Button onClick={() => { onClickRefuser(idcongerefus, iduserr, datedebut, datefin, validationn, validationrhh, idchef, idrh, emailemploye, emailchef, user_namef, last_namef) }}>
         oui
       </Button>
     </DialogActions>
   </Dialog>

</td></>


}









<td>

{rolename=="RH" || DRH==true|| iddep!=undefined? "":
<a className='btn-sm btn-info' onClick={()=>{handleClickOpensupprimer(c.idconge)}}>
        
Supprimer
</a>
}
    <Dialog

    BackdropProps={{ invisible: true }}
    className={classes.dialog}
    open={opensupprimer}
    onClose={handleClosesupprimer}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      {"Supprimer un télétravail"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        êtes-vous sûr de vouloir supprimer ce télétravail ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClosesupprimer}>non</Button>
      <Button onClick={()=>{onClickSupprimer(idcongesupp)}}>
        oui
      </Button>
    </DialogActions>
    </Dialog>




</td>


        </tr>
      </td>
    </tr>)}
  </tbody>
  </table>


  
    </div>
  }
  </ScrollContainer>
</div>

</div> 
</div></div></div>
)
}
export default Teletravails;