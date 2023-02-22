

import React, { useState } from 'react'
import useFetch from '../useFetch';

import { makeStyles } from '@mui/styles';


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@mui/material/Button';

import Mouchard from '../Mouchardd/Mouchard';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import $ from "jquery";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import frdatatable from '../../frdatatable.json'
import { useSelector } from 'react-redux';
function MissionsDRH(){
  const url=process.env.React_App_URL;
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
  
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
   var DRH=test['DRH']
   var admin=test['admin']
   var rolename=test['rolename']
   var iddep=test['iddep']
   var emaildrh=test['emaildrh']
   var emailsDRHS=JSON.stringify(test['emailsDRHS'])
    
  }
    $(document).ready(function () {
    $('#misstable').DataTable({
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
      order:[[3,'asc'],[7,'asc']]
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
const[user_name,setUserName]=useState('')
const[last_name,setLastName]=useState('')
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
    setUserName(user_name)
    setLastName(last_name)
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
const[user_namef,setUserNamef]=useState('')
const[last_namef,setLastNamef]=useState('')
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
    setUserNamef(user_namef)
    setLastNamef(last_namef)
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
       Mouchard("encours","confirmé",iduser,iduserinfo,"Validation de mission de "+datedebut+"au"+datefin)
    
    
      window.location.reload(false)
    
    
      }
    
      ).catch((e) => {

      /**  if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
    })
    }
    const onClick = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_name,last_name) => {
       
      if(DRH==true){

        if (validationrhh!=4){
        // sendMail(emaildrh,"IPS Time:  Avis Favorable pour la demande du mission "+user_name + "   " ,"Bonjour, La demande de mission du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est validé avec un avis favorable !")
       sendMail(emailchef,"IPS Time:  Avis Favorable  par rh pour la demande du mission "+user_name + "   "  ,"Bonjour, La demande de mission du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est validé avec un avis favorable par rh!")

          sendMail(emailemploye,"IPS Time: Validation de mission par RH","Bonjour  "+user_name+"  "+",  Votre RH a validé le mission de votre demande du "+datedebut+" au "+datefin+"  L'avis de chef est importante pour la confirmation définitive!")
          const validationrh=4
          if (validationn==''){
            const validation=0
            return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

          }
          else{
            const validation=validationn
            return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

          }}else{
            alert('Le mission est déja validé')
          }
      }
    
 

      
      else{
        alert('L employé de cette mission a un chef/RH')
      }
      {/**          else if(idrh==iduserinfo){
        if (validationrhh!=4){
       
        sendMail(emailemploye,"IPS Time: avis favorable pour la demande du mission","Bonjour "+user_name+" "+",  Votre RH a validé le mission de votre demande du " + datedebut + " au " + datefin + " L'avis de chef est importante pour la confirmation définitive!")
        
        
        const validationrh=4
        if (validationn==''){
          const validation=0
          return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }
        else{
          const validation=validationn
          return      ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }}else{
          alert('Le mission est déja validé')
        }
      }
       */}
  
    
    };
    const onClickRefuser = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_name,last_name) => {

  

      if(DRH==true){
        if (validationrhh!=5){
      //    sendMail(emaildrh,"IPS Time:  Avis défavorable pour la demande du mission "+user_name + "   "  ,"Bonjour, La demande de mission du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")

          sendMail(emailemploye,"IPS Time: avis défavorable pour la demande du mission ","Bonjour  "+user_name+" "+", Votre RH a refusé le mission de votre demande du " + datedebut + " au " + datefin + ". L'avis de chef est importante pour la confirmation définitive!")
          sendMail(emailchef,"IPS Time:  Avis défavorable par rh pour la demande du mission "+user_name + "   "  ,"Bonjour, La demande de mission du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable par rh !")
  
          const validationrh=5
  
            if (validationn==''){
              const validation=0
              return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   
  
            }
            else{
              const validation=validationn
              return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   
  
            }
          
          }else{
            alert('le mission est déja refusé')
          }
      }


  else{
    alert('L employé de cette mission a un chef/RH')
  }
  {/**    else if(idrh==iduserinfo){

    if (validationrhh!=5){
  sendMail(emailemploye,"IPS Time: Avis défavorable pour la demande de mission","Bonjour  "+user_name+"  "+",  Votre RH a refusé le mission de votre demande du " + datedebut + " au " + datefin + " L'avis de chef est importante pour la confirmation définitive! ")
    const validationrh=5

    if (validationn==''){
      const validation=0
      return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

    }
    else{
      const validation=validationn
      return  RefuserConge(id,iduserr,datedebut,datefin,validation,validationrh)   

    }
  
  }else{
    alert('le mission est déja refusé')
  }

}  */}
};

const onClickAnnuler = (id, iduserr, datedebut, datefin, validationn, validationrhh, idchef, idrh, emailemploye, emailchef, user_name, last_name) => {


  if (DRH==true) {

    if (validationrhh = "validé  par rh") {
    //  sendMail(emaildrh,"IPS Time:  Avis défavorable pour la demande du congé "+user_name ," Bonjour, La demande de congé du collaborateur "+user_name + "   " + "  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable !")
      sendMail(emailemploye, "IPS Time: Avis défavorable pour la demande du congé", "Bonjour  " + user_name + " " +  ",  Votre RH a refusé le congé de votre demande du " + datedebut + " au " + datefin + ".  L'avis de chef est importante pour la confirmation définitive!")
  
  
      sendMail(emailchef,"IPS Time:  Avis défavorable par  rh pour la demande du congé "+user_name ," Bonjour, La demande de congé du collaborateur "+user_name +"  du "+datedebut+" au "+datefin+"  est refusé avec un avis défavorable par  rh !")

      const validationrhAnu = 6

      if (validationn == '') {
        const validation = 0
        return AnnulerConge(id, iduserr, datedebut, datefin, validationrhAnu , validation)

      }
      else {
        const validation = validationn
        return AnnulerConge(id, iduserr, datedebut, datefin, validationrhAnu , validation)

      }

    } else {
      alert('le congé est déja refusé')
    }
  }



  else {
    alert('L employé de ce congé a un chef/RH ')
  }{/**      else if (idrh ==iduserinfo) {//ken employé eli d5al RH (3ando role rh et appartient à département x ou rh de département x)
    if (validationrhh !=5) {
      sendMail(emailemploye, "IPS Time: Avis défavorable pour la demande du congé", "Bonjour  " + user_name + " " +  ", Votre RH a refusé le congé de votre demande du " + datedebut + " au " + datefin + " L'avis de chef est importante pour la confirmation définitive!")
      const validationrh = 5
      if (validationn == '') {
        const validation = 0
        return RefuserConge(id, iduserr, datedebut, datefin, validation, validationrh)
      }
      else {
        const validation = validationn
        return RefuserConge(id, iduserr, datedebut, datefin, validation, validationrh)
      }
    } else {
      alert('le congé est déja refusé')
    }
  } */}
};

const AnnulerConge = (id, iduser, datedebut, datefin,validationrh , validation) => {

  let List = { validationrh , validation }

 
  fetch(url+'RefusConge/' + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization:token
    },
    body: JSON.stringify(List)
  }).then(() => {
    Mouchard("encours", "refusé", iduser,iduserinfo, "Refus de congé de " + datedebut + "au " + datefin)


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



  
  const { data: Conges = [] } = useFetch(url+"TestMissionsList/"+iduserinfo+"/"+iddep)
  
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
        Mouchard("encours","supprimé",iduser,iduserinfo,"Suppression de mission de "+ddebut+"au "+dfin)
        window.location.reload(false);
    }
    ).catch((e) => {

    /**  if ( e.response.status=== 401) {
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
console.log("test")
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
      Mouchard("encours","refusé",iduser,iduserinfo,"Refus de mission de " +datedebut+"au "+datefin)


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

   /** if ( e.response.status=== 401) {
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
      <h3 style={{color:"white"}}>Liste de missions</h3>
      </div>
<div className="table-responsive">

{Conges.length==0?  <Backdrop  open={true}>
  <CircularProgress  style={{top : '50%'}} color="black" />
  </Backdrop>:     

                  <table id="misstable" className="display" >

<thead>
  <tr>
    <th>Id </th>
    <th>Employé</th>
    <th>Chef</th>
    <th>Avis Chef</th>
 
    <th>Avis RH</th>
    <th>Solde</th>
    <th>début</th>
    <th>fin</th>


    <th>Nb.jours demandés</th>



    <th className='text-center'>Action</th>
  </tr>
</thead>
<tbody>
  {Conges.filter(w=>w.validation==1).map(c =>
    <tr>

 
<td>{c.idconge}</td>
      <td>{c.user_name}</td>
      <td>{c.nomchef}</td>
      <td>{c.validation  ==0 ? "en_attente" : c.validation ==1 ? "validé par chef" : c.validation ==2 ? "refusé par chef":c.validation ==3 ?"annulé par chef":""}</td>
      
      <td>{c.validationrh ==0? "en_attente" :c.validationrh ==4 ? "validé par rh" : c.validationrh ==5 ? "refusé par rh":c.validationrh ==6 ?"annulé par rh":""}</td>
     
      <td>{c.solde}</td>
      <td>{c.datedebut}  {c.heure_debut}</td>
      <td>{c.datefin}  {c.heure_fin}</td>
      <td>{c.nbjours}</td>
      <td>
        <tr>
        <td>        <a className="btn-sm btn-primary " data-toggle="modal" data-target={`#modalconge${c.idconge}`}  >
Détails

              </a>
              <div className="modal fade" id={`modalconge${c.idconge}`}  role="dialog" aria-labelledby={`modalconge${c.idconge}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">  
          
          <div className='container'>


      
           <table className=' border border-dark' >
            <tr>
              <th >Contact :</th>
              <td >{c.contact}</td>
            </tr>
            <tr>
              <th>Adresse :</th>
              <td>{c.adresse}</td>
            </tr>
            <tr>
              <th>Personne intérimaire :</th>
              <td>{c.personneinterimaire}</td>
            </tr>
            <tr>
              <th>Commentaire :</th>
              <td>{c.commentaire}</td>
            </tr>
            <tr>
              <th>Départ :</th>
              <td>{c.depart}</td>
            </tr>
            <tr>
              <th>Destination :</th>
              <td>{c.destination}</td>
            </tr>
            <tr>
              <th>Transport :</th>
              <td>{c.transport}</td>
            </tr>

           </table>
        
           </div>


          </div>

        </div>
      </div>
   

</div></td>
         { admin==true ?
         ""
         : 
         c.validationrh==4  ?
<td>
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
 c.validationrh==6 ?
""
:
c.validationrh==5?
""
: 
<>
<td>
         
          <a className='btn-sm btn-success' onClick={()=>{handleClickOpenvalid(c.idconge,c.iduser,c.datedebut,c.datefin,c.validation,c.validationrh,c.chef_id,c.rh_id,c.emailemploye,c.email_chef,c.user_name,c.last_name)}}>
        
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
          {"Valider un mission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            êtes-vous sûr de vouloir valider ce mission ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosevalid}>non</Button>
          <Button onClick={()=>{onClick(idcongev,iduserrv,datedebutv,datefinv,validationnv,validationrhhv,idchefv,idrhv,emailemployev,emailchefv,user_name,last_name)}}>
            oui
          </Button>
        </DialogActions>
        </Dialog>
          </td>

  
          <td>
          { <a className='btn-sm btn-danger' onClick={()=>{handleClickOpenrefus(c.idconge,c.iduser,c.datedebut,c.datefin,c.validation,c.validationrh,c.chef_id,c.rh_id,c.emailemploye,c.email_chef,c.user_name,c.last_name)}}>
     
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
          {"Refuser un mission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            êtes-vous sûr de vouloir refuser cette mission ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloserefus}>non</Button>
          <Button onClick={()=>{onClickRefuser(idcongerefus,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,user_namef,last_namef)}}>
            oui
          </Button>
        </DialogActions>
        </Dialog>
        
          </td></>
}

          
<td>
{rolename=="RH" || DRH==true || iddep!=undefined || admin==true ? "":
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
      {"Supprimer un mission"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        êtes-vous sûr de vouloir supprimer ce mission ?
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

</table>}
     
  
    </div>

</div>

</div> 
</div></div></div>
)
}
export default MissionsDRH;